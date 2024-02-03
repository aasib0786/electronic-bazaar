import React, { useEffect, useState } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import day from "../../../assets/rep7.webp"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parser } from "html-to-react";
import OfferPicture from "../../../assets/add1.webp"
import PlusMinesComponents from "./PlusMinesComponents";
import { useDispatch, useSelector } from "react-redux";
import ProductColorDetails from "./ProductColorDetails";




export default function ProductDitealText(props) {
  var dispatch = useDispatch()
  const theme = useTheme();
  var product = props.product
  // console.log('p::::::',product)
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // const [details, setDetails] = useState([])
  // const [product, setProduct] = useState(p)
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


  // const fetchProductDetails = async () => {
  //   var result = await postData('userinterface/display_all_product_detail_by_productid', { productid: product.productid })
  //   setDetails(result.data)

  // }

  // useEffect(function () {
  //   fetchProductDetails()

  // }, [])


  const handleQtyChange = (value) => {
    if (value <= 0) {
      dispatch({ type: 'DELETE_PRODUCT', payload: [product.productdetailid, product] })
    }
    else {
      //alert('hki'+value)
      product['Qty'] = value
      dispatch({ type: 'ADD_PRODUCT', payload: [product.productdetailid, product] })
    }
    props.setRefrace(!props.refrace)
  }

  return (
    <div style={{ width: '100%' }}>
      <div >
        <h1 style={{ margin: '20px 5px 12px 0px',fontSize:matches?'20px':<></> }}>{product.brandname} {product.productname} {product.model}</h1>
      </div>

      {matches ? <></> : <dib style={{ border: '1px solid #ff02B9', color: '#ff02B9', fontSize: '1vw', justifyContent: 'center', display: 'flex', width: '15%', borderRadius: '5px' }} >
        <span style={{ fontWeight: 'bold', fontSize: '70%', margin: '2%' }}>Best Saller</span>
      </dib>}

      <div style={{ display: 'flex', flexDirection: 'row',width:'100%' }}>
        <div style={{ marginTop: '2%', fontSize: '30px' }}>
          {/* &#x20b9;{product.offerprice>0?product.offerprice:product.price} */}
          {product.offerprice > 0 ? <div>&#8377;{product.offerprice} <s style={{ fontSize: '20px' }}>&#8377;{product.price}</s> </div> : <div style={{ fontSize: '30px' }}>&#8377;{product.price}</div>}
          <div style={{ marginTop: '0%', fontSize: '15px', marginLeft: '1%' }} >(Incl. all Taxes)</div>
        </div>
        {/* <div style={{ display: 'flex', width: '30px', height: '5%', fontSize: '20px', border: '0.5px solid white', marginLeft: '10%', marginTop: '4%', borderRadius: '10px' }} >OR</div> */}
        {/* <div style={{ marginTop: '2%', fontSize: '30px', marginLeft: '10%',background:'yellow',width:'60%' }}>
          &#x20b9;1200/month* <div style={{ marginTop: '0%', fontSize: '12px', marginLeft: '1%', width: '35%', borderBottom: '0.1px solid #12DAA8', color: '#12DAA8' }} >EMI Option</div>
        </div> */}
      </div>
      <p style={{ borderBottom: '0.2px solid #353535', width: '98%' }}></p>

      <div style={{ width: '100%', color: 'white', fontSize: '15px', fontWeight: 'bold', marginTop: '3%' }}>
        Color
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <ProductColorDetails setRefrace={props.setRefrace} refrace={props.refrace} setProduct={props.setProduct} product={product} />
      </div>
      <div style={{ marginTop: '3%' }}>
        <PlusMinesComponents value={product?.Qty} onChange={handleQtyChange} screen='product' />
      </div>
      <div style={{ marginTop: '2%', fontSize: '20px' }}>Suppers Saving (3 OFFERS)</div>
      <p style={{ borderBottom: '1.5px solid white', width: '98%', margin: '4px 0px 2px 0px' }}></p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '98%' }}>
        <img src={OfferPicture} width={'100%'} style={{ padding: '5px' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', borderRadius: '10px', background: '#353535', width: '98%', justifyContent: 'center', marginTop: '1%' }}>
        <div style={{ padding: '10px', display: 'flex', width: '98%' }}>
          <PlaceIcon />
          <span style={{ fontSize: '12px', marginBottom: '2%' }} >Delivery at:<b style={{ color: '#12DAA8', borderBottom: '0.5px solid #12DAA8' }}> Mumbai, 400049</b>
            <div style={{ marginTop: '2%' }}>Standard Delivery by Tomorrow</div> </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', width: '98%', justifyContent: 'center', marginTop: '1.5%' }}>
        <div style={{ borderRadius: '10px', border: '1px solid #353535', width: '100%', padding: '10px' }}>
          <div style={{fontSize:'1.8vw',fontWeight:'bold'}}>Key Features</div>
          {Parser().parse(product.description)}
        </div>
      </div>
      {/* {matches ? <></> : <div style={{ display: 'flex ', justifyContent: 'center', alignItems: 'center', marginTop: '2%', flexDirection: 'column', fontWeight: 'bold', fontSize: '14px' }}>
        <img src={day} width={'10%'} />
        <div>7 Days Easy Replace</div>
      </div>} */}
      {/* <p style={{ borderBottom: '2px solid #353535', width: '98%', margin: '4px 2px 2px 0px' }}></p> */}
      {/* <div>
        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>Apple Care Plans</p>
        <p>Protection plans from Apple.</p>
      </div> */}
      {/* <p style={{ borderBottom: '2px solid #353535', width: '98%', margin: '4px 2px 2px 0px' }}></p> */}
      {/* <div style={{ marginTop: '10px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '12px', marginRight: '5%' }}>AppleCare+</span><span>Starting @ just ₹313/mo.</span>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div style={{ border: '0.5px solid white', width: '10%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '3% 0% 0% 5%' }}>
            <p><span>2 year</span><br /><span>&#x20b9;7500</span></p>
          </div>
          <div style={{ border: '0.5px solid white', width: '10%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3% 0% 0% 10%', borderRadius: '10px' }}>
            <p><span>2 year</span><br /><span>&#x20b9;7500</span></p>
          </div>
        </div>
      </div> */}
      {/* <p style={{ borderBottom: '2px solid #353535', width: '98%', margin: '10px 2px 2px 0px' }}></p> */}

    </div>
  )
}