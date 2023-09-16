import React from 'react';
import {simulateDelay} from "../../../utils/utils";

const DashboardComponent = async ({de, da}: {de: number, da: string}) => {
    const data = await simulateDelay(da, de);
    return (
        <div>
            dashboard component - {data}
        </div>
    );
};

export default DashboardComponent;