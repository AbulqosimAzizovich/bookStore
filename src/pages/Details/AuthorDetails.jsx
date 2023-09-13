

import author from "../../assets/images/author.png";
import CardBook from "../../components/UI/Card/Book/CardBook";
const AuthorDetails = () => {
    return (
        <section className='pt-[60px] pb-10'>
            <div className=''>
                <div className='wrapper flex gap-x-[97px]'>
                    <div>
                        <img src={author} alt="author" className="mb-10" />
                        <div className="flex justify-around">
                            <div>
                                <p className="text-gray-500 text-[12px] font-['Visuelt']">Tavallud sanasi</p>
                                <p className="text-[39px] font-['Rotter'] text-[#C9AC8C]">5-Avg 1941</p>
                                <p className="text-gray-500 text-[12px] font-['Visuelt']">Toshkent, Uzbekistan</p>
                            </div>
                            <span className="text-[40px] text-[#C9AC8C]">-</span>
                            <div>
                                <p className="text-gray-500 text-[12px] font-['Visuelt']">Tavallud sanasi</p>
                                <p className="text-[39px] font-['Rotter'] text-[#C9AC8C]">24-MAY 2013</p>
                                <p className="text-gray-500 text-[12px] font-['Visuelt']">Toshkent, Uzbekistan</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-5 text-[48px] text-[#C9AC8C] font-['Rotter']">O’tkir Hoshimov</h1>
                        <p className="mb-5 text-[16px] leading-[23px] max-w-[671px]">Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>
                        <div className="text-[#C9AC8C] font-['Rotter'] uppercase flex items-center">
                            <span><i className='bx bxs-bookmark-star text-[20px]'></i> Ijodi</span>
                        </div>
                        <p className="text-[12px] leading-[18px] w-[362px] mb-[50px] ms-[20px]">Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-[#C9AC8C] uppercase text-[31px] font-['Rotter']">Asarlari</h2>
                            <a className="text-[16px]" href="#">Barchasini ko’rish</a>
                        </div>
                        <div className="flex items-cnter gap-x-10">
                            {
                                "HELL".split("").map((item) => {
                                    return <CardBook />
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AuthorDetails;