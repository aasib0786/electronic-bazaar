import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";

export default function CircleSlider({cotegorys}){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [zoom , setZoom] = useState(null)

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        arrows:matches?false:true,
        slidesToShow:matches?5:7,
        slidesToScroll: 2,
        focusOnSelect:true,
        rows:matches?2:1,
      };

      const ShowCircleSlider=()=>{
        return (cotegorys.map((item,i)=>{
            return(<div style={{display:'flex', width:'100%' }}>
            <div style={{width:'100%', display:'flex' , justifyContent:'center' }} onMouseEnter={()=>setZoom(i)} onMouseLeave={()=>setZoom(null)} >
           <img src={`${serverURL}/images/${item.image}` } style={{width:zoom==i?'80%':'86%', margin:'5px', marginLeft:'8px' }}  />
            
            </div>
            <div style={{color:'#fff' , display:'flex' , justifyContent:'center',fontSize:matches?'40%':'100%'}}>
                {item.categoryname}
            </div>
            </div>
            )
                    })
           )
    }

    return(<div style={{width:'75%', marginLeft:'12%'}}>
         <Slider {...settings}>
           {ShowCircleSlider()}
         </Slider>
    </div>)
}