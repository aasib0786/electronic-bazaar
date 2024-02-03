import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function HighlightSlider(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        arrows:matches?false:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect:true,
      };
    var data=[{picture:'h1.webp'},
     {picture:'h2.webp'},
     {picture:'h3.webp'},
     {picture:'h4.webp'},
     {picture:'h5.webp'},
     {picture:'h6.webp'},
     {picture:'h7.webp'},
     ]
     var data2=[{picture:'hl1.webp'},
     {picture:'hl2.webp'},
     {picture:'hl3.webp'},
     {picture:'hl4.webp'},
     {picture:'hl5.webp'},
     {picture:'hl6.webp'},
     {picture:'hl7.webp'},
     ]
      const ShowHighlightSlider=()=>{
        return (data.map((item)=>{
            return(<div>
            <div style={{width:'95%', marginLeft:'3%',display:'flex' ,justifyContent:'center', alignItems:'center',flexDirection:'column',borderRadius:'5%'}}>
           <img src={`${serverURL}/images/${item.picture}` } style={{width:'102%', margin:'10px', marginLeft:'8px',borderRadius:'3%'  }}/>
                <div style={{color:'#fff' , display:'flex' , justifyContent:'center'}}>
                {item.brandname} {item.productname}
                </div>
            </div>
            
            </div>
            )
                    })
           )}
           const ShowHighlight2Slider=()=>{
            return (data2.map((item)=>{
                return(<div>
                <div style={{width:'95%', marginLeft:'3%',display:'flex' ,justifyContent:'center', alignItems:'center',flexDirection:'column',borderRadius:'5%'}}>
               <img src={`${serverURL}/images/${item.picture}` } style={{width:'102%', margin:'10px', marginLeft:'8px',borderRadius:'3%'  }}/>
                    <div style={{color:'#fff' , display:'flex' , justifyContent:'center'}}>
                    {item.brandname} {item.productname}
                    </div>
                </div>
                
                </div>
                )
                        })
               )}

    return(<div style={{width:'75%', marginLeft:'12%'}}>
       <div style={{color:'white' , fontSize:'150%' , margin:'10px'}}>Highlights</div>
         <Slider {...settings}>
           {ShowHighlightSlider()}
         </Slider>
         <Slider {...settings}>
           {ShowHighlight2Slider()}
         </Slider>
    </div>)
}