import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AddSlider(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:matches?false:true,
        focusOnSelect:true,
        autoplaySpeed:10000,
        autoplay:true,
      };

     var  data=['add1.webp','add2.webp','add3.webp','add4.webp']
      const ShowAddSlider=()=>{
        return (data.map((item)=>{
            return(<div style={{width:'100%'}}>
           <img src={`${serverURL}/images/${item}` } style={{width:'98%',  marginLeft:'0.6%'  }}/>
            </div>)
                    })
           )
    }

    return(<div style={{width:'75%', marginLeft:'12%'}}>
         <Slider {...settings}>
           {ShowAddSlider()}
         </Slider>
    </div>)
}