import React, { useEffect, useState } from "react"
import {FormControl,FormLabel,Radio,RadioGroup,FormControlLabel,MenuItem, Select,InputLabel, Avatar, Button, Grid,TextField } from "@mui/material";
import Heading from "../../Components/projectComponent/Heading";
import category from "../../../src/assets/category.png"
import { makeStyles } from "@mui/styles"
import { getData , postData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
import ReactQuill from 'react-quill';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import 'react-quill/dist/quill.snow.css';
import { useMemo } from "react";
import {DropzoneArea} from 'material-ui-dropzone'

var useStyles= makeStyles({

    root:{
        width:'100%',
        Height:'100%',
        display:'flex',
        justifyContent:'center',
        
        
    },
    box:{
        width:'80%',
        height:'auto',
        background:'#f2f2f2',
        padding:10,
        margin:10,
        borderRadius:10,
        
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }
})


export default function Products(){
    var classes = useStyles()
    const [categoryList , setCategoryList] = useState([])
    const [brandList , setBrandList] = useState([])
    const [categoryId , setCategoryId] = useState([])
    const [productList , setProductList] = useState([])
    const [brandId , setBrandId] = useState('')
    const [picture , setPicture] = useState('')
    const [productId , setproductId] = useState('')
    const [modelNo , setModelNo] = useState('')
    const [description , setDescription] = useState('')
    const [color , setColor] = useState('')
    const [price , setPrice] = useState('')
    const [offerPrice , setOfferPrice] = useState('')
    const [stock , setStock] = useState('')
    const [hsnCode , setHsnCode] = useState('')
    const [status , setStatus] = useState('')
    const [files ,setFiles] = useState('')

    
      const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', "strike"],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['image', "link",'video'],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
      ],
     
    },
  }), [])
/////////////////////////// CATEGORY DROPDOWN //////////////////////////////

    const fetchAllCategory=async()=>{
      var result=await getData('category/display_all_category')
      setCategoryList(result.data)
  }
  useEffect(function(){
      fetchAllCategory()
  },[])

  const fillAllCategory=()=>{
      return categoryList.map((item)=>{
          return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
      })
  
    }
////////////////////////////////////////////////////////////////////////////////// 

/////////////////////////// BRAND DROPDOWN //////////////////////////////
const fetchBrandByCategory=async(cid)=>{
  var result=await postData('brands/fetch_brand_by_category',{categoryid:cid})
  setBrandList(result.data)

}

useEffect(function(){
  fetchAllCategory()
},[])

const fillBrand=()=>{
return brandList.map((item)=>{
return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>})

}

const handleCategoryChange=(event)=>{
   setCategoryId(event.target.value)
   fetchBrandByCategory(event.target.value)
}
////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////// PRODUCT DROPDOWN //////////////////////////////////
const fetchProductByBrand=async(bid)=>{
  var result=await postData('productDetails/fetch_product_by_brand',{brandid:bid})
  setProductList(result.data)

}

const fillproduct=()=>{
  return productList.map((item)=>{
  return <MenuItem value={item.productid}>{item.productname}</MenuItem>})
  
  }
const handleBrandChange=(event)=>{
  setBrandId(event.target.value)
  fetchProductByBrand(event.target.value)
}
//////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// HANDLE PICTURE ////////////////////////////////
const handlePicture=(event)=>{
  setPicture({bytes:event.target.files[0],filename:URL.createObjectURL(event.target.files[0])})
}
/////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// DATA SUBMITE/////////////////////////////////
      const handleSubmite=async()=>{       
        var formData = new FormData()
        formData.append('categoryid', categoryId)
        formData.append('brandid', brandId)
        formData.append('productid', productId)
        formData.append('modelno', modelNo)
        formData.append('description', description)
        formData.append('color', color)
        formData.append('price', price)
        formData.append('offerprice', offerPrice)
        formData.append('stock', stock)
        formData.append('hsncode',hsnCode)
        formData.append('status',status)
        files.map((file,index)=>{
          formData.append('picture'+index,file)
        })
        
       
        var response = await postData('productdetails/submit_product',formData)
        if(response.status)
        {
         Swal.fire({
           icon: 'success',
           title: 'Product Details',
           text: response.message,
           toast:true
         })
        }else
        {
         Swal.fire({
           icon: 'error',
           title: 'Product Details',
           text: response.message,
           toast:true
         })
        }
      
      }
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// DATA RESET/////////////////////////////////
 const handleReset=()=>{
   setproductId('')
  setPicture({ bytes: '', filename: '' })
  setBrandId('')
  setCategoryId('')
  setModelNo('')
  setDescription('')
  setColor('')
  setPrice('')
  setOfferPrice('')
  setStock('')
  setHsnCode('')
  setStatus('')
 }

///////////////////////////////////////////////////////////////////////////////

    return(
        <div className={classes.root}>
            <div className={classes.box}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                   <Heading image={category} caption={'New Product Detail'} link='/dashbord/displayallproductdetail'/>
                </Grid>

      <Grid item xs={6}>
         <Grid container spacing={3}>
      
                <Grid item xs={6}>
                       <FormControl fullWidth>
                         <InputLabel>Category Name</InputLabel>
                         <Select
                           value={categoryId}
                           label="Category Name"
                           onChange={handleCategoryChange}
                         >
                          {fillAllCategory()}
                         </Select>
                       </FormControl>
                </Grid>
                <Grid item xs={6}>
                       
                       <FormControl fullWidth>
                         <InputLabel>Brand Name</InputLabel>
                         <Select
                           value={brandId}
                           label="Brand Name"
                           onChange={handleBrandChange}
                         >
                          {fillBrand()}
                         </Select>
                       </FormControl>
                </Grid>
                <Grid item xs={6}>
                       
                       <FormControl fullWidth>
                         <InputLabel>Product Name</InputLabel>
                         <Select
                           value={productId}
                           label="Product Name"
                           onChange={(event) => setproductId(event.target.value)}
                         >
                          {fillproduct()}
                         </Select>
                       </FormControl>
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setModelNo(event.target.value)} value={modelNo} label="Product Model No." fullWidth> Product Model No.  </TextField> 
                </Grid>
                <Grid item xs={12}>
                <ReactQuill value={description} modules={modules} theme="snow" onChange={setDescription}  label="Description" fullWidth  /> 
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setColor(event.target.value)} value={color}  label="Color" fullWidth> Color </TextField> 
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setPrice(event.target.value)} value={price} label="Price" fullWidth> Price </TextField> 
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setOfferPrice(event.target.value)} value={offerPrice} label=" Offer Price" fullWidth> Offer Price </TextField> 
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setStock(event.target.value)} value={stock} label="Stock" fullWidth> Stock </TextField> 
                </Grid>
             
                <Grid item xs={6}>
                       <FormControl fullWidth>
                         <InputLabel>Status</InputLabel>
                         <Select
                           value={status}
                           label="Status"
                           onChange={(event)=>setStatus(event.target.value)}
                         >
                          <MenuItem value="offer">offer</MenuItem>
                          <MenuItem value="Deal of the day">Deal of the day</MenuItem>
                          <MenuItem value="Fastival Deals">Festival Deals</MenuItem>
                          <MenuItem value="Sale">Sale</MenuItem>
                          <MenuItem value="Trending">Trending</MenuItem>
                          <MenuItem value="New Arrival">New Arrival</MenuItem>
                          <MenuItem value="Discontinue">Discontinue</MenuItem>
                          
                         </Select>
                       </FormControl>
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={(event)=>setHsnCode(event.target.value)} value={hsnCode} label="HsnCode" fullWidth> HSN Code </TextField> 
                </Grid>
              <Grid item xs={6}>
                <Button onClick={handleSubmite} variant="contained" fullWidth>SUBMIT</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" onClick={handleReset} fullWidth>RESET</Button>
              </Grid>
              </Grid>
              </Grid>
          <Grid item xs={6}>
                <Grid item xs={12}>
                  <div>
                <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
/>
</div>
                </Grid>
              </Grid>
            </Grid> 
            </div>
        </div>
    )
}