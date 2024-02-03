import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { FormControl, MenuItem, Select, InputLabel, Avatar, Button, Grid, TextField } from "@mui/material";
import { postData } from "../services/FetchNodeServices";
import { getData, serverURL } from "../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Swal from "sweetalert2";
var useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  box: {
    width: '900px',
    Height: 'auto',
    background: "#f2f2f2",
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

export default function DisplayAllBrand() {
  var classes = useStyles()
  var navigate = useNavigate()
  const [brand, setBrand] = useState([])
  const [open, setOpen] = useState(false)
  //const [brandname,setBrandName] = useState('')//

  ////////////////BRAND EDIT ACTION//////////////////
  const [brandName, setBrandName] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [logo, setLogo] = useState({ bytes: '', filename: '' })
  const [errors, setErrors] = useState({})
  const [statusBtn, setStatusBtn] = useState(false)
  const [stutasCameraIcon, setStatusCameraIcon] = useState(false)
  const [templogo, setTempLogo] = useState('')
  const [brandId, setBrandId] = useState('')
  const [oldlogo , setOldLogo] = useState('')

  const [categoryList, setCategoryList] = useState([])

  const fetchAllCategory = async () => {
    var result = await getData('category/display_all_category')
    setCategoryList(result.data)
  }
  useEffect(function () {
    fetchAllCategory()
  }, [])


  const validation = () => {
    var error = false
    if (brandName.length == 0) {
      error = true
      handleError('pls Input Brand Name...', 'brandName')
    }
    if (logo.filename.length == 0) {
      handleError('pls Input Brand logo....', 'logo')
    }
    return error
  }
  const handleEditLogo = async () => {
    var error = validation()
    if (error == false) {

      var formData = new FormData()
      formData.append('brandid', brandId)
      formData.append('categoryid', categoryId)
      formData.append('logo', logo.bytes)
      formData.append('oldlogo', oldlogo)
      var response = await postData('brands/edit_brand_logo', formData)
      if (response.status) {
        Swal.fire({
          icon: 'success',
          title: 'Brand',
          text: response.message,
          toast: true
        })
        fetchAllBrand()
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

  const fillAllCategory = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
    })

  }
  const handleCancel = () => {
    setLogo({ filename: templogo, bytes: '' })
    setStatusBtn(false)

  }
  const handleSubmit = async () => {
    var error = validation()
    if (error == false) {
      var body = { 'brandid': brandId, brandname: brandName, categoryid: categoryId }

      var response = await postData('brands/edit_brand_data', body)
      if (response.status) {
        Swal.fire({
          icon: 'success',
          title: 'Brand',
          text: response.message,
          toast: true
        })
        fetchAllBrand()
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


  

  const SavecCancelBtn = () => {
    return (<div>
      <Button onClick={handleEditLogo}>Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>)

  }

  const handleError = (error, label) => {
    setErrors((prev) => ({ ...prev, [label]: error }))
  }


  const handleLogo = (event) => {
    setLogo({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
    setStatusBtn(true)
  }


  const BrandForm = () => {
    return (
      <div className={classes.renderbox}>
        <Grid container spacing={3}>
          <Grid item xs='12' className={classes.center}>
            {statusBtn ? <SavecCancelBtn /> : <></>}
            <Button onMouseLeave={() => setStatusCameraIcon(false)} onMouseEnter={() => setStatusCameraIcon(true)} onFocus={() => handleError('', 'logo')} component="label"  >

              {stutasCameraIcon ? <div style={{ bottom: 10, right: 10, position: 'absolute', zIndex: 2, background: '#f2f2f2', width: 26, height: 26, borderRadius: 13, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PhotoCameraIcon style={{ color: '#000' }} /></div> : <></>}
              <Avatar src={logo.filename} alt="Brand" variant="rounded" sx={{ width: 100, height: 100 }} />
              <input onChange={handleLogo} hidden type="file" accept="image" multiple />
            </Button>
            <div style={{ color: '#d32f2f', fontSize: 13, marginLeft: 10, marginTop: 5 }}>{errors.logo}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={brandName}
              onFocus={() => handleError('', 'brandName')}
              error={errors.brandName}
              helperText={errors.brandName}
              onChange={(event) => setBrandName(event.target.value)}
              label='Brand Name' fullWidth />
          </Grid>
          <Grid item xs={6}>

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryId}
                label="Category"
                onChange={(event) => setCategoryId(event.target.value)}
              >
                {fillAllCategory()}
              </Select>
            </FormControl>
          </Grid>

        </Grid>

      </div>
    )
  }
  ////////////////////////////////////////////////// 

  const handleOpen = (rowData) => {
    console.log(rowData)
    setBrandName(rowData.brandname)
    setBrandId(rowData.brandid)
    setCategoryId(rowData.categoryname)
    setLogo({ filename: `${serverURL}/images/${rowData.logo}`, bytes: '' })
    setTempLogo(`${serverURL}/images/${rowData.logo}`)
    setOldLogo(rowData.logo)
    setOpen(true)

  }
  const handleClose = () => {
    setOpen(false)
  }


  const handleDelet = (rowData) => {
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
        var result = await postData('brands/delete_brand', { brandid: rowData.brandid , oldlogo:rowData.logo })

        if (result.status) {

          Swal.fire(
            'Deleted!',
            'brand has been deleted.',
            'success'
          )
          fetchAllBrand()
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
  const fetchAllBrand = async () => {
    var response = await getData('brands/display_all_brand')
    console.log('response:', response)
    setBrand(response.data)
  }
  useEffect(function () {
    fetchAllBrand()
  }, [])

  const showBrandDialog = () => {
    return (
      <Dialog open={open}>
        <DialogTitle>
          Update Brand
        </DialogTitle>
        <DialogContent>
          {BrandForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} >Edit Data</Button>
          <Button onClick={handleClose} >close</Button>
        </DialogActions>
      </Dialog>
    )
  }

  const displaybrand = () => {
    return (
      <div>
        <MaterialTable
          title="Brand List"
          columns={[
            { title: 'Brand Id', field: 'brandid' },
            { title: 'Brand Nmae', field: 'brandname' },
            { title: 'Category Name', render: (rowData) => <div>{rowData.categoryid}/{rowData.categoryname}</div> },
            { title: 'Logo', render: (rowData) => <img src={`${serverURL}/images/${rowData.logo}`} width={40} height={40} /> },
          ]}
          data={brand}
          actions={[
            {
              icon: 'edit',
              tooltip: 'edit Brand',
              onClick: (event, rowData) => handleOpen(rowData)
            },
            {
              icon: 'delete',
              tooltip: 'delete Brand',
              onClick: (event, rowData) => handleDelet(rowData)

            }, {
              icon: 'add',
              tooltip: 'Add Brand',
              isFreeAction: true,
              onClick: (event) => navigate("/dashbord/brand")
            }

          ]}
        />
      </div>

    )
  }

  return (
    <div className={classes.root} >
      <div className={classes.box}>
        {showBrandDialog()}
        {displaybrand()}
      </div>
    </div>
  )

}