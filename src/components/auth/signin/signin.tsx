import { useState } from "react";

// ====================== STORE ======================
import { setLogin } from "../authslice";
import { IAUTHUSERDATA } from "../../../types/slicesTypes/authSliceTypes";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";

// ====================== MUI ======================
import { Button, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

// ====================== SNACKBAR ======================
import { setSuccessMessage } from "../../snackbar/snackbarslice";


interface ISIGNINPROPS {
    setIsShowSignup: (isShowSignup: boolean) => void
}

const SigninComponent: React.FC<any> = ({ setIsShowSignup }: ISIGNINPROPS) => {

    const dispatch = useAppDispatch();
    const { auth } = useAppSelector((state: RootState) => state);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);


    // ========================= HANDLE SIGN UP =========================
    const handleSignin = () => {

        setIsLoading(true)
        const user = {
            email,
            password
        }

        dispatch(setLogin(user));
        if (auth.users.find((singleUser: IAUTHUSERDATA) => singleUser?.email === email)) {
            dispatch(setSuccessMessage('Logged in Successful!'));
            setEmail('');
            setPassword('');
        }

        setIsLoading(false);
    };

    return (

        <Grid container spacing={2} maxWidth={600} margin="2rem auto" padding="2em 2em" className="card-style">

            <Typography variant="h1" component="h2" textAlign="left" width={1} fontSize="2rem" fontWeight={600}>
                Signin
            </Typography>

            <Grid xs={12}>
                <form action="#" onSubmit={handleSignin}>
                    <Grid xs={12} mt={2} p={0}>
                        {auth.error && <Typography component="h1" width={1} color="red">{auth.error}</Typography>}
                    </Grid>
                    <Grid xs={12} mt={2} p={0}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid xs={12} mt={2} p={0}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>

                    <Grid xs={12} mt={2} p={0}>
                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading || !email || !password} sx={{ height: "50px" }}>
                            {isLoading ? 'Loading...' : 'Signin'}
                        </Button>
                    </Grid>

                    <Grid xs={12} mt={2} p={0}>
                        <Typography fontSize={16} width={1}>
                            Don't have an account? <span className="pointer fw-600" onClick={() => setIsShowSignup(true)}>Signup</span>
                        </Typography>
                    </Grid>

                </form>
            </Grid>

        </Grid>

    )
}


export default SigninComponent;