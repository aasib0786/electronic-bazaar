import { Button } from "@mui/material"
import { postData, getData, serverURL } from "../../../services/FetchNodeServices"
import { useState,useEffect } from "react"

export default function ProductColorDetails(props){
    var product=props.product
   // console.log('tttttttttttttttt::',product)
    const [selectedId, setSelectedId] = useState(product.productdetailid)
    const [details, setDetails] = useState([])
    // const [product , setProduct] = useState(p)

    const fetchDetail = async (id) => {
        var result = await postData('userinterface/display_all_productdetail_by_productdetailid', { productdetailid: id })
        console.log('RESULT RESULT :-', result.data)
        props.setProduct(result.data[0])
        setSelectedId(result.data[0].productdetailid)
        // setProduct(result.data[0])
        // props.setRefrace(!props.refrace)
    }

    const fetchProductDetails = async () => {
        var result = await postData('userinterface/display_all_product_detail_by_productid', { productid: product.productid })
        setDetails(result.data)

    }

    useEffect(function () {
        fetchProductDetails()

    }, [])

    const showDetails = () => {
        return details.map((item) => {
            return (<div onClick={() => fetchDetail(item?.productdetailid)} style={{ color: '#fff', fontSize: '12px', marginTop: '3%', gap: 15, display: 'flex' }}>
                <Button style={{ color: '#fff', borderColor: selectedId == item.productdetailid ? '#12daa8' : 'gray', fontSize: 12, padding: '8px 10px 8px', fontWeight: 'bold', textTransform: 'none' }} size='small' variant='outlined'>{item.color}</Button>
            </div>)
        })
    }
    return (
        <div style={{display:'flex',gap:10}}>
            {showDetails()}
        </div>
    )
}