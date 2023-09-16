import React from 'react';

type ParamsProps = {
    params: {
        searchId: string
    }
}
type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ]
}
const searchApi = async (searchId: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchId}&api_key=${process.env.API_KEY}`)
    const data: SearchResult = await res.json();
    return data;
}
const SearchResult = async ({ params: { searchId } }: ParamsProps) => {
    const searchResult = await searchApi(searchId);
    // console.log(searchResult.organic_results)
    return (
        <ul>
            {searchResult.organic_results.map((result) => {
                return (
                    <li key={result.position} >
                        <p>{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default SearchResult;