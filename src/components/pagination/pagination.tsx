import React from 'react';
import PaginationControls from "@/components/pagination/pagination-controls";

const data = [
    'entry 1',
    'entry 2',
    'entry 3',
    'entry 4',
    'entry 5',
    'entry 6',
    'entry 7',
    'entry 8',
    'entry 9',
    'entry 10',
]
// link: https://gist.github.com/joschan21/7adf028d81a75536abcb1e98100ac661;
const Pagination = ({ searchParams, per_page }: { searchParams: string | string[], per_page: string | string[]}) => {
    const page = searchParams;
    const perPage = per_page;

    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page);

    const entries = data.slice(start, end)
    return (
        <div className={"flex flex-col items-center gap-2"}>
            {entries.map((entry) => (
                <p key={entry}>{entry}</p>
            ))}
            <PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} />
        </div>
    );
};

export default Pagination;