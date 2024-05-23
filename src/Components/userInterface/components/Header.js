import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../../../assets/Electronics Bazar.png"
import SearchComponent from "./SearchComponent";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { getData, postData } from "../../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import LoginMyProfile from "./LoginMyProfile";


export default function Header({ props }) {
    var userData = JSON.parse(localStorage.getItem('User'))
    // console.log("userDataUUUUU",userData)
    var navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [Categories, setCategories] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [status , setStatus] = useState(false)
    const open = Boolean(anchorEl);
    var cart = useSelector(state => state.mycart)
    console.log('BADGE:-', cart)
    var productCart = Object.values(cart)

    const fetchCategory = async () => {
        var result = await getData('Userinterface/fetch_all_category')
        setCategories(result.data)
    }

    useEffect(function () {
        fetchCategory()
    }, [])

    const showMenuItems = () => {
        return Categories.map((item) => {
            return <MenuItem onClick={handleClose}> {item.categoryname} </MenuItem>
        })
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlehomeClick = () => {
        navigate('/home')
    }

    const handle_My_Account=()=>{
        var userData = JSON.parse(localStorage.getItem('User'))
        if(userData)
        {
        navigate('/my_account')
        }
        else
        {
            setStatus(true)
        }
    }

    return (
        <div style={{ width: matches_sm ? '100%' : '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: 'black', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Toolbar>
                        <div style={{ marginLeft: '10%', width: '20%', display: 'flex' }}>
                            <img src={logo} onClick={handlehomeClick} color="white" style={{ width: '80px',height:'60px',background:'#bdc3c7',borderRadius:'10px' }} />
                        </div>
                        {matches ? <></> :
                            <div style={{ width: '30%', marginTop: '10px', marginBottom: '10px' }} >
                                <SearchComponent />
                            </div>}
                        <div style={{ display: 'flex', width: '20%', marginLeft: 'auto', marginTop: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <AccountCircle onClick={handle_My_Account} style={{ fontSize: 40 }} />
                                <div style={{ fontSize: 8, color: '#fff' }}>
                                    {userData?.username}
                                </div>
                            </div>
                            <Link to='/addtocard' >
                                <Badge color="secondary" badgeContent={productCart.length} showZero >
                                    <ShoppingCart style={{ fontSize: 40, color: 'white' }} />
                                </Badge>
                            </Link>
                        </div>
                    </Toolbar>
                    <div>
                        {matches ?
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '84%', margin: '-10px 0px 10px 15px' }} >
                                <span ><MenuIcon
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    fontSize="large" /></span>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{ 'aria-labelledby': 'fade-button', }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}

                                >
                                    {showMenuItems()}
                                </Menu>
                                <span><SearchComponent /></span>
                            </div> : <></>}
                    </div>
                </AppBar>

            </Box>
            <LoginMyProfile state={'userHandle'} status={status} setStatus={setStatus} />

        </div>
    )
}