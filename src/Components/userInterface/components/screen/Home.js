import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useStyles } from "./projectCss";
import MainSlider from "../MainSlider";
import AddSlider from "../AddSlider";
import CircleSlider from "../CircleSlider";
import FestivalSlider from "../FestivalSlider";
import ProductSlider from "../ProductSlider";
import MenuComponents from "../MenuComponents";
import ProductDetailComponents from "../product";
import HighlightSlider from "../HighlightSlider";
import { getData, postData } from "../../../../services/FetchNodeServices";
import BrandSlider from "../brandSlider";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fodder from "../Fodder";

export default function Home(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
   const classes = useStyles()
   const [banner , setBanner] = useState([])
   const [Categories , setCategories] = useState([])
   const [productDeals , setProductsDeals] = useState([])
   const [brands , setBrands] = useState([])
//    const [categoryName , setCategoryName] = useState([])

   const fetchBrand=async()=>{
    var result = await getData('Userinterface/fetch_all_brand')
    setBrands(result.data)
   }
   
   const fetchProduct=async()=>{
    var result = await postData('Userinterface/display_all_product_by_status',{status:'Deal of the day'})
    setProductsDeals(result.data)
    console.log('ppppppppppppppr',result.data)
   }

   const fetchCategory=async()=>{
    var result = await getData('Userinterface/fetch_all_category')
    setCategories(result.data)
   }

   const fetchBanners=async()=>{
    var result = await getData('Userinterface/fetch_all_banner')
    setBanner((result.data[0].files).split(','))
   }

   useEffect(function(){
    fetchBanners()
    fetchCategory()
    fetchProduct()
    fetchBrand()
   },[])
    return(
        <div className={classes.Home_root}>
            <div style={{position:'sticky' , top:'0' , zIndex:'2'}}>
            <Header/>
            {matches?<></>:<MenuComponents/>}
            </div>
            <div className={classes.Home_MainSlider}>
            <MainSlider banners={banner} />
            </div>
            <div className={classes.Home_Slider} style={{marginTop:'12px'}}>
                <AddSlider/>
            </div>
            <div style={{marginTop:'10px'}}>
            <CircleSlider cotegorys={Categories}/>
            </div>
           
            <div style={{marginTop:'5%'}}>
            <FestivalSlider/>
            </div>
            <div style={{marginTop:'5%'}}>
            <ProductSlider productDeals={productDeals} title={'Deal of the day'} />
            </div>
            <div style={{marginTop:'5%'}}>
                <HighlightSlider/>
            </div>
            {/* <div style={{marginTop:'5%'}}>
                <ProductDetailComponents/>
            </div> */}
            <div style={{marginTop:'5%'}}>
                <BrandSlider brand={brands}/>
            </div>
            <div style={{marginTop:'5%'}}>
                <Fodder />
            </div>
        </div>
      
    )
}