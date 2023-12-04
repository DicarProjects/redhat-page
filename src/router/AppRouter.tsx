import { Navigate, Route, Routes } from "react-router-dom";

import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { CapacitiesPage } from "../pages/CapacitiesPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/aboutus" element={<AboutUsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/capabilities" element={<CapacitiesPage/>} />
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    )
}