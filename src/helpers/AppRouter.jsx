import {useContext} from "react";
import {CurrentUserContext} from "./AppProviders";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import {Header} from "../components/Header";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Box from "@mui/material/Box";
import {LinearLoader} from "../components/LinearLoader";
import Soon from "../pages/Soon";

export const AppRouter = () => {
    const {currentUser, accessToken} = useContext(CurrentUserContext);

    return (<Box sx={{backgroundColor: 'secondary.main', width: '100%', height: '100%', minHeight: '100vh'}}>
        <BrowserRouter>
            <Header/>
            {(!currentUser && accessToken) ? <LinearLoader/> : (<Routes>
                {currentUser !== null ? <>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Navigate to={'/home'}/>}/>
                </> : <>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/forgot-password" element={<Soon/>}/>
                    <Route path="*" element={<Navigate to={'/sign-in'}/>}/>
                </>}

            </Routes>)}
        </BrowserRouter>
    </Box>);
}
