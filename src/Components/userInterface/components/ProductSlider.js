import Slider from "react-slick";
import { serverURL } from "../../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductSlider({ productDeals }) {
  var navigate = useNavigate()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: matches ? false : true,
    slidesToShow: matches ? 2 : 4,
    slidesToScroll: 3,
    focusOnSelect: true,
  };
  //   var data=[
  //    {id:0,picture:'pp1.webp',brandname:'Morphy rechards',productname:"iron ",modelno:'Coral 100 vat.',price: 1695.00,offerprice: 956.00,rating:4},
  //    {id:0,picture:'pp2.webp',brandname:'Apple',productname:"Smart Watch",modelno:'Coral 100 vat.',price: 1695.00,offerprice:956,rating:2},
  //    {id:0,picture:'pp3.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price: 20000.00,offerprice: 10000.00,rating:3},
  //    {id:0,picture:'pp4.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000.00,offerprice:10000.00,rating:1},
  //    {id:0,picture:'pp5.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2},
  //    {id:0,picture:'pp6.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:4},
  //    {id:0,picture:'pp7.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5}, 
  //    {id:0,picture:'pp8.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2}, 
  //    {id:0,picture:'pp9.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:1}, 
  //    {id:0,picture:'pp10.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5}, 
  //  ]
  const ShowProductSlider = () => {
    const handleClick = (item) => {
      navigate('/product', { state: { product: item } })
    }

    return (productDeals.map((item) => {
      return (
        <div>
          <div onClick={() => handleClick(item)} style={{ cursor: 'pointer', width: '92%', marginLeft: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: 'column', borderRadius: '5%' }}>
            <div style={{ color: "#fff", marginLeft: 'auto', position: 'initial', padding: '5%' }}>
              <FavoriteBorderIcon />
            </div>
            <img src={`${serverURL}/images/${item.productpicture}`} style={{ width: '70%' }} />

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
              <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', fontSize: "matches?20:12", fontWeight: 600, width: '90%' }}>
                {item.brandname} {item.productname} {item.modelno}
                <div style={{ flexDirection: 'column', marginTop: '2.5%' }}>
                  &#x20b9;{item.offerprice} <s style={{ fontWeight: 400, fontSize: 14 }}>&#x20b9;{item.price}</s>
                  <div ><Rating
                    value={item.rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      )
    })
    )
  }

  return (<div style={{ width: '75%', marginLeft: '12%' }}>
    <div style={{ color: 'white', fontSize: '150%', margin: '10px' }}>Deals of the Day</div>
    <Slider {...settings}>
      {ShowProductSlider()}
    </Slider>
  </div>)
}