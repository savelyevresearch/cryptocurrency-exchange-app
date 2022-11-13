import { useEffect, useState } from "react";

const TENOR_API_KEY = 'AIzaSyDjhdzfZSUNY_GHYgQlptLi1sKJZuogb60';

const useFetch = ({ keyword }) => {
    const [gifURL, setGifURL] = useState('');

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://tenor.googleapis.com/v2/search?key=${TENOR_API_KEY}&q=${keyword.split(' ').join('')}&limit=1`);

            const { results } = await response.json();

            setGifURL(results[0]?.media_formats?.gif?.url);
        } catch (error) {
            setGifURL('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');

            console.error(error);
        }
    };

    useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword]);

    return gifURL;
};

export default useFetch;