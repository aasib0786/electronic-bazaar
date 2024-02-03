import { AppBar, Box, Button, Divider, Toolbar } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../../../assets/logo.gif"
import { Link, useNavigate } from "react-router-dom";

export default function CheckOutHeader() {
    var navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const handlehomeClick = () => {
        navigate('/home')
    }
    return (
        <div style={{ width: matches_sm ? '98%' : '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: 'black', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Toolbar>
                        <div style={{ marginLeft: '10%', width: '20%', display: 'flex' }}>
                            <img src={logo} onClick={handlehomeClick} style={{ width: '200px' }} />
                        </div>
                        <div style={{ width: '30%', marginLeft: '10%', border: '1px solid #fff', display: 'flex', borderRadius: '10px', background: '#191919' }}>
                            <div style={{ color: 'white', width: '80%', display: 'flex', justifyContent: 'center', color: 'white' }}>
                                <Link to={'/addtocard'}>
                                    <Button ><span style={{ padding: 6, color: 'white' }}>Cart</span></Button>
                                </Link>
                            </div>
                            <Divider style={{ borderRight: '1px solid #fff', }} />
                            <div style={{ color: 'white', width: '80%', display: 'flex', justifyContent: 'center', color: 'white',border: '3px solid #12Daa8', }}>
                            <Button style={{ color: 'white', width: '80%' }}>Shopping</Button>
                            </div>
                            <Divider style={{ borderRight: '1px solid #fff', }} />
                            <div style={{ color: 'white', width: '80%', display: 'flex', justifyContent: 'center', color: 'white'  }}>
                            <Button style={{ color: 'white', width: '80%' }}>Payment</Button>
                            </div>
                        </div>
                    </Toolbar>

                </AppBar>

            </Box>

        </div>)
}