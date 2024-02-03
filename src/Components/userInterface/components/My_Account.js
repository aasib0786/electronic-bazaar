import React from "react";
import Header from "./Header";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import { makeStyles } from "@mui/styles"
import { Button, Divider, Grid } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

var useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        background: '#191919',
    },
    box: {
        width: '100%',
        display: 'flex',
        background: '#191919',
        color: 'white',
        flexDirection: 'column',
    }
})

export default function My_Account() {
    var navigate = useNavigate()
    var classes = useStyles()

    const handleClick = () => {
        localStorage.clear('User')
        navigate('/home')

    }

    const handleMyProfile = () => {
        navigate('/ContactInformationComponents',{ state:{title:'My_profile'}} )
    }
    const handleMyAddress = () => {
        navigate('/myaddress' )   
    }
    const handleMyOrder = () => {
        navigate('/myorder' )   
    }
    const handleMyWishlist=()=>{
        navigate('/mywishlisht')
    }
    return (<div className={classes.root}>
        <div className={classes.box}>
            <div style={{ width: '100%' }}>
                <Header />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ width: '90%', margin: '2% 0% 2% 0%', fontSize: '1vw' }} >
                    My Account
                </div>
                <div style={{ width: '80%', fontSize: '3.5vh' }} >
                    My Account
                </div>
                <Grid container columnSpacing={2} style={{ width: '80%', }}>

                    <Grid onClick={handleMyProfile} item xs={4} style={{ marginTop: '1.5%' }} >

                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Profile</span>
                                <div style={{ fontSize: '1.9vh' }}>manage your saved addresses</div>
                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={4} onClick={handleMyAddress} style={{ marginTop: '1.5%' }}>
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '5px', border: '1px solid white' }}>< PermIdentityIcon style={{ overflow: 'hidden' }} /></span>
                            <div>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Address</span>
                                <div style={{ fontSize: '1.9vh' }}>Edit for basice ditail</div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={4} onClick={handleMyOrder} style={{ marginTop: '1.5%' }} >
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Orders</span>
                                <div style={{ fontSize: '1.9vh' }}>view,creck,cancel order and buy again</div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={4} style={{ marginTop: '1.5%' }} >
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Rewards</span>
                                <div style={{ fontSize: '1.9vh' }}>Exclusive offers and loyalty Rewards for you</div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={4} onClick={handleMyWishlist} style={{ marginTop: '1.5%' }} >
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Wishlist</span>
                                <div style={{ fontSize: '1.9vh' }}>Have a look at your favourite Products</div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={4} style={{ marginTop: '1.5%' }} >
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div >
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Device and Plans</span>
                                <div style={{ fontSize: '1.9vh' }}>manage your devices and plans</div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={4} style={{ marginTop: '1.5%' }} >
                        <div style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                            <div style={{ width: '90%' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>My Services Requests</span>
                                <div style={{ fontSize: '1.9vh' }}>manage, complaints, feedback, services Requests</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: '1.5%' }} >
                        <Button onClick={handleClick} style={{ border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'white' }} fullWidth>
                            <span style={{ display: 'flex', margin: '8%' }}>< Logout /></span>
                            <div style={{ width: '50%' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '2.6vh' }}>Logout My Profile</span>
                            </div>
                        </Button>
                    </Grid>
                </Grid>
            </div>


        </div>

    </div>)
}

{/*  
            <div style={{ width: '84%', marginLeft: '8%', display: 'flex', gap: 20, }}>
               
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                    <div>
                    </div>
                </div>
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                    
                </div>
            </div>
            <div style={{ width: '84%', marginLeft: '8%', marginTop: 20, display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'center' }}>
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                   
                </div>
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                    
                </div>
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                   
                </div>
            </div>
            <div style={{ width: '84%', marginLeft: '8%', marginTop: 20, display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'center' }}>
                <div style={{ width: '32%', border: '1px solid white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'flex', margin: '8%', borderRadius: '50%', border: '1px solid white' }}>< PermIdentityIcon /></span>
                    
                </div>
</div> */}
