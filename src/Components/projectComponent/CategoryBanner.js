
import { makeStyles } from "@mui/styles"
import { useState ,useEffect } from "react"
import {DropzoneArea} from 'material-ui-dropzone'
import { Button, Grid,FormControl,InputLabel,Select, MenuItem } from "@mui/material"
import Swal from "sweetalert2"
import { postData ,getData } from "../../services/FetchNodeServices"
import Heading from "../../Components/projectComponent/Heading";
import category from "../../../src/assets/category.png"



const useStyles = makeStyles({

    root:{
        width:'100%',
        Height:'100%',
        display:'flex',
        justifyContent:'center',
        
        
    },
    box:{
        width:'700px',
        height:'auto',
        background:'#f2f2f2',
        padding:10,
        margin:10,
        borderRadius:10,
        
    },
})


export default function CategoryBanner(){
    var classes = useStyles()
    const [files , setFiles] = useState([])
    const [categoryId , setCategoryId] = useState('')
    const [categoryList , setCategoryList] = useState([])
    const [brandId , setBrandId] = useState('')
    const [brandList , setBrandList] = useState([])

    const handleReset=()=>{
        setFiles('')
    }
    const fetchAllCategory=async()=>{
        var result=await getData('category/display_all_category')
        setCategoryList(result.data)
    }
    useEffect(function(){
        fetchAllCategory()
    },[])

    const fetchBrandByCategory=async(cid)=>{
        var result=await postData('brands/fetch_brand_by_category',{categoryid:cid})
        setBrandList(result.data)
      
      }
      
      
      const fillBrand=()=>{
      return brandList.map((item)=>{
      return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>})
      
      }
      
    const fillAllCategory=()=>{
            return categoryList.map((item)=>{
                return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
            })
        
          
    }

    const handleCategoryChange=(event)=>{
        setCategoryId(event.target.value)
        fetchBrandByCategory(event.target.value)

    }

    const handleBrandChange=(event)=>{
        setBrandId(event.target.value)
    }


    const handleSubmit = async()=>{
      var formData = new FormData()
      formData.append('categoryid', categoryId)
      formData.append('brandid', brandId)
      files.map((file,index)=>{
        formData.append('files'+index,file)
      })
      var response = await postData('categorybanner/submit_banner',formData)
      console.log(response.status)

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

    return(
    <div className={classes.root}>
        <div className={classes.box}> 
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Heading image={category} caption={'New Category Banner'} link='/displayallcategorybanner'/>
          </Grid>
            <Grid item xs={12}>
        <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
/>
</Grid>
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
<Grid item xs={6} >
    <Button onClick={handleSubmit} variant="contained" fullWidth >Add Category Banner</Button>
</Grid>
<Grid item xs={6}>
    <Button onClick={handleReset} variant="contained" fullWidth>RESET</Button>
</Grid>
</Grid>
        </div>
    </div>
    )
}