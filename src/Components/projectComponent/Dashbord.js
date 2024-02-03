import React from "react";
import { Button, Grid, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink, json } from "react-router-dom";
import { Leaderboard, Dashboard, ShoppingCart, Store, AddShoppingCart, Notifications, Panorama, PermMedia, Chat, Logout } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import DisplayAllCategory from "../DisplayAllCategory";
import Brand from "../Brands";
import DisplayAllBrand from "../DisplayAllBrands";
import DisplayAllProduct from "./DisplayAllProduct";
import Products from "./Products";
import DisplayAllProductDetails from "./DisplayAllProductDetails";
import Banner from "./Banner";
import CategoryBanner from "./CategoryBanner";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails"
import Category from "../Category";
import { serverURL } from "../../services/FetchNodeServices";


var useStyles = makeStyles({
    root: {
        width: '100vw',
        Height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    leftbar: {
        width: '100%',
        height:'100vh',
        background: '#ecf0f1',
        display: 'flex'
    },
    rightbar: {

        width: '100%',
        height: 715,
        display: 'flex',
        flexDirection: 'column'

    },
    profile: {
        width: '225px',
        height: '130px',
        marginTop: '10px',
        marginLeft: '10px',
        borderRadius: '10px'
    },
    profileimg: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        marginLeft: '95px',
        objectFit: 'cover'
    },
    profileNameText:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
    },
    lists: {
        width: '192px',
        height: '130px',
        marginTop: '50px',
        marginLeft: '5px',
    },
    icon: {
        padding: '10px'
    },
    icontext: {
        marginLeft: '10px',
        marginBottom: '10px'

    }
})

export default function Dashbord() {
    var navigate = useNavigate()
    var admin = JSON.parse(localStorage.getItem('ADMIN'))
    console.log(admin)
    var useStyle = useStyles()
    const handlelogout = () => {
        // localStorage.clear()
    }
    if (admin) {
        return (
            <div className={useStyle.root} >
                <Grid container spacing={0}>
                    <Grid item xs={2} className={useStyle.leftbar}>
                        <div className={useStyle.profile}>
                            <div>
                                <img className={useStyle.profileimg} src={`${serverURL}/images/${admin.picture}`} />
                                <div style={{ background: '#dff9fb', marginLeft: '40px', borderRadius: '10px', width: '160px' }}>
                                    <h3 className={useStyle.profileNameText}>{admin.fistname} {admin.lastname} </h3>
                                    <p className={useStyle.profileNameText} style={{ fontSize: '10px' }}>{admin.email}</p>
                                    <p className={useStyle.profileNameText} style={{ fontSize: '10px' }}>{admin.mobailno} </p>
                                </div>
                            </div>
                            <div className={useStyle.lists}>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord">
                                    <div className={useStyle.icon} >
                                        <Dashboard />
                                        <span className={useStyle.icontext}>Dashboard</span>
                                    </div>
                                </NavLink>

                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/categorys">
                                    <div className={useStyle.icon} >
                                        <Leaderboard />
                                        <span className={useStyle.icontext}>Categorys</span>
                                    </div>
                                </NavLink>

                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/brand">
                                    <div className={useStyle.icon} >
                                        <Store />
                                        <span className={useStyle.icontext}>Brands</span>
                                    </div>
                                </NavLink>

                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/product">
                                    <div className={useStyle.icon} >
                                        <span style={{}}><ShoppingCart /></span>
                                        <span className={useStyle.icontext}>Products</span>
                                    </div>
                                </NavLink>

                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/productdetail">
                                    <div className={useStyle.icon} >
                                        <AddShoppingCart />
                                        <span className={useStyle.icontext}>Specification</span>
                                    </div>
                                </NavLink>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/banner">
                                    <div className={useStyle.icon} >
                                        <Panorama />
                                        <span className={useStyle.icontext}>Banner</span>
                                    </div>
                                </NavLink>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/dashbord/categorybanner">
                                    <div className={useStyle.icon} >
                                        <PermMedia />
                                        <span className={useStyle.icontext}>Category Banner</span>
                                    </div>
                                </NavLink>
                                <hr />
                                <div style={{ marginLeft: '55px', display: 'flex' }}>
                                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/adminlogin">
                                        <Button onClick={handlelogout}>
                                            <span style={{ marginTop: '8px', marginRight: '10px' }}><Logout /></span>
                                            <span>LogOut</span>
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={useStyle.rightbar}>
                        <Grid style={{ background: '#dff9fb', flexDirection: 'column', width: '100%', height: '50px' }}>
                            <div style={{ marginLeft: '85%', padding: '5px', display: 'flex', }} >
                                <span style={{ marginLeft: '15px', marginTop: '10px' }}>
                                    <Chat />
                                    <span className={useStyle.topbarIconsBadge}>2</span>
                                </span>
                                <span style={{ marginLeft: '15px', marginTop: '10px', height: '100%' }}>
                                    <Notifications />
                                    <span className={useStyle.topbarIconsBadge}>2</span>
                                </span>
                                <span style={{ marginLeft: '15px' }}><img src={`${serverURL}/images/${admin.picture}`} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} /></span>
                            </div>
                            <Grid item xs={12}>
                                <Routes>
                                    <Route element={<Category />} path="/categorys" />
                                    <Route element={<DisplayAllCategory />} path="/displayallcategory" />
                                    <Route element={<Brand />} path="/brand" />
                                    <Route element={<DisplayAllBrand />} path="/displayallbrand" />
                                    <Route element={<Products />} path="/product" />
                                    <Route element={<DisplayAllProduct />} path="/displayallproduct" />
                                    <Route element={<ProductDetails />} path="/productdetail" />
                                    <Route element={<DisplayAllProductDetails />} path="/displayallproductdetail" />
                                    <Route element={<Banner />} path="/banner" />
                                    <Route element={<CategoryBanner />} path="/categoryBanner" />
                                </Routes>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        )

    } else { navigate('/adminlogin') }


}