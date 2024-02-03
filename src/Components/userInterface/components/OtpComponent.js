import { Button, Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postData } from "../../../services/FetchNodeServices";
import { useDispatch } from "react-redux";
export default function OtpComponent(props) {
    var dispatch=useDispatch()
    var location = useLocation()
    var oldOtp = location.state.otp
    var mobileno = location.state.mobileno
    var states = location.state.states
   //console.log('mobaile:--',mobileno)
    var navigate = useNavigate()
    const [open, setOpen] = useState(true)
    var otpArray = new Array([4])
    otpArray.fill('')

    const handleClose = () => {
        setOpen(false)
        navigate('/checkout')
    }

    const handleOtp1 = () => {
        if (document.getElementById('one').value.length == 1) {
            otpArray[0] = document.getElementById('one').value
            document.getElementById('two').focus()
        }
    }

    const handleOtp2 = () => {
        if (document.getElementById('two').value.length == 1) {
            otpArray[1] = document.getElementById('two').value
            document.getElementById('three').focus()
        }

    }

    const handleOtp3 = () => {

        if (document.getElementById('three').value.length == 1) {
            otpArray[2] = document.getElementById('three').value
            document.getElementById('four').focus()
        }

    }

    const handleOtp4 = () => {
        if (document.getElementById('four').value.length == 1) {
            otpArray[3] = document.getElementById('four').value
        }
    }

    const handleCheckOtp = async() => {
        var otp = otpArray.join('')
        // setOpen(false)
        if (otp == oldOtp) {
            var body = {mobileno:mobileno}
            var respons = await postData('userinterface/check_Account',body)
            if(respons.status)
            {
                if(states=='userHandle'){
                    dispatch({type:'ADD_USER',payload:[respons.data[0].mobileno,respons.data[0]]})
                // localStorage.getItem('User',JSON.stringify(respons.data[0]))
                localStorage.setItem("User",JSON.stringify(respons.data[0])) 
                console.log('localStorage.getItem(JSON.stringify(respons.data[0]))',localStorage.getItem('User',JSON.stringify(respons.data[0])))
                    navigate('/my_account')
                }
                else
                {
                dispatch({type:'ADD_USER',payload:[respons.data[0].mobileno,respons.data[0]]})
                // localStorage.getItem('User',JSON.stringify(respons.data[0]))
                localStorage.setItem("User",JSON.stringify(respons.data[0])) 
                console.log('localStorage.getItem(JSON.stringify(respons.data[0]))',localStorage.getItem('User',JSON.stringify(respons.data[0])))
                navigate('/checkout',{state:{mobileno:mobileno,user:respons.data,status:respons.status}})
                }
            }
            else
            {
                alert('dont have data')
                navigate('/checkout',{state:{mobileno:mobileno,status:respons.status,user:[]}})
            }
        }
        else{
            alert('Invelid OTP')
        }

    }
    const showDiloge = () => {
        return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', background: '#000', flexDirection: 'column' }}>

            <div style={{ fontWeight: 'bold', fontSize: '3vh', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '6%', alignItems: 'center' }}>
                VERIFY WITH OTP 
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '3vh', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '6%', alignItems: 'center' }}>
            {oldOtp}
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ padding: '4% 0% 4% 0%' }}>Send to {mobileno}</span>
            </div>
            <div style={{ display: 'flex', gap: '10%', width: '60%' }}>
                <div style={{ border: '1px solid white', borderRadius: '4px' }} >
                    <TextField onKeyUp={handleOtp1} id="one" style={{ background: '#fff' }} />
                </div>
                <div style={{ border: '1px solid white', borderRadius: '4px' }}>
                    <TextField onKeyUp={handleOtp2} id="two" style={{ background: '#fff' }} />
                </div>
                <div style={{ border: '1px solid white', borderRadius: '4px' }}>
                    <TextField onKeyUp={handleOtp3} id="three" style={{ background: '#fff' }} />
                </div>
                <div style={{ border: '1px solid white', borderRadius: '4px' }}>
                    <TextField onKeyUp={handleOtp4} id="four" style={{ background: '#fff' }} />
                </div>
            </div>
            {/* <input type="text"  placeholder="ENTER OTP NUMBER" style={{padding:'4% 23% 4% 32%',fontSize:'3vh',borderRadius:'10px',color:'white',background:'#000'}}/> */}

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ padding: '4% 0% 4% 0%', fontSize: '2vh' }}>Didn't Receive Your OTP?<Button>resend OTP</Button></span>
            </div>

            {/* <div style={{  width: '100%',display:'flex',justifyContent:'center',alignItems:'center', marginBottom:'4%' }}>
                    <Button style={{background:'#00b594',color:'#000'}} fullWidth ><span style={{padding:'2% 0% 2% 0%'}}>Submit OTP</span></Button>
                </div> */}
        </div>)
    }
    return (
        <div>
            <Fragment style={{}}  >
                <Dialog
                    open={open}
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
                            <Button onClick={handleCheckOtp} style={{ background: '#00b594', color: '#000', width: '95%' }} fullWidth ><span style={{ padding: '2% 0% 2% 0%' }}>Submit OTP</span></Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Fragment>
        </div>
    )
}