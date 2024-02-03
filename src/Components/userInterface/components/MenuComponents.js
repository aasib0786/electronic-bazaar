import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Menu , MenuItem,Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState  } from "react";
import { getData, postData } from "../../../services/FetchNodeServices";


export default function MenuComponents() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [Categories , setCategories] = useState([])
    const [products , setProducts] = useState([])

    const fetchCategory=async()=>{
        var result = await getData('Userinterface/fetch_all_category')
        setCategories(result.data)
       }

       useEffect(function(){
        fetchCategory()
       },[])
const showcategoryname=()=>{
    return Categories.map((item)=>{
        return <Button
        
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       style={{color:'white'}}
       onClick={(event)=>handleClick(item.categoryid , event)}
      >
       {item.categoryname}
        
      </Button>
    })
}
    const handleClick = (categoryid,event) => {
        setAnchorEl(event.currentTarget);
         fetchallproductbycategory(categoryid)
      };

const fetchallproductbycategory=async(categoryid)=>{
     var result = await postData('Userinterface/display_all_product_for_menu',{categoryid:categoryid})
     setProducts(result.data)
     console.log('jkhjjjhhhhhhhhhhhjjjjjjjjjj',result.data)
}

const showMenuItems=()=>{
    return products.map((item)=>{
        return <MenuItem  onClick={handleClose}>{item.productname}</MenuItem>
    })
}

    const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <div>
            <Box  sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{  background: '#353535',height:'40px',justifyContent:'center',alignItems:'center'}}>
                <div>
     
     { showcategoryname()}
      <Menu
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
          
        }}
      >
        {showMenuItems()}
      </Menu>
    </div>
        </AppBar>

            </Box>
            
        </div>
    )
}