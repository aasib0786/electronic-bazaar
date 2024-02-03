import React, { useEffect, useState } from "react"
import { FormControl, MenuItem, Select, InputLabel, Avatar, Button, Grid, TextField } from "@mui/material";
import Heading from "../../Components/projectComponent/Heading";
import category from "../../../src/assets/category.png"
import { makeStyles } from "@mui/styles"
import { getData, postData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";

var useStyles = makeStyles({

  root: {
    width: '100%',
    Height: '100%',
    display: 'flex',
    justifyContent: 'center',


  },
  box: {
    width: '500px',
    height: 'auto',
    background: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 10,

  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }
})


export default function Products() {
  var classes = useStyles()
  const [categoryList, setCategoryList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [categoryId, setCategoryId] = useState([])
  const [brandId, setBrandId] = useState('')
  const [picture, setPicture] = useState('')
  const [productName, setProductName] = useState('')
  const [errors, setErrors] = useState({})
  /////////////////////////// CATEGORY ERROR HANDLE //////////////////////////////
  const handleError = (error, label) => {
    setErrors((prev) => ({ ...prev, [label]: error }))

  }
  const validation = () => {
    var error = false
    if (productName.length === 0) {
      error = true
      handleError('pls Input product Name...', 'productName')
    } if (brandId.length === 0) {
      error = true
      handleError('pls Input brand Name...', 'brandId')
    } if (categoryId.length === 0) {
      error = true
      handleError('pls Input category Name...', 'categoryId')
    }

    return error
  }
  ///////////////////////////////////////////////////////////////////////////////    
  /////////////////////////// CATEGORY DROPDOWN //////////////////////////////

  const fetchAllCategory = async () => {
    var result = await getData('category/display_all_category')
    setCategoryList(result.data)
  }
  useEffect(function () {
    fetchAllCategory()
  }, [])

  const fillAllCategory = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
    })

  }
  ////////////////////////////////////////////////////////////////////////////////// 

  /////////////////////////// BRAND DROPDOWN //////////////////////////////
  const fetchBrandByCategory = async (cid) => {
    var result = await postData('brands/fetch_brand_by_category', { categoryid: cid })
    setBrandList(result.data)

  }
  const fillBrand = () => {
    return brandList.map((item) => {
      return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
    })

  }

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value)
    fetchBrandByCategory(event.target.value)
  }
  ////////////////////////////////////////////////////////////////////////////////// 

  ////////////////////////////////// HANDLE PICTURE ////////////////////////////////
  const handlePicture = (event) => {
    setPicture({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
  }
  /////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////// DATA SUBMITE/////////////////////////////////
  const handleSubmite = async () => {
    var error = validation()
    if (error === false) {
      var formData = new FormData()
      formData.append('productname', productName)
      formData.append('categoryid', categoryId)
      formData.append('brandid', brandId)
      formData.append('picture', picture.bytes)
      var response = await postData('product/submit_product', formData)
      if (response.status) {
        Swal.fire({
          icon: 'success',
          title: 'Brand',
          text: response.message,
          toast: true
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Brand',
          text: response.message,
          toast: true
        })
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// DATA RESET/////////////////////////////////
  const handleReset = () => {
    setProductName('')
    setPicture({ bytes: '', filename: '' })
    setBrandId('')
    setCategoryId('')
  }

  ///////////////////////////////////////////////////////////////////////////////

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Heading image={category} caption={'New Product'} link='/dashbord/displayallproduct' />
          </Grid>
          <Grid item xs='6'>
            <FormControl fullWidth>
              <InputLabel>Category Name</InputLabel>
              <Select
                error={errors.brandName}
                helperText={errors.categoryId}
                onFocus={() => { handleError('', "categoryName") }}
                value={categoryId}
                label="Category Name"
                onChange={handleCategoryChange}
              >
                {fillAllCategory()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs='6'>

            <FormControl fullWidth>
              <InputLabel>Brand Name</InputLabel>
              <Select
                onFocus={() => { handleError('', 'brandName') }}
                error={errors.brandName}
                helperText={errors.brandId}
                value={brandId}
                label="Brand Name"
                onChange={(event) => setBrandId(event.target.value)}
              >
                {fillBrand()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField error={errors.productName} helperText={errors.productName} onFocus={() => handleError('', 'productName')} onChange={(event) => setProductName(event.target.value)} label="Product Name" fullWidth> Products </TextField>
          </Grid>
          <Grid item xs='6'>
            <Button component="label" fullWidth variant="contained"  >
              PRODUCT PICTURE
              <input onChange={handlePicture} hidden type="file" accept="image" multiple />
            </Button>
          </Grid>
          <Grid item xs='6' className={classes.center} >
            <Avatar src={picture.filename} alt="Brand" variant="rounded" />
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleSubmite} variant="contained" fullWidth>SUBMIT</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleReset} fullWidth>RESET</Button>
          </Grid>

        </Grid>
      </div>
    </div>
  )
}