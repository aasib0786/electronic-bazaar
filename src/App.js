 import Category from "./Components/Category";
 import Brand from "./Components/Brands";
import DisplayAllCategory from "./Components/DisplayAllCategory";
import { Routes,Route,BrowserRouter as Router  } from "react-router-dom";
import DisplayAllBrand from "./Components/DisplayAllBrands";
import Products from "./Components/projectComponent/Products";
import DisplayAllProduct from "./Components/projectComponent/DisplayAllProduct";
import ProductDetails from "./Components/projectComponent/ProductDetails";
import DisplayAllProductDetails from "./Components/projectComponent/DisplayAllProductDetails";
import Banner from "./Components/projectComponent/Banner";
import CategoryBanner from "./Components/projectComponent/CategoryBanner";
import AdminLogin from "./Components/projectComponent/AdminLogin";
import AdminRegister from "./Components/projectComponent/AdminRegister";
import Dashbord from "./Components/projectComponent/Dashbord";
import Home from "./Components/userInterface/components/screen/Home";
import ProductSearch from "./Components/userInterface/components/screen/ProductDetails";
import Product from "./Components/userInterface/components/screen/Product";
import AddToCard from "./Components/userInterface/components/screen/AddToCard";
import Demo from "./Components/Demo";
import PlusMinesComponents from "./Components/userInterface/components/PlusMinesComponents";
import ContactInformationComponents from "./Components/userInterface/components/ContactInformationComponents"
import OtpComponent from "./Components/userInterface/components/OtpComponent";
import My_Account from "./Components/userInterface/components/My_Account";
import CheckOutScreen from "./Components/userInterface/components/screen/CheckOutScreen";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<AdminLogin/>} path="/adminlogin" />
          <Route element={<AdminRegister/>} path="/adminregister" />
          <Route element={<Dashbord/>} path="/dashbord/*" />
          <Route element={<Home/>} path="/home" />
          <Route element={<ProductSearch/>} path="/productsearch" />
          <Route element={<Product/>} path="/product" />
          <Route element={<AddToCard/>} path="/addtocard" />
          <Route element={<Demo/>} path="/demo" />
          <Route element={<PlusMinesComponents/>} path="/plus" />
          <Route element={<OtpComponent/>} path="/otp" />
          <Route element={<My_Account/>} path="/my_account" />
          <Route element={<CheckOutScreen/>} path="/checkout" />
          <Route element={<ContactInformationComponents/>} path="/ContactInformationComponents" />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
