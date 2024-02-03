import { Button, Paper, Rating } from "@mui/material";
import React from "react";
import ps from "../../../assets/ps1.webp"
import { serverURL } from "../../../services/FetchNodeServices";
import PlusMinesComponents from "../../userInterface/components/PlusMinesComponents"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function AddProductCard(props) {
    var product = props.cartproduct
    var dispatch = useDispatch()
    console.log('cart Product:', product)

    var cart = useSelector(state => state.mycart)
    var keys = Object.keys(cart)
    // console.log('KEYS:-', keys)
    if (keys?.length == 0) {
        product['Qty'] = 0
    }
    else {
        if (keys.includes(product.productdetailid + "")) {
            product = cart[product.productdetailid + ""]
        }
        else {
            product['Qty'] = 0
        }
    }

    const handleQtyChange = (product,value) => {
        console.log('product ',product, 'value',value)
        if(value<=0)
        {
        dispatch({ type: 'DELETE_PRODUCT', payload: [product.productdetailid, product] })
        }
        else
        {
            //alert('hki'+value)
        product['Qty'] = value
        dispatch({ type: 'ADD_PRODUCT', payload: [product.productdetailid, product] })
        }
        
       props.setRefrace(!props.refrace)
    }


    const showCart = () => {
        return product.map((item) => {
            var picture =item.picture.split(",")[0]
            return (<div style={{ marginTop: '3%' }}>
                <Paper>
                    <div style={{ display: 'flex', padding: '2%' }} >
                        <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <img src={`${serverURL}/images/${picture}`} width={'90%'} />
                        </div>
                        <div style={{ width: '60%', display: 'flex', fontSize: '1.2vw', fontWeight: '600', flexDirection: 'column' }} >
                            <div>{item.brandname} {item.productname} {item.categoryname} {item.model}</div>
                            <div style={{ padding: '2% 0% 2% 0%' }}>
                                <Rating />
                            </div>
                            <div style={{ fontSize: '1vw' }}>Standard Delivery by tomorrow</div>
                            <div style={{ marginTop: '1%', display: 'flex' }}>
                                <Button style={{ border: '1px solid black', fontSize: '0.8vw', color: 'black', fontWeight: 'bold' }}>
                                    Move to vishlist
                                </Button>
                                <Button style={{ border: '1px solid black', marginLeft: '2%', fontSize: '0.8vw', color: 'black', fontWeight: 'bold',zIndex:0 }}>
                                    <PlusMinesComponents value={item?.Qty} onChange={(value)=>handleQtyChange(item,value)} screen='cart' />
                                </Button>
                            </div>
                        </div>
                        <div style={{ width: '20%', display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
                            <div style={{ fontSize: '1.5vw', fontWeight: 'bold', marginLeft: '40%' }}> &#x20b9;{(item.offerprice * item.Qty)}</div>
                            <div style={{ marginLeft: "auto" }}>(Incl. all Taxes)</div>
                            <p style={{ border: '0.5px solid #353535', width: '98%' }}></p>
                            <div><s>MRP ₹{(item.price * item.Qty)}</s></div>
                            <div style={{ fontSize: '0.8vw' }}>(Save ₹{(item.price - item.offerprice) * item.Qty})</div>
                            <p style={{ border: '0.5px solid #353535', width: '98%' }}></p>
                            <div style={{ fontSize: '1.2vw', fontWeight: 'bold', marginLeft: 'auto' }}> &#x20b9;800.00/mo*</div>
                            <div style={{ fontSize: '0.8vw', fontWeight: 'bold', marginLeft: 'auto', borderBottom: ' solid #088466', color: '#088466' }}>EMI Options</div>
                        </div>
                    </div>
                </Paper>
            </div>)
        })
    }

    return (<div>
        {showCart()}
    </div>)

}