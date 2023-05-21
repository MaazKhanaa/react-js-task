import {
    Table,
    Box,
    Typography,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import defaultCoffeeImg from '../../assets/images/coffe.png';

interface MainProps {
    handleLogout: () => void;
    handleSnackbarClose?: () => void;
    data: any[];
    username: string | undefined;
    errorMessage?: string;
}

const Main = ({ handleLogout, data, username }: MainProps) => (
    <>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={3} borderBottom="1px solid gainsboro">
            <Box>
                Welcome
                <Typography component="span" textAlign="end" fontSize="1rem" textTransform="capitalize" fontWeight={600}>
                    &nbsp;{username}
                </Typography>
            </Box>
            <Button variant="contained" color="error" sx={{ color: 'white' }} onClick={handleLogout}>
                Logout
            </Button>
        </Box>
        <Box className="bodyContent">
            <Container maxWidth="lg">
                <Grid xs={12} my={5}>
                    <TableContainer component={Paper} className="card-style">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Sr. No.</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Ingredients</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((singleRecord: any) => (
                                    <TableRow key={singleRecord?.id} sx={{
                                        '&:nth-of-type(odd)': {
                                            backgroundColor: '#f3f3f3',
                                        },
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}>
                                        <TableCell width={50}>{singleRecord?.id}</TableCell>
                                        <TableCell width={150}>
                                            <img
                                                src={
                                                    singleRecord?.image === 'Image-path' && defaultCoffeeImg
                                                    || singleRecord?.image
                                                    || defaultCoffeeImg
                                                }
                                                alt={singleRecord?.image || defaultCoffeeImg}
                                                width={100}
                                                height={90}
                                                style={{ borderRadius: '50%' }}
                                            />
                                        </TableCell>
                                        <TableCell width={100}>{singleRecord?.title}</TableCell>
                                        <TableCell width={200}>{singleRecord?.description}</TableCell>
                                        <TableCell width={150}>{singleRecord?.ingredients?.join(', ')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        </Box>
    </>
);

export default Main;
