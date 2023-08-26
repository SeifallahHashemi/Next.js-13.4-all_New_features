"use client"
import React, {useEffect, useState} from 'react';

const AbortControllerCom = () => {
    const [id, setId] = useState(1)

    const clickHandler = () => {
        setId(Math.floor(Math.random() * 100))
    }
    return (
        <div>
            <button onClick={clickHandler} className={"bg-blue-500 px-4 py-2 text-white rounded mr-2"}>Show other Post</button>
            <PostBody id={id}/>
        </div>
    );
};

export function PostBody({ id }) {
    const [text, setText] = useState("")

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        fetch(`https://dummyjson.com/posts/${id}`, {
            signal: signal
        })
            .then((res) => res.json())
            .then((data) => setText(data.body))

        return () => controller.abort();
    }, [id]);

    return (
        <p>{text}</p>
    )
}

export default AbortControllerCom;