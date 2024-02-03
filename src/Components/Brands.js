import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { FormControl, MenuItem, Select, InputLabel, Avatar, Button, Grid, TextField } from "@mui/material";
import { postData, getData } from "../services/FetchNodeServices";
import Heading from "./projectComponent/Heading";
import category from "../../src/assets/category.png"
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

export default function Brand() {
    const classes = useStyles()
    const [brandName, setBrandName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [logo, setLogo] = useState({ bytes: '', filename: '' })
    const [errors, setErrors] = useState({})
    const [categoryList, setCategoryList] = useState([])

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


    const handleReset = () => {
        setBrandName('')
        //setSelectedCategory([])
        setLogo({ bytes: '', filename: '' })
    }


    const handleError = (error, label) => {
        setErrors((prev) => ({ ...prev, [label]: error }))
    }

    const validation = () => {
        var error = false
        if (brandName.length === 0) {
            error = true
            handleError('pls Input Brand Name...', 'brandName')
        }
        if (logo.filename.length === 0) {
            handleError('pls Input Brand logo....', 'logo')
        }
        return error
    }
    const handleSubmit = async () => {
        var error = validation()
        if (error === false) {
            var formData = new FormData()
            formData.append('brandname', brandName)
            formData.append('category', categoryId)
            formData.append('logo', logo.bytes)
            var response = await postData('brands/submit_brand', formData)
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

    const handleLogo = (event) => {
        setLogo({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
    }
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={3}>
                    <Grid item xs='12'>
                        <Heading image={category} caption={'New Brand'} link='/dashbord/displayallbrand' />
                    </Grid>
                    <Grid item xs='6'>
                        <TextField
                            onFocus={() => handleError('', 'brandName')}
                            error={errors.brandName}
                            helperText={errors.brandName}
                            onChange={(event) => setBrandName(event.target.value)}
                            label='Brand Name' fullWidth />
                    </Grid>
                    <Grid item xs='6'>

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
                    <Grid item xs='6'>
                        <Button onFocus={() => handleError('', 'logo')} component="label" fullWidth variant="contained"  >
                            BRAND IMAGE
                            <input onChange={handleLogo} hidden type="file" accept="image" multiple />
                        </Button>
                        <div style={{ color: '#d32f2f', fontSize: 13, marginLeft: 10, marginTop: 5 }}>{errors.logo}</div>
                    </Grid>
                    <Grid item xs='6' className={classes.center} >
                        <Avatar src={logo.filename} alt="Brand" variant="rounded" />
                    </Grid>
                    <Grid item xs='6'>
                        <Button onClick={handleSubmit} component="label" fullWidth variant="contained">
                            SUBMIT
                        </Button>
                    </Grid>
                    <Grid item xs='6'>
                        <Button onClick={handleReset} component="label" fullWidth variant="contained">
                            RESET
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    )

}