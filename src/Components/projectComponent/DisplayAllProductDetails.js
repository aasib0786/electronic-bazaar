import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { getData, postData, serverURL } from "../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, MenuItem, Select, InputLabel, Avatar, Grid, TextField } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Parser } from "html-to-react";
import { DropzoneArea } from 'material-ui-dropzone'

var useStyles = makeStyles({
  root: {
    width: '100%',
    Height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  
  box: {
    width: '1100px',
    height: 'auto',
    background: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  center: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center'

  }, renderbox: {
    width: '600px',
    height: 'auto',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
})

export default function DisplayAllProductDetails() {
  var classes = useStyles()
  var navigate = useNavigate()
  const [productDetail, setProductDetail] = useState([])
  const [open, setOpen] = useState(false)
  const [pictur, setPictur] = useState(false)
  const [categoryList, setCategoryList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [categoryId, setCategoryId] = useState([])
  const [productList, setProductList] = useState([])
  const [brandId, setBrandId] = useState('')
  const [picture, setPicture] = useState('')
  const [productId, setproductId] = useState('')
  const [modelNo, setModelNo] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const [stock, setStock] = useState('')
  const [hsnCode, setHsnCode] = useState('')
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState(false)
  const [temppicture, setTempPicture] = useState('')
  const [productdetailId, setProductDetailid] = useState('')
  const [files, setFiles] = useState('')
  const [editFiles, setEditFiles] = useState('')
  const [oldPicture, setOldPicture] = useState('')
  ///////////////////////////// DISPLAY ALL PRODUCT DETAILS ///////////////////////////
  const fetchAllDetail = async () => {
    var response = await getData('productdetails/display_all_product_detail')
    setProductDetail(response.data)
    console.log('gfvufuf', productDetail)
  }

  useEffect(function () {
    fetchAllDetail()
  }, [])
  //////////////////////////////////////////////////////////////////////////////////// 

  ///////////////////////////// DELETE ALL PRODUCTDETAILS ///////////////////////////
  const handleDelet = async (rowData) => {
    Swal.fire({

      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then(async (result) => {
      if (result.isConfirmed) {
        var result = await postData('productdetails/delete_productdetail', { productdetailid: rowData.productdetailid })

        if (result.status) {

          Swal.fire(
            'Deleted!',
            'product Details has been deleted.',
            'success'
          )
          fetchAllDetail()
        }
        else {
          Swal.fire(
            'Deleted!',
            'Fail to delete product Details',
            'error'
          )
        }
      }
    })

  }
  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////HANDLE PRODUCT DETAILS FORM /////////////////////////////
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

  useEffect(function () {
    fetchAllCategory()
  }, [])

  const fillBrand = () => {
    return brandList.map((item) => {
      return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
    })

  }

  const handleCategoryChange = (event) => {
    setBrandId('')

    setCategoryId(event.target.value)
    fetchBrandByCategory(event.target.value)
  }
  ////////////////////////////////////////////////////////////////////////////////// 
  ///////////////////////////// PRODUCT DROPDOWN //////////////////////////////////
  const fetchProductByBrand = async (bid) => {
    var result = await postData('productDetails/fetch_product_by_brand', { brandid: bid })
    setProductList(result.data)

  }

  const fillproduct = () => {
    return productList.map((item) => {
      return <MenuItem value={item.productid}>{item.productname}</MenuItem>
    })

  }
  const handleBrandChange = (event) => {
    setBrandId(event.target.value)
    fetchProductByBrand(event.target.value)
  }
  //////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////// HANDLE PICTURE ////////////////////////////////
  const handlePicture = (event) => {
    setPicture({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })

  }
  /////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////// DATA SUBMITE/////////////////////////////////
  const validation = () => {
    var errors = false
    if (modelNo.length === 0) {
      errors = true
      handleError('pls Input product Model...', 'model')
    }

    return errors
  }
  const handleEditData = async () => {
    var errors = validation()
    if (errors === false) {
      console.log(productdetailId,)
      var body = { productdetailid: productdetailId, categoryid: categoryId, brandid: brandId, productid: productId, model: modelNo, description: description, color: color, price: price, offerprice: offerPrice, stock: stock, hsncode: hsnCode, status: status }
      var response = await postData('productdetails/edit_product_detail_Data', body)
      console.log(response.data)
      if (response.status) {
        Swal.fire({
          icon: 'success',
          title: 'Product Details',
          text: response.message,
          toast: true
        })
        { DisplayDetails() }
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Product Details',
          text: response.message,
          toast: true
        })
      }
    }

  }
  ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// DATA RESET/////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////
  const handleEditPticture = async () => {
    var formData = new FormData()
    formData.append('productdetailid', productdetailId)
    files.map((file, index) => {
      formData.append('picture' + index, file)
    })
    // console.log('picturename',formData.productdetailId)
    var response = await postData('productdetails/edit_product_detail_Picture', formData)
    console.log("data:-",response.data)
    if (response.status) {
      Swal.fire({
        icon: 'success',
        title: 'Product Details',
        text: response.message,
        toast: true
      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Product Details',
        text: response.message,
        toast: true
      })
    }

  }


  const handleCancel = () => {
    setPicture({ filename: temppicture, bytes: '' })
    console.log(temppicture)


  }

  const SavecCancelBtn = () => {
    return (<div>
      <Button onClick={handleEditPticture} >Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>)

  }

  const handleError = () => {
    setErrors(true)

  }
  ///////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////// PRODUCT DETAILS FORM ////////////////////////////////

  const productDetailForm = () => {
    return (
      <div className={classes.renderbox}>
        <Grid container spacing={3}>
          <Grid item xs='6'>
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
          <Grid item xs='6'>

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
          <Grid item xs='6'>

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
          <Grid item xs='6'>
            <TextField onChange={(event) => setModelNo(event.target.value)} value={modelNo} label="Product Model No." fullWidth> Product Model No.  </TextField>
          </Grid>
          <Grid item xs='12'>
            <ReactQuill value={description} theme="snow" onChange={setDescription} label="Description" fullWidth />
          </Grid>
          <Grid item xs='6'>
            <TextField onChange={(event) => setColor(event.target.value)} value={color} label="Color" fullWidth> Color </TextField>
          </Grid>
          <Grid item xs='6'>
            <TextField onChange={(event) => setPrice(event.target.value)} value={price} label="Price" fullWidth> Price </TextField>
          </Grid>
          <Grid item xs='6'>
            <TextField onChange={(event) => setOfferPrice(event.target.value)} value={offerPrice} label=" Offer Price" fullWidth> Offer Price </TextField>
          </Grid>
          <Grid item xs='6'>
            <TextField onChange={(event) => setStock(event.target.value)} value={stock} label="Stock" fullWidth> Stock </TextField>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
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
          <Grid item xs='6'>
            <TextField onChange={(event) => setHsnCode(event.target.value)} value={hsnCode} label="HsnCode" fullWidth> HSN Code </TextField>
          </Grid>

        </Grid>
      </div>
    )
  }
  /////////////////////////////////////////////////////////////////////////////////// 
  /////////////////////////////// HANDLE DAILOGE //////////////////////////////////// 
  const handleOpenPictur = (rowData) => {

    setProductDetailid(rowData.productdetailid)
    var pictures = rowData.picture.split(",").map((item) => {
      return `${serverURL}/images/${item}`
    })
    setFiles(pictures)

    setPictur(true)
  }

  const handleOpen = (rowData) => {
    fetchProductByBrand(rowData.brandid)
    fetchBrandByCategory(rowData.categoryid)
    setProductDetailid(rowData.productdetailid)
    setCategoryId(rowData.categoryid)
    setBrandId(rowData.brandid)
    setproductId(rowData.productid)
    setModelNo(rowData.model)
    setDescription(rowData.description)
    setColor(rowData.color)
    setPrice(rowData.price)
    setOfferPrice(rowData.offerprice)
    setStock(rowData.stock)
    setStatus(rowData.status)
    setHsnCode(rowData.hsncode)
    setOpen(true)


  }
  const handleClosePictur = () => {
    setPictur(false)
  }
  const handleClose = () => {
    setOpen(false)
  }
  ///////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// pictur Dailoge//////////////////////////////////
  const showPictureDialog = () => {
    return (
      <Dialog open={pictur} maxWidth={'lg'} >
        <DialogContent>
          <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop an image here or click"}
            onChange={(files) => setFiles(files)}
            filesLimit={7}
            initialFiles={files}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePictur}>close</Button>
          <Button onClick={handleEditPticture}>Edit Data</Button>
        </DialogActions>
      </Dialog>
    )
  }
  //////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////// DAILOGE /////////////////////////////////////// 
  const showProductDetailDialog = () => {
    return (
      <Dialog open={open} maxWidth={'lg'}>
        <DialogTitle>
          Update product Detail
        </DialogTitle>
        <DialogContent>
          {productDetailForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleEditData}>Edit Data</Button>
        </DialogActions>
      </Dialog>
    )
  }

  /////////////////////////////////////////////////////////////////////////////////// 


  function DisplayDetails() {
    return (
      <MaterialTable
        title="Product Detail List"
        columns={[
          { title: 'ProductDetailId', field: 'productdetailid' },
          { title: 'CategoryId', render: (rowData) => <div>{rowData.categoryid}/{rowData.categoryname}</div> },
          { title: 'BrandId', render: (rowData) => <div>{rowData.brandid}/{rowData.brandname}</div> },
          { title: 'ProductId', render: (rowData) => <div>{rowData.productid}/{rowData.productname}</div> },
          { title: 'ModelNo', field: 'model' },
          { title: 'Description ', render: (rowData) => <div>{/*{Parser().parse(rowData.description)}*/}{rowData.description}</div> },
          { title: 'Color', field: 'color' },
          { title: 'Price', render: (rowData) => <s>{rowData.price}</s> },
          { title: 'OfferPrice', field: 'offerprice' },
          { title: 'Stock', field: 'stock' },
          { title: 'Status', field: 'status' },
          { title: 'HSN Code', field: 'hsncode' },


        ]}
        data={productDetail}
        actions={[
          {
            icon: 'photooutlined',
            tooltip: 'Save picture',
            onClick: (event, rowData) => handleOpenPictur(rowData)
          },
          {
            icon: 'edit',
            tooltip: 'Edit Product Detail',
            onClick: (event, rowData) => handleOpen(rowData)
          },
          {
            icon: 'delete',
            tooltip: 'Delete Product Detail',
            onClick: (event, rowData) => handleDelet(rowData)
          }, {
            icon: 'add',
            tooltip: 'Add Product Detail',
            isFreeAction: true,
            onClick: (event) => navigate('/dashbord/productDetail')
          }
        ]}
      />
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        {showProductDetailDialog()}
        {DisplayDetails()}
        {showPictureDialog()}
      </div>
    </div>
  )
}