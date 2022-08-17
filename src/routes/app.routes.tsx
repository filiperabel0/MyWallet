import React from "react";
import {Routes, Route} from 'react-router-dom';

import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/List/:type" element={<List/>} />
    </Routes>
);

export default AppRoutes;