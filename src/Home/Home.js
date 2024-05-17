import { Container, Row, Col,Button } from "react-bootstrap";

import '../index.js'
import HeroImage from "./HeroImage.js";
import ShopNowCont from "./ShopNowCont.js";
import AboutUs from "./AboutUs.js";





export const Home =() =>{
return(
  <div>
  <HeroImage />
  <ShopNowCont />
  <AboutUs />
</div>

    );
}