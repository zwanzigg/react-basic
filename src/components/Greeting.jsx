import {useContext} from "react";
import {CurrentUserContext} from "../helpers/AppProviders";
import Typography from "@mui/material/Typography";

export const Greeting = () => {
    const {currentUser} = useContext(CurrentUserContext);
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            Welcome, {currentUser.first_name} {currentUser.last_name} !
        </Typography>
    )
}