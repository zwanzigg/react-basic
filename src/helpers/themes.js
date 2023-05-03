import {createTheme} from "@mui/material/styles";
import {green, lightGreen, orange, yellow} from "@mui/material/colors";

export const DARK_THEME = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: yellow[100]
        },
    },
});

export const LIGHT_THEME = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: lightGreen[100]
        },

    },
});