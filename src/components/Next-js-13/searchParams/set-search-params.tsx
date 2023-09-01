import React, {useCallback} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

const SetSearchParams = () => {
    const searchParams = useSearchParams()!;
    const id = searchParams.get('id');
    const router = useRouter();
    const createQueryString = useCallback((name: string, value: string) => {
        // @ts-ignore
        const params = new URLSearchParams(searchParams);
        params.set(name, value);

        return params.toString();
    }, [searchParams])
    const clickHandler = () => {
        let nextId = parseInt(id ?? "0") + 1;
        router.push(`/?${createQueryString("id", nextId.toString())}`)
    }
    return (
        <div>
            <button onClick={clickHandler} className={"bg-amber-600 px-3 py-2 border-gray-100"}>Next Project</button>
        </div>
    );
};

export default SetSearchParams;