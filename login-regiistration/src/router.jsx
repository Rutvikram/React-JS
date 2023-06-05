import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./component/commoncompo/header"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Login from "./component/logincompo/login"
import { Suspense } from "react";

const AdminRoute = React.lazy(() => import('./admin/adminRouter'));
// const ClassCompoRoute = React.lazy(() => import('./component/ClassComponent/ClassCompoRoute'));
const MainRouter = createBrowserRouter([
 {
    path: "/",
    element:<><Header/><Home/></>
 },
 {
    path: "/about",
    element:<><Header/><About/></>
 },
 {
    path: "/work",
    element:<><Header/><Work/></>
 },
 {
    path: "/login",
    element:<><Login/></>
 },
 {
    path: "admin/*",
    element:<><Suspense fallback={<h2>Loading...</h2>}><AdminRoute/></Suspense></>
 }
]);

export default MainRouter;