import React from 'react';

const Team = async () => {
    const data = await fetch("http://localhost:3000/api/team", { cache: "no-cache"})
    console.log(data)
    return (
        <div className={"relative"}>
            Team Page is available
        </div>
    );
};

export default Team;