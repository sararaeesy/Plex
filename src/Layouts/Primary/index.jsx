import { Fragment } from "react";
import HeaderPrimaryLayout from "./Header";
import { Outlet } from "react-router";
import FooterPrimaryLayout from "./Footer";

export default function PrimaryLayout(){
    return(
        <Fragment>
            <div className="container">
            <HeaderPrimaryLayout></HeaderPrimaryLayout>
                <Outlet />  
            <FooterPrimaryLayout></FooterPrimaryLayout>
            </div>
        </Fragment>
    )
}