import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { postData, serverURL } from "../../../services/FetchNodeServices"
import img from "../../../assets/ps1.webp"
import { useDispatch } from "react-redux";
export default function ContactInformationComponents(props) {
    var cartproduct=props?.cartproduct
    console.log('cartcart',cartproduct)
    console.log('cartCART',cartproduct?.brandname)
    var dispatch = useDispatch()
    var mobileno = props.mobileno
    var status = props.status
    console.log('mobileno.',mobileno , 'status:-',status)
    const [title, setTitle] = useState('')
    const [fistName, setFistName] = useState('')
    const [middelName, setMiddelName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [errors , setErrors] = useState({})

    const handleError=(error,label)=>{
        console.log('ERROR ERROR:',error,'LABLE ',label)
        setErrors((prev)=>({...prev,[label]:error}))
    }

    const validation=()=>{
        var error=false
        if(title.length==0)
        {
            error = true
            handleError('pls Input title...' , 'title')
        }else if(fistName.length==0)
        {
            error = true
            handleError('pls Input firstname...' , 'title')
        }
        return error
    }


    const submit_data = async () => {
        // var formData = new FormData()
        // formData.append('title',title)
        // formData.append('fistname',fistName)
        // formData.append('middelname',middelName)
        // formData.append('lastname',lastName)
        // formData.append('emailid',emailId)
        // formData.append('mobikeno',mobileNumber)
        // var addresArray =array.join('')
        // setAddress(addresArray)
        var error = validation()
        if(error==false)
        {
        var body = { username: `${title} ${fistName} ${middelName} ${lastName}`, emailid: emailId, mobileno: mobileNumber, addres: `${address1} ${address2} ${state} ${city} ${pincode} ` }

        var response = await postData('Userinterface/submit_useraccount', body)
        if(response.status)
        {
            dispatch({type:'ADD_USER',payload:[mobileNumber,body]})
            localStorage.getItem('User',JSON.stringify(body))
        }
        else
        {

        }
    }
}

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // const handleAddres1=()=>{
    //     array[0] = document.getElementById('addresone').value
    // }
    // const handleAddres2=()=>{
    //     array[2] = document.getElementById('addrestwo').value

    // }

    const showCart=()=>{
        return cartproduct?.map((item)=>{
        return(
            <div style={{ marginTop: '1%', display: 'flex', background: 'white', height: '25%' }}>
                 <Grid style={{ width: '40%', padding: 10 }}>
                <div style={{ fontWeight: 'bold' }} >Available to Ship @</div>
                <div style={{ marginTop: '35%', fontWeight: 'bold', fontSize: '3vh' }}>Delivery by 22 December 2023</div>
            </Grid>
            <Grid style={{ width: '15%', display: 'flex', alignItems: 'center' }}>
                <img src={`${serverURL}/images/${item.productpicture}`} width={"100%"} />
            </Grid>
            <Grid style={{ width: '45%', display: 'flex', alignItems: 'center', marginLeft: '2%' }}>
                {item?.brandname} {item?.productname} {item?.model} 
            </Grid>
            </div>
        )
    })
    }

    return (<div style={{ width: '100%',display:'flex',justifyContent:'center' }}>
        <div style={{ width: '80%' }}>
        <Grid style={{ background: 'white', marginTop: '2%' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 6, alignItems: 'center' }}>continue Creating Account ...</div>
            <div style={{ display: 'flex', padding: '16px 0px 16px 8px', fontSize: '3vh', fontWeight: 'bold' }}>ENTER SHIPPING INFORMATION</div>
        </Grid>
        <Paper style={{ marginTop: '2%' }}>
            <div style={{ fontWeight: 'bold', padding: 10 }}>Contact Information</div>
            <Grid container spacing={2}  style={{ padding: 10  }} >
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Title</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={title}
                            error={errors.title}
                            helperText={errors.title}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Mr'}>Mr</MenuItem>
                            <MenuItem value={'Mrs'}>Mrs</MenuItem>
                            <MenuItem value={'Miss'}>Miss</MenuItem>
                            <MenuItem value={'Dr'}>Dr</MenuItem>
                            <MenuItem value={'Ms'}>Ms</MenuItem>
                            <MenuItem value={'Prof'}>Prof</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Firt Name"  error={errors.fistName} helperText={errors.fistName} onFocus={()=>handleError(null,'fistname')}  onChange={(event) => setFistName(event.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Middel Name" onChange={(event) => setMiddelName(event.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Last Name" onChange={(event) => setLastName(event.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email Id" onChange={(event) => setEmailId(event.target.value)} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField value={mobileno} label="Mobile Number" onChange={(event) => setMobileNumber(event.target.value)} variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </Paper>
        <Paper>
            <div style={{ fontWeight: 'bold', padding: 10, marginTop: '1%' }}>Enter Shipping Address:</div>
            <Grid container spacing={3} style={{ padding: 10 }} >
                <Grid item xs={6} >
                    <TextField label="Shipping Addresses 1"/* onKeyUp={handleAddres1} id="addresone"  onChange={(event) => {setAddress(prev => ({ ...prev, addres: event.target.value })) }} */ onChange={(event) => { setAddress1(event.target.value) }} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} >
                    <TextField label="Shipping Addresses 2"/* onKeyUp={handleAddres1} id="addresone"  onChange={(event) => {setAddress(prev => ({ ...prev, addres: event.target.value })) }} */ onChange={(event) => { setAddress2(event.target.value) }} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} >
                    <TextField label="state" onChange={(event) => { setState(event.target.value) }} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} >
                    <TextField label="city" onChange={(event) => { setCity(event.target.value) }} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4} >
                    <TextField label="pincode" onChange={(event) => { setPincode(event.target.value) }} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}> 
            <Button style={{ background: '#12DAA8', color: '#000',width:'20%' }} onClick={submit_data}>save</Button>
                
                </Grid>
            </Grid>
        </Paper>
       
           {showCart()}
    </div >
    </div>)
}