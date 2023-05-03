import {useContext} from "react";
import {CurrentUserContext} from "./AppProviders";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import {Header} from "../components/Header";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Box from "@mui/material/Box";

export function AppRouter() {
    const {currentUser, accessToken} = useContext(CurrentUserContext);

    return (
        <Box sx={{backgroundColor: 'secondary.main', width: '100%', height: '100%'}}>
            <BrowserRouter>
                <Header/>
                {(!currentUser && accessToken) ? <h1>Loading</h1> :
                    (<Routes>
                        {currentUser !== null ?
                            <>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="*" element={<Navigate to={'/home'}/>}/>
                            </>
                            :
                            <>
                                <Route path="/sign-up" element={<SignUp/>}/>
                                <Route path="/sign-in" element={<SignIn/>}/>
                                <Route path="*" element={<Navigate to={'/sign-in'}/>}/>
                            </>
                        }

                    </Routes>)
                }
            </BrowserRouter>
        </Box>
    );
}
