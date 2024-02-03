
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import {DropzoneArea} from 'material-ui-dropzone'
import { Button, Grid } from "@mui/material"
import Swal from "sweetalert2"
import { postData } from "../../services/FetchNodeServices"
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


export default function Banner(){
    var classes = useStyles()
    const [files , setFiles] = useState('')
    const [errors , setErrors] = useState('')

    const handleReset=()=>{
        setFiles('')
    }

    const handleSubmit = async()=>{
      var formData = new FormData()
      files.map((file,index)=>{
        console.log('fils:.....',file)
        formData.append('files'+index,file)
      })
      var response = await postData('banner/submit_banner',formData)
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
          <Heading image={category} caption={'New Banner'} link='/dashbord/displayallcategorybanner'/>
          </Grid>
            <Grid item xs={12}>
        <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setFiles(files)}
  filesLimit={7}
/>
</Grid>
<Grid item xs={6} >
    <Button onClick={handleSubmit} variant="contained" fullWidth >Add Banner</Button>
</Grid>
<Grid item xs={6}>
    <Button onClick={ handleReset} variant="contained" fullWidth>RESET</Button>
</Grid>
</Grid>
        </div>
    </div>
    )
}