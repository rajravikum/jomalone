import React from 'react';
import { Outlet } from 'react-router-dom';


const ContainerLayout = () => {
    return (
        <div className="container lg:p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <Outlet />
            </div>
        </div>
    );
};

export default ContainerLayout;
