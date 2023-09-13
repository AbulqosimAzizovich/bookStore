

import "./style.scss";
import img from "../../../../assets/images/cardbook.png";
import { Link } from "react-router-dom";
const CardBook = () => {

    return (
        <Link to={`/books/${5}`}>
            <div className="card-book w-[165px] rounded-[15px] cursor-pointer">
                <div>
                    <img src={img} alt="pic" className="object-center object-cover" />
                </div>
                <div className="card-body-book pt-[12px] pb-[22px] font-['Visuelt']">
                    <h3 className="text-center text-[#C9AC8C] text-[20px] mb-[5px] font-['Rotter']">Dunyoning ishlari</h3>
                    <p className="text-[12px] text-gray-300 mb-[14px]">O’tkir Hoshimov</p>
                    <div className="text-[12px]">
                        <span className="flex gap-x-[7px]"><i className='bx bxs-star text-[16px]'></i> <span>4.1 • 3400 ta fikrlar</span></span>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardBook;