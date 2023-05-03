import {useContext,} from "react";
import {CurrentUserContext} from "../helpers/AppProviders";
import {AppNav} from "./AppNav";

export const Header = () => {
    const {currentUser} = useContext(CurrentUserContext);

    const pages = [{
        title: 'Sign In',
        route: '/sign-in'
    }, {
        title: 'Sign Up',
        route: '/sign-up'
    }];
    const protectedPages = [{
        title: 'Home',
        route: '/home'
    }];
    const settings = [{
        title: 'Profile',
        route: '/profile'
    }];

    return (
        <>
            <AppNav pages={currentUser === null ? pages : protectedPages} settings={settings}/>
        </>
    )
}
