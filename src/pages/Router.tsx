import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import PagesContainer from "./PagesContainer/PagesContainer";
import Footer from "./Footer/Footer";
import Men from "./Men/Men";


export enum RoutesList {
    Home = '/',
    Header = '/header',
    Women = '/women',
    Men = '/men',
    Default = '*',

}

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />} >
                    <Route
                        path={RoutesList.Home}
                        element={<Home />}
                    />
                    <Route
                        path={RoutesList.Women}
                        element={<Header />}
                    />
                    <Route
                        path={RoutesList.Men}
                        element={<Men />}
                    />
                    <Route
                        path={RoutesList.Default}
                        element={<Navigate to={RoutesList.Home} />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}
export default Router;