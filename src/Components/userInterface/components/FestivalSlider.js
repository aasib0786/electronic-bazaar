import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function FestivalSlider(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        arrows:matches?false:true,
        slidesToShow: 4,
        slidesToScroll: 3,
        focusOnSelect:true,
      };

     var  data=[
                {id:1 , icone:'fp1.webp' },
                {id:2 , icone:'fp2.webp' },
                {id:4 , icone:'fp3.webp' },
                {id:5 , icone:'fp4.webp' },
                {id:6 , icone:'fp5.webp' },
                {id:7 , icone:'fp6.webp' },
                {id:8 , icone:'fp7.webp' },
                {id:9 , icone:'fp8.webp' },
                {id:10 , icone:'fp9.webp' },]
      const ShowFestivalSlider=()=>{
        return (data.map((item)=>{
            return(<div style={{display:'flex', width:'100%' }}>
            <div style={{width:'100%', display:'flex' , justifyContent:'center'}}>
           <img src={`${serverURL}/images/${item.icone}` } style={{width:'95%', margin:'5px', marginLeft:'8px'  }}/>
            
            </div>
            <div style={{color:'#fff' , display:'flex' , justifyContent:'center'}}>
                {item.categoryname}
            </div>
            </div>
            )
                    })
           )
    }

    return(<div style={{width:'75%', marginLeft:'12%'}}>
       <div style={{color:'white' , fontSize:'150%' , margin:'10px'}}>Festive Fiesta Deals</div>
         <Slider {...settings}>
           {ShowFestivalSlider()}
         </Slider>
    </div>)
}