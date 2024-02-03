import React from "react";
import ListIcon from '@mui/icons-material/List';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FillterButtonComponents(){
    return(<div style={{background:'#353535',height:'100%',display:'flex',color:'white'}}>
        <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center',borderRight:'1px solid white'}}>
       <span style={{padding:'20px 0px 20px 20px'}}><ListIcon fontSize="large"/></span>
       <span style={{fontSize:'17px',fontWeight:'bold',marginBottom:'7px'}}>Sort</span>
       </div>
       <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <span style={{padding:'20px 0px 20px 20px'}}><FilterListIcon fontSize="large" /></span>
       <span style={{fontSize:'17px',fontWeight:'bold',marginBottom:'7px'}}>Filters</span>
       </div>
    </div>)
}