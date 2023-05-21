import { useState, useEffect } from 'react'

// ======================== MUI ========================
import { Table, Box, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


// ======================== STORE ========================
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { setLogout } from '../auth/authslice';


// ======================== SNACKBAR ========================
import { setErrorMessage } from '../snackbar/snackbarslice';

// ======================== ASSETS ========================
import defaultCoffeeImg from "../../assets/images/coffe.png";




const Main = () => {

    const [data, setData] = useState([]);

    const dispatch = useAppDispatch();
    const { auth } = useAppSelector((state: RootState) => state);

    const getData = async () => {

        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot');
            if (!resp.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await resp.json();
            setData(json);


        } catch (error: any) {
            dispatch(setErrorMessage(error.message));
        }
    }


    useEffect(() => {
        getData();
        const handleOnline = () => {
            getData();
        };
        window.addEventListener('online', handleOnline);
        return () => {
            window.removeEventListener('online', handleOnline);
        };
    }, []);


    return (
        <Box>
            <Grid container spacing={2} maxWidth={900} margin="2rem auto" padding="2em 4em" className="card-style">
                <Grid xs={8}>
                    Welcome
                    <Typography component="span" textAlign="end" fontSize="1rem" textTransform="capitalize" fontWeight={600}>
                        &nbsp;{auth.userData?.username}
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="h1" component="h2" textAlign="end" fontSize="1rem" fontWeight={600} className='pointer' onClick={() => dispatch(setLogout())}>
                        Logout
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <TableContainer component={Paper} className='card-style'>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sr. No.</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Ingredients</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((singleRecord: any) => (
                                    <TableRow
                                        key={singleRecord?.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell width={50}>
                                            {singleRecord?.id}
                                        </TableCell>
                                        <TableCell width={150}>
                                            <img src={singleRecord?.image === "Image-path" && defaultCoffeeImg || singleRecord?.image || defaultCoffeeImg} alt={singleRecord?.image || defaultCoffeeImg} width={100} height={90} style={{ borderRadius: "50%" }} />
                                        </TableCell>
                                        <TableCell width={100}>
                                            {singleRecord?.title}
                                        </TableCell>
                                        <TableCell width={200}>{singleRecord?.description}</TableCell>
                                        <TableCell width={150}>{singleRecord?.ingredients?.join(", ")}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>


            </Grid>

        </Box>
    )
}

export default Main