import { createBrowserRouter } from "react-router-dom";
import Header from "./component/commoncompo/header"
import Home from "./home"
import About from "./about"
import Work from "./work"
import Login from "./component/logincompo/login"


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
 }
])

export default MainRouter;