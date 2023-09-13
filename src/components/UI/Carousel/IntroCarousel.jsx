
import mainImg from "../../../assets/images/introcarousel.png";
import { Carousel } from 'antd';

import "./style.scss";
const IntroCarousel = () => (
    <Carousel dotPosition={'bottom'}>

        <img src={mainImg} alt="img" className="slide" />
        <img src={mainImg} alt="img" className="slide" />
        <img src={mainImg} alt="img" className="slide" />
        <img src={mainImg} alt="img" className="slide" />

    </Carousel>
);
export default IntroCarousel;