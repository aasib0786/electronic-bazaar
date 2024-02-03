import AddProductCard from "../AddProductCard";
import CartCheckOutComponents from "../CartCheckOutComponents"
import CheckOutHeader from "../CheckOutHeader";
import ContactInformationComponents from "../ContactInformationComponents";
import Header from "../Header";
import ProsidToPayment from "../ProsidToPayment";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DeliveryAddresComponents from "../DeliveryAddresComponents";

export default function CheckOutScreen(props) {
    var cart = useSelector(state => state.mycart)
  var cartproduct = Object.values(cart)
    var location = useLocation()
    var mobile = location.state.mobileno
    var status = location.state.status
    var userData = location.state.user

    console.log('mobilenono.',mobile , 'status:-',status , 'userDatauserData',userData,'cartproduct:',cartproduct)

 
    return (<div style={{ width: '100vw', background: '#f9f9f9', height: 'auto' }}>
        <div style={{position:'sticky',top:0, zIndex:3}}>
            <CheckOutHeader />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  width: '100%',position:'sticky' }}>
            <div style={{ display: 'flex', width: '60%' }}>
                {status?<><DeliveryAddresComponents userData={userData}/></>:<ContactInformationComponents cartproduct={cartproduct} mobileno={mobile}/> }
                {/* <ContactInformationComponents status={status} mobileno={mobile}/> */}
                
            </div>
            <div style={{ width: '20%',marginTop:'6%',marginLeft:'2%',position:'sticky',top:80 }}>
                {/* <ProsidToPayment/> */}
                {/* <CartCheckOutComponents /> */}
                <CartCheckOutComponents cartproduct={cartproduct} userdata={userData} title='prosid to payment' />
            </div>
        </div>
    </div>)
}