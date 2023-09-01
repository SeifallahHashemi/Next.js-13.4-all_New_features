"use client"
import {useSearchParams} from "next/navigation";

const SearchParamsGuide = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const data = {id: id || "", name: name || ""};
    return (
        <div>
            {JSON.stringify(data, undefined, 2)}
        </div>
    );
};

export default SearchParamsGuide;