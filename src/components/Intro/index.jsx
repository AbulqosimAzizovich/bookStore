
import IntroCarousel from "../UI/Carousel/IntroCarousel";
import "./style.scss";

const index = () => {
    return (
        <section className="pt-[54px]">
            <div className='container'>
                <div className="wrapper">
                    <IntroCarousel />
                </div>
            </div>
        </section>
    );
};

export default index;