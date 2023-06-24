import * as React from 'react';
import {useContext, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link as RouterLink} from "react-router-dom";
import {Copyright} from "../../components/Copyright";
import {useForm} from "react-hook-form";
import {signUp} from "../../helpers/api";
import {CurrentUserContext} from "../../helpers/AppProviders";

export default function SignUp() {
    const {setAccessTokenToLocalStorage} = useContext(CurrentUserContext);
    const [error, setError] = useState('');

    const {
        register, handleSubmit, formState: {errors, isValid, isDirty, touchedFields}
    } = useForm({
        mode: "onTouched",
    },);


    const onSubmit = async (data) => {
        const response = await signUp(data);
        if (!response.error) {
            setAccessTokenToLocalStorage(response.accessToken);
        }
    }
    return (<Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
            sx={{
                marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="First Name"
                                name="firstName"
                                id="firstName"
                                helperText={errors.firstName || !touchedFields.firstName ? "Minimum length is 3" : "Perfect!"}
                                error={!!errors.firstName}
                                {...register("firstName", {minLength: 3, required: true, pattern: /[A-Za-z]{3}/})}
                                inputProps={{
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                id="lastName"
                                helperText={errors.lastName || !touchedFields.lastName ? "Minimum length is 3" : "Perfect!"}
                                error={!!errors.lastName}
                                {...register("lastName", {minLength: 3, required: true})}
                                inputProps={{
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                id="email"
                                helperText={errors.email || !touchedFields.email ? "Minimum length is 3" : "Perfect!"}
                                error={!!errors.email}
                                {...register("email", {minLength: 3, required: true, pattern: /[A-Za-z]{3}/})}
                                inputProps={{
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                name="password"
                                id="password"
                                helperText={errors.password || !touchedFields.password ? "Minimum length is 3" : "Perfect!"}
                                error={!!errors.password}
                                {...register("password", {minLength: 3, required: true})}
                                inputProps={{
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I accept the Terms of Use."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={!isDirty || !isValid}
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    {error && <i>{error}</i>}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/sign-in" variant="body2">
                                Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
        </Box>
        <Copyright sx={{mt: 5}}/>
    </Container>);
}
