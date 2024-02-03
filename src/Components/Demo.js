import React, { useEffect, useState } from "react";
import { getData } from "../services/FetchNodeServices";

export default function Demo(){
    const [data1 , setData1 ] = useState('')
    const [data2 , setData2 ] = useState('')
    const [data3 , setData3 ] = useState('')
    const fetchFirstData=async()=>{
        var result = await getData('demo/displaydata1')
        setData1(result.massege)
    }
    
    const fetchSecondData=async()=>{
        var result = await getData('demo/displaydata2')
        setData2(result.massege)
    }
   
    const fetchThirdData=async()=>{
        var result = await getData('demo/displaydata3')
        setData3(result.massege)
    }


    useEffect(function(){
        fetchFirstData()
         fetchSecondData()
         fetchThirdData()
    },[])

   

    return(<div>
        <h1>{data1 }</h1>
        <h2>{data2 }</h2>
        <h3>{data3 }</h3>
         </div>)
}