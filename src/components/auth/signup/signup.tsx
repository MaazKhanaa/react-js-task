import { useState } from "react";

// ====================== MUI ======================
import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField, Typography } from "@mui/material";

// ====================== STORE ======================
import { setSignup } from '../authslice';
import { IAUTHUSERDATA } from "../../../types/slicesTypes/authSliceTypes";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";

// ====================== SNACKBAR ======================
import { setSuccessMessage } from "../../snackbar/snackbarslice";


interface ISIGNUPPROPS {
    setIsShowSignup: (isShowSignup: boolean) => void
}

const SignupComponent: React.FC<any> = ({ setIsShowSignup }: ISIGNUPPROPS) => {

    const dispatch = useAppDispatch();
    const { auth } = useAppSelector((state: RootState) => state);


    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isLoading] = useState<boolean>(false);


    // ========================= HANDLE SIGN UP =========================
    const handleSignup = () => {

        const user = {
            id: Math.random(),
            username,
            email,
            password
        }

        dispatch(setSignup(user));
        if (!!auth.users.length) {
            if (auth.users.find((singleUser: IAUTHUSERDATA) => singleUser?.email !== email)) {
                dispatch(setSuccessMessage('Signup Successful!'));
                setUsername('');
                setEmail('');
                setPassword('');
            }
        }
        else {
            // Initially when the users array is empty  
            dispatch(setSuccessMessage('Signup Successful!'));
            setUsername('');
            setEmail('');
            setPassword('');
        }


    };


    return (

        <Grid container spacing={2} maxWidth={600} margin="2rem auto" padding={{ xs: "1em", md: "2em 2em" }} className="card-style">

            <Typography variant="h1" component="h2" textAlign="left" width={1} fontSize="2rem" fontWeight={600}>
                Signup
            </Typography>

            <Grid xs={12} p={0}>
                {auth.error && <Typography component="span" width={1} color="red">{auth.error}</Typography>}
                <form action="#" onSubmit={handleSignup}>
                    <Grid xs={12} mt={3} p={0}>
                        <TextField
                            fullWidth
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                            {isLoading ? 'Loading...' : 'Signup'}
                        </Button>

                        <Grid xs={12} mt={1}>
                            <Typography fontSize={16} width={1}>
                                Already have an account? <span className="pointer fw-600" onClick={() => setIsShowSignup(false)}>Signin</span>
                            </Typography>
                        </Grid>

                    </Grid>
                </form>
            </Grid>


        </Grid>

    )
}


export default SignupComponent;