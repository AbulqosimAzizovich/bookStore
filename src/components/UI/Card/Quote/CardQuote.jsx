

import "./style.scss";

const CardQuote = () => {
    return (

        <div className="p-5 rounded-xl w-[600px] border">
            <i className='bx bxs-quote-alt-left text-[26px] mb-2'></i>
            <p className="text-[16px]">Inson bolasi ne kunlarni ko‘rmaydi?!
                Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.</p>
            <div className="flex items-center justify-between">
                <span></span>
                <span className="flex gap-x-1 items-center text-[20px]"><i className='bx bxs-heart'></i> <i className='bx bxs-share-alt'></i></span>
            </div>
        </div>

    );
};

export default CardQuote;