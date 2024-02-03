import { Button, Paper } from "@mui/material";
import React from "react";
export default function ProsidToPayment(){
    return(<div>
         <Paper style={{ marginTop: '10%' }}>
                    <div style={{ padding: '4%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.2vw' }}>
                            <span>Order Summary ( 2 item )</span>
                        </div>
                        <div style={{ marginTop: '4%',display:'flex' }}>
                            <span>Original Price</span><span style={{ marginLeft: 'auto' }}>&#x20b9;100000</span>
                        </div>
                        <div style={{ marginTop: '4%',display:'flex' }}>
                            <span>Actual Amount</span><span style={{ marginLeft: 'auto' }}><s>&#x20b9;100000</s></span>
                        </div>
                        <div style={{ marginTop: '4%',display:'flex' }}>
                            <span>Save</span><span style={{ marginLeft: 'auto' }}>&#x20b9;0</span>
                        </div>
                        <div style={{ marginTop: '4%',display:'flex' }}>
                            <span>Delivery</span><span style={{ marginLeft: 'auto' }}>Free</span>
                        </div>
                        <div style={{ marginTop: '4%',display:'flex' }}>
                            <span>Total</span><span style={{ marginLeft: 'auto' }}>&#x20b9;100000</span>
                        </div>
                        <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'center', }}>
                            <Button style={{ background: '#12DAA8', borderRadius: '10px', color: 'black', fontSize: '0.8vw' }} fullWidth>Proceed to Payment</Button>
                        </div>
                    </div>
                </Paper>
    </div>)
}