import { CheckBox } from "@mui/icons-material";
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import { postData } from "../../../services/FetchNodeServices";


export default function LoginMyProfile(props) {
    var navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileNo, setMobileNo] = useState('')
    const [errors, setErrors] = useState({})
    // const [status, setStatus] = useState('')

    // const handleClickOpen = () => {
    //     setStatus(true);
    // };
    const handleError = (error, label) => {
        setErrors((prev) => ({ ...prev, [label]: error }))
    }

    console.log(errors)
    const validation = () => {
        var error = false
        if (mobileNo.length === 0) {
            error = true
            handleError('pls Input mobileNo...', 'mobileNo')
        }

        return error
    }

    const handleClose = async () => {
        var error = validation()
        if (error === false) {
            var otp = generateOtp()
            alert(otp)
            props.setStatus(false)
            navigate('/otp', { state: { otp: otp, mobileno: mobileNo, states:props?.state } })
        } else { alert('pls Input mobileno...') }

    }

    const generateOtp = () => {
        var otp = parseInt((Math.random() * 8999) + 1000)
        return otp
    }

    const showDiloge = () => {
        return (<div >
            <div style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ border: 'solid 1px #353535', borderRadius: '10px', fontWeight: matches ? 400 : 'bold', width: '100%', height: '10%', display: 'flex', justifyContent: 'space-between', marginTop: '4%', alignItems: 'center' }}>
                    <span style={{ padding: '4% 6% 4% 15%', }}>Login</span>
                    <span style={{ display: 'flex', alignItems: 'center', border: 'solid 1px white', borderRadius: '5px' }}>OR</span>
                    <span style={{ padding: matches ? '4% 2% 4% 2%' : '4% 15% 4% 0%', display: 'flex', justifyContent: 'center' }}>Creat Account</span>
                </div>
                <div style={{ fontWeight: matches ? <></> : 'bold', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ padding: '4% 0% 4% 0%', fontSize: matches ? '12px' : <></> }}>Please enter your Email ID or phone number </span>
                </div>

                <FormControl error={errors.mobileNo}>
                    <TextField
                        onFocus={() => handleError('', 'mobileNo')}


                        onChange={(e) => setMobileNo(e.target.value)}
                        placeholder="Enter your Email ID or phone number"
                        sx={{
                            '& fieldset': {
                                border: 'none',
                            }, 'input': { color: 'white' }
                        }}
                        style={{ border: '1px solid white', fontSize: '3vh', borderRadius: '10px', color: 'white', background: '#000' }}
                    />
                    <FormHelperText>{errors.mobileNo}</FormHelperText>
                </FormControl>


                <div style={{ fontWeight: '400', fontSize: '2vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FormControlLabel control={<Checkbox defaultChecked style={{ color: 'white' }} />} label=" Keep me signed in" />
                    {/* <span style={{ padding: '4% 0% 4% 0%', display: 'flex', alignItems: 'center', }}><input type="checkbox" width={'5%'} /> Keep me signed in </span> */}
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ padding: '4% 0% 4% 0%', fontSize: matches ? '1.8vh' : '2vh' }}>By continuing you agree to our Terms {matches ? <div style={{ marginLeft: '20%' }}> of Use & Privacy Policy</div> : <> of Use & Privacy Policy</>}</span>
                </div>

                {/* <div style={{  width: '100%',display:'flex',justifyContent:'center',alignItems:'center', marginBottom:'4%' }}>
                    <Button style={{background:'#00b594',color:'#000'}} fullWidth ><span style={{padding:'2% 0% 2% 0%'}}>continue</span></Button>
                </div> */}

            </div>

        </div>)
    }


    return (
        <div>
            <Fragment style={{}}  >
                <Dialog
                    open={props.status}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth='sm'

                    style={{ background: '#191919', marginBottom: 'auto' }}

                >
                    <DialogContent style={{ background: '#000' }} >
                        <div style={{ width: '100%' }}>
                            {showDiloge()}
                        </div>
                    </DialogContent>
                    <DialogActions style={{ background: '#000' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4%' }}>
                            <Button onClick={handleClose} style={{ background: '#00b594', color: '#000', width: '95%' }} fullWidth ><span style={{ padding: '2% 0% 2% 0%' }}>continue</span></Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Fragment>
        </div>
    )
}