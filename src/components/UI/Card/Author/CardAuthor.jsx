

import "./style.scss";
import img from "../../../../assets/images/cardauthor.png";

const CardAuthor = () => {
   
    return (
        <div className="card-auth w-[173.33px] rounded-[15px] cursor-pointer">
            <div>
                <img src={img} alt="pic" className="object-center object-cover" />
            </div>
            <div className="card-body-auth pt-[12px] pb-[22px]">
                <h3 className="text-center text-[#C9AC8C] text-[20px] mb-[5px]">Abdulla Avloniy</h3>
                <p className="text-center text-[12px] text-gray-300 mb-[14px]">1878-1934</p>
                <div className="flex items-center justify-around text-[16px]">
                    <span className="flex items-center justify-center gap-x-2"><i className='bx bxs-book-alt text-[20px]'></i> <span>34</span></span>
                    <span className="flex items-center justify-center gap-x-2"><i className='bx bx-headphone text-[20px]'></i> <span>13</span></span>
                </div>
            </div>
        </div>
    );
};

export default CardAuthor;