import React from 'react';
import Foot from "../footer/Footer"


const MainLayout = ({ children }) => {
    return (
        <>
            {children}
            <Foot />
        </>
    );
};

export default MainLayout;