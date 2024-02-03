import React, { useState } from "react";
import { Paper } from "@mui/material";
import card from "../../../assets/crp.svg"
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import LoginMyProfile from "../components/LoginMyProfile"
import useRazorpay from "react-razorpay";
import { postData, serverURL } from "../../../services/FetchNodeServices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function CartCheckOutComponents(props) {
    var navigate = useNavigate()
    var user = useSelector(state => state.user)
    var userdata = Object.values(user)[0]
    // console.log('uuuuuuuuu', userdata)
    var product = props?.cartproduct
    const [Razorpay] = useRazorpay();
    //  var user = props?.userdata
    // console.log('cart Productcart Productcart Product:', product,'userDTA',user)
    const [selectedValue, setSelectedValue] = useState('a')
    const [status, setStatus] = useState(false)
    var actualAmount = product.reduce((p1, p2) => {
        return p1 + (p2.price * p2.Qty)
    }, 0)
    var originalAmount = product.reduce((p1, p2) => {
        return p1 + (p2.offerprice * p2.Qty)
    }, 0)
    const options = {
        key: "rzp_test_GQ6XaPC6gMPNwH", // Enter the Key ID generated from the Dashboard
        amount: originalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Electronics Bazzar",
        description: "Test Transaction",
        image: `${serverURL}/images/croma.png`,
        //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: async function (response) {
            alert(response.razorpay_payment_id);
            //alert(response.razorpay_order_id);        
            alert(response.razorpay_signature);
            var body = { cart: product, user: userdata, paymentstatus: response.razorpay_payment_id }
            var result = await postData('Userinterface/submit_order', body)
            console.log('RESULT', result.massege)
            if (result.status) {
                alert('oder submited successfully')
            }
            else {
                alert('fail to submit order')
            }
        },
        prefill: {
            name: userdata?.username,
            email: userdata?.emailid,
            contact: userdata?.mobileno,
        },
        notes: {
            address: "Razorpay Corporate Office",
        },
        theme: {
            color: "#3399cc",
        },
    };
    const handlePayment = async () => {
        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            //   alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    }
    const HandlePayment = () => {
        handlePayment()
    }
    const HandleClick = () => {
        var userData = JSON.parse(localStorage.getItem('User'))
        // console.log(userData)
        if (userData) {
            navigate('/checkout', { state: { mobileno: userData?.mobileno, user: [userData], status: true } })
        } else {
            setStatus(true)
        }
    }
    console.log(status)
    const showAmount = () => {
        return (<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Paper style={{ width: '100%' }}>
                <div style={{ padding: '4%', fontWeight: 'bold', fontSize: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Delivery options for</span>
                        <span style={{ fontSize: '16px', color: '#088466', marginLeft: '2%' }}>404810</span>
                        <span style={{ fontSize: '14px', color: '#088466', fontWeight: '400', marginLeft: '5%', borderBottom: '0.5px solid #088466' }}>change</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <Radio
                            checked={selectedValue === 'a'}
                            value="a"
                            style={{ color: '#12DAA8' }}
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <span style={{ marginTop: '2%' }}><img src={card} /></span>
                        <span style={{ marginLeft: '2%', fontSize: '2vh' }}>Standard Delivery by Today</span>
                    </div>
                </div>
            </Paper>
            <Paper style={{ marginTop: '10%' }}>
                <div style={{ padding: '4%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2vw' }}>
                        <span>Order Summary ( {product.length} item )</span>
                    </div>
                    <div style={{ marginTop: '4%', display: 'flex' }}>
                        <span>Original Price</span><span style={{ marginLeft: 'auto' }}>&#x20b9;{originalAmount}</span>
                    </div>
                    <div style={{ marginTop: '4%', display: 'flex' }}>
                        <span>Actual Amount</span><span style={{ marginLeft: 'auto' }}><s>&#x20b9;{actualAmount}</s></span>
                    </div>
                    <div style={{ marginTop: '4%', display: 'flex' }}>
                        <span>Save</span><span style={{ marginLeft: 'auto' }}>&#x20b9;{actualAmount - originalAmount}</span>
                    </div>
                    <div style={{ marginTop: '4%', display: 'flex' }}>
                        <span>Delivery</span><span style={{ marginLeft: 'auto' }}>Free</span>
                    </div>
                    <div style={{ marginTop: '4%', display: 'flex' }}>
                        <span>Total</span><span style={{ marginLeft: 'auto' }}>&#x20b9;{originalAmount}</span>
                    </div>
                    <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'center', }}>
                        {props.title == 'check out' ?
                            <Button style={{ background: '#12DAA8', borderRadius: '10px', color: 'black', fontSize: '2vh' }} onClick={HandleClick} fullWidth>{props.title}</Button> :
                            <Button style={{ background: '#12DAA8', borderRadius: '10px', color: 'black', fontSize: '2vh' }} onClick={HandlePayment} fullWidth>{props.title}</Button>}
                    </div>
                </div>
            </Paper>
            <LoginMyProfile status={status} setStatus={setStatus} />
        </div>)
    }
    return (<div>
        {showAmount()}
    </div>)
}