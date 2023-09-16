import React from 'react';
import Search from "@/app/search/search";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Search',
    description: 'search results from search engine and return results',
}

const SearchRootLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <div>
            <Search />
            {children}
        </div>
    );
};

export default SearchRootLayout;