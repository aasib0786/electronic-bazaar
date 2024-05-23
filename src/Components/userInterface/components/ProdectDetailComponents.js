import React from "react";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { serverURL } from "../../../services/FetchNodeServices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate } from "react-router-dom";

export default function ProductDetailsComponents(props) {
  var navigate = useNavigate();
  var data = props?.data;
  console.log("DATA:-", data);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: matches ? 2 : 4,
    slidesToScroll: 3,
    focusOnSelect: true,
  };
  // var data=[
  //   {id:0,picture:'pp1.webp',brandname:'Morphy rechards',productname:"iron ",modelno:'Coral 100 vat.',price: 1695.00,offerprice: 956.00,rating:4},
  //   {id:0,picture:'pp2.webp',brandname:'Apple',productname:"Smart Watch",modelno:'Coral 100 vat.',price: 1695.00,offerprice:956,rating:2},
  //   {id:0,picture:'pp3.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price: 20000.00,offerprice: 10000.00,rating:3},
  //   {id:0,picture:'pp4.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000.00,offerprice:10000.00,rating:1},
  //   {id:0,picture:'pp5.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2},
  //   {id:0,picture:'pp6.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:4},
  //   {id:0,picture:'pp7.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5},
  //   {id:0,picture:'pp8.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:2},
  //   {id:0,picture:'pp9.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:1},
  //   {id:0,picture:'pp10.webp',brandname:'LG',productname:"Solo Microwave",modelno:'20L 44 Auto Cook',price:20000,offerprice:10000,rating:5},
  // ]
  const ShowProductSlider = () => {
    const handleClick = (item) => {
      navigate("/product", { state: { product: item } });
    };
    return data.map((item) => {
      return (
        <div
          onClick={() => handleClick(item)}
          style={{
            display: "flex",
            marginBottom: "4%",
            borderBottom: "1px solid #353535",
          }}
        >
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={`${serverURL}/images/${item.picture}`}
              style={{ width: "65%" }}
            />
          </div>
          <div style={{ flexDirection: "column", width: "50%" }}>
            <div style={{ color: "#fff", display: "flex", fontSize: "2vw" }}>
              {item.brandname} {item.productname} {item.modelno}
            </div>
            <div style={{ display: "flex", marginTop: "3%" }}>
              <dib
                style={{
                  border: "1px solid #ff02B9",
                  color: "#ff02B9",
                  fontSize: "1vw",
                  justifyContent: "center",
                  display: "flex",
                  width: "35%",
                  borderRadius: "5%",
                }}
              >
                <span
                  style={{ fontWeight: "bold", fontSize: "70%", margin: "2%" }}
                >
                  5000 off on pymant page
                </span>
              </dib>
              <dib
                style={{
                  border: "1px solid #ff02B9",
                  color: "#ff02B9",
                  fontSize: "1vw",
                  marginLeft: "2%",
                  justifyContent: "center",
                  display: "flex",
                  width: "20%",
                  borderRadius: "5%",
                }}
              >
                <span
                  style={{ fontWeight: "bold", fontSize: "70%", margin: "2%" }}
                >
                  Best Saller
                </span>
              </dib>
            </div>
            <div style={{ marginTop: "1.5%", fontSize: "1.8vw" }}>
              &#x20b9;{item.offerprice}
              <div style={{ marginTop: "-1%", fontSize: "0.8vw" }}>
                (Incl. all Taxes)
              </div>
            </div>
            <div style={{ marginTop: "1.5%", fontSize: "1vw" }}>
              <s>MRP:&#x20b9;{item.price}</s>
            </div>
            <div style={{ marginTop: "5%", display: "flex" }}>
              <PlaceIcon />
              <span style={{ fontSize: "0.8vw", marginBottom: "2%" }}>
                Delivery at:
                <b
                  style={{
                    color: "#12DAA8",
                    borderBottom: "0.5px solid #12DAA8",
                  }}
                >
                  {" "}
                  Mumbai, 400049
                </b>
                <div style={{ marginTop: "2%" }}>
                  Standard Delivery by Tomorrow
                </div>{" "}
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#fff",
              marginLeft: "auto",
              position: "initial",
              padding: "1%",
              color: "green",
              onMouseLeave: "white",
              onMouseEnter: "red",
            }}
          >
            <FavoriteBorderIcon />
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ width: "80%", flexDirection: "column", marginTop: "4%" }}>
      {ShowProductSlider()}
    </div>
  );
}
