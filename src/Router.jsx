import { BrowserRouter,Routes,Route, Outlet } from "react-router";
import { lazy } from "react";
import PrimaryLayout from "./Layouts/Primary";
const HomePage = lazy(()=>import("./Pages/HomePage"));

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route element={<PrimaryLayout />}>
                <Route  path="/" element={<HomePage />} />
        </Route>
        </Routes>
        </BrowserRouter>
    )
}