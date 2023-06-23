import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

const Layout = () => {
    return <>
     <Header />
     <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
     </Suspense>
    </>
}

export default Layout;