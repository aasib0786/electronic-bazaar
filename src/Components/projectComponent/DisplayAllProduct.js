import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getData, postData } from "../../services/FetchNodeServices";
import { serverURL } from "../../services/FetchNodeServices";
import { FormControl, MenuItem, Select, InputLabel, Avatar, Grid, TextField } from "@mui/material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

var useStyles = makeStyles({
  root: {
    width: '100%',
    Height: '100%',
    display: 'flex',
    justifyContent: 'center',


  },
  box: {
    width: '900px',
    height: 'auto',
    background: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  renderbox: {
    width: '500px',
    height: 'auto',

    padding: 10,
    margin: 10,
    borderRadius: 10,

  },
  center: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center'
  }
})

export default function DisplayAllProduct() {
  var classes = useStyles()
  var navigate = useNavigate()
  const [product, setProduct] = useState([])
  const [open, setOpen] = useState(false)

  //////////////////////////////////DISPLAY ALL PRODUCT////////////////////////////////

  const fetchAllProduct = async () => {
    var response = await getData('product/display_all_product')
    setProduct(response.data)
    console.log(response.data)
  }

  useEffect(function () {
    fetchAllProduct()
  }, [])
  /////////////////////////////////////////////////////////////////////////////////////



  ///////////////////////////////////DELETE PRODUCT///////////////////////////////////
  const handleDelete = (rowData) => {
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
        var result = await postData('product/delete_product', { productid: rowData.productid , oldpicture:rowData.picture })

        if (result.status) {

          Swal.fire(
            'Deleted!',
            'product has been deleted.',
            'success'
          )
          fetchAllProduct()
        }
        else {
          Swal.fire(
            'Deleted!',
            'Fail to delete brand',
            'error'
          )
        }
      }
    })

  }
  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////PRODUCT EDIT ACTION////////////////////////////////
  const [categoryList, setCategoryList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [categoryId, setCategoryId] = useState([])
  const [brandId, setBrandId] = useState('')
  const [picture, setPicture] = useState({ bytes: '', filename: '' })
  const [productName, setProductName] = useState('')
  const [stutasCameraIcon, setStatusCameraIcon] = useState('')
  const [statusBtn, setStatusBtn] = useState(false)
  const [Temppicture, setTemppicture] = useState('')
  const [productId, setProductId] = useState('')
  const [error, setErrors] = useState('')
  const [oldPicture , setOldPicture] = useState('')

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
    setStatusBtn(true)
  }
  /////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////PRODUCT EDIT DATA /////////////////////////////////
  const handleSubmite = async () => {
    var body = { 'brandid': brandId, productname: productName, categoryid: categoryId, productid: productId }
    var response = await postData('product/edit_product_data', body)
    if (response.status) {
      Swal.fire({
        icon: 'success',
        title: 'Product',
        text: response.message,
        toast: true
      })
      fetchAllProduct()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Product',
        text: response.message,
        toast: true
      })
    }

  }
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////PRODUCT EDIT PICTURE /////////////////////////////////
  const handleEditPicture = async () => {
    if (error == false) {
      var formData = new FormData()
      formData.append('productid', productId)
      formData.append('categoryid', categoryId)
      formData.append('picture', picture.bytes)
      formData.append('oldpicture' , oldPicture)
      var response = await postData('product/edit_product_picture', formData)
      if (response.status) {
        Swal.fire({
          icon: 'success',
          title: 'Product',
          text: response.message,
          toast: true
        })
        fetchAllProduct()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Product',
          text: response.message,
          toast: true
        })
      }
    }

  }
  ///////////////////////////////////////////////////////////////////////////////

  const handleCancel = () => {
    setPicture({ filename: Temppicture, bytes: '' })
    setStatusBtn(false)

  }

  const SavecCancelBtn = () => {
    return (<div>
      <Button onClick={handleEditPicture} >Save</Button>
      <Button onClick={handleCancel} >Cancel</Button>
    </div>)

  }

  const productForm = () => {
    return (
      <div className={classes.renderbox}>
        <Grid container spacing={3}>
          <Grid item xs='12' fullWidth className={classes.center}>
            {statusBtn ? <SavecCancelBtn /> : <></>}
            <Button onMouseLeave={() => setStatusCameraIcon(false)} onMouseEnter={() => setStatusCameraIcon(true)} component="label"  >

              {stutasCameraIcon ? <div style={{ bottom: 10, right: 10, position: 'absolute', zIndex: 2, background: '#f2f2f2', width: 26, height: 26, borderRadius: 13, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PhotoCameraIcon style={{ color: '#000' }} /></div> : <></>}
              <Avatar src={picture.filename} alt="Brand" variant="rounded" sx={{ width: 100, height: 100 }} />
              <input onChange={handlePicture} hidden type="file" accept="image" multiple />
            </Button>
            <div style={{ color: '#d32f2f', fontSize: 13, marginLeft: 10, marginTop: 5 }}></div>
          </Grid>
          <Grid item xs='6'>
            <FormControl fullWidth>
              <InputLabel>{categoryId}</InputLabel>
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
                onChange={(event) => setBrandId(event.target.value)}
              >
                {fillBrand()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField value={productName} onChange={(event) => setProductName(event.target.value)} label="Product Name" fullWidth> Products </TextField>
          </Grid>

        </Grid>
      </div>
    )
  }

  ///////////////////////////////////PRODUCT DIALOG OPEN///////////////////////////////////

  const handleOpen = (rowData) => {
    console.log(rowData)
    setProductName(rowData.productname)
    setProductId(rowData.productid)
    setBrandId(rowData.brandname)
    setCategoryId(rowData.categoryname)
    setPicture({ filename: `${serverURL}/images/${rowData.picture}`, bytes: '' })
    setTemppicture(`${serverURL}/images/${rowData.picture}`)
    setOldPicture(setTemppicture)
    setOpen(true)

  }
  ////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////// PRODUCT DIALOG ///////////////////////////////////
  const handleClose = () => {
    setOpen(false)
  }

  function showProductDialog() {
    return (
      <Dialog open={open}>
        <DialogTitle>
          Updale Product
        </DialogTitle>
        <DialogContent>
          {productForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmite}>Edit Data</Button>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    )
  }

  ////////////////////////////////////////////////////////////////////////////////////

  const displayproduct = () => {

    return (
      <MaterialTable
        title="Product List"
        columns={[
          { title: 'Product Id', field: 'productid' },
          { title: 'Product Name', field: 'productname' },
          { title: 'Category Name', render: (rowData) => <div>{rowData.categoryid}/{rowData.categoryname}</div> },
          { title: 'Brand Name', render: (rowData) => <div>{rowData.brandid}/{rowData.brandname}</div> },
          { title: 'Picture', render: (rowData) => <img src={`${serverURL}/images/${rowData.picture}`} width={'40'} height={'40'} /> }
        ]}
        data={product}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Product',
            onClick: (event, rowData) => handleOpen(rowData)
          },
          {
            icon: 'delete',
            tooltip: 'Delete Product',
            onClick: (event, rowData) => handleDelete(rowData)
          }, {
            icon: 'add',
            tooltip: 'Add Product',
            isFreeAction: true,
            onClick: (event) => navigate('/dashbord/product')
          }

        ]}
      />
    )
  }
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        {displayproduct()}
        {showProductDialog()}
      </div>
    </div>
  )



}