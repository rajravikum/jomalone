import React from 'react';
import { Outlet } from 'react-router-dom';


const ContainerLayout = () => {
    return (
        <div>
            <div className="flex-col w-full px-0 mx-auto md:flex-row">
                <Outlet />
            </div>
        </div>
    );
};

export default ContainerLayout;
