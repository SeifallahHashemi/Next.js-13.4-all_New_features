import React from 'react';
import { stop } from "@/../utils/utils";

const DataDisplay = async ({ id, name}: {id: string | undefined, name: string | undefined}) => {
    const data = await stop(id, name);
    return (
        <div>
            {JSON.stringify(data, undefined, 2)}
        </div>
    );
};

export default DataDisplay;