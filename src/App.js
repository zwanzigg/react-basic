import {useState} from 'react';
import './App.css';
import {AppRouter} from "./helpers/AppRouter";
import {AppProviders} from "./helpers/AppProviders";
import { ThemeProvider} from '@mui/material/styles';
import {DARK_THEME, LIGHT_THEME} from "./helpers/themes";

export default function MyApp() {
    const [theme, setTheme] = useState('light');
    return (
        <AppProviders theme={theme} setTheme={setTheme}>
            <ThemeProvider theme={theme === 'dark' ? DARK_THEME : LIGHT_THEME}>
                <AppRouter/>
            </ThemeProvider>
        </AppProviders>
    );
}

