

import book from "../../assets/images/book.png";
import CardBook from "../../components/UI/Card/Book/CardBook";
import CardQuote from "../../components/UI/Card/Quote/CardQuote";
const BookDetails = () => {
    return (
        <section className='pt-[60px] pb-10'>
            <div className='container'>
                <div className='wrapper'>
                    <div className="flex gap-x-[55px] mb-[55px]">
                        <img src={book} alt="book" />

                        <div className="w-full">
                            <h1 className="text-[#C9AC8C] font-['Rotter'] text-[48px] mb-1">Qo’rqma</h1>
                            <div className="mb-[30px] flex items-center justify-between w-[200px]"><h5 className="text-[16px] text-[#C9AC8C]">Javlon Jovliyev</h5> | <span className="flex items-center justify-center text-[15px] font-['Visuelt']"> <i className='bx bxs-star text-[16px]'></i> <span>4.1</span> </span></div>
                            <ul className="flex flex-col gap-y-5 text-[20px] mb-10">
                                <li><span className="text-gray-400 me-1">Sahifalar soni: </span> 376</li>
                                <li><span className="text-gray-400 me-1">Chop etilgan: </span> 2021</li>
                                <li><span className="text-gray-400 me-1">Janri: </span> Tarixiy</li>
                                <li><span className="text-gray-400 me-1">Nashriyot: </span> Nihol nashr</li>
                            </ul>

                            <div className="flex  w-full items-center mb-[48px]">
                                <p className="text-[#C9AC8C] text-[16px] w-[150px]">To’liq ma’lumot</p>
                                <i className='bx bx-down-arrow-alt tetx-[15px] mx-1'></i>
                                <span className="h-[1px] bg-black w-full block"></span>
                            </div>

                            <p className="leading-[23px] text-[16px] mb-[46px]">Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.
                                <span className="block mb-[10px]"></span>
                                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.</p>

                            <p className="text-[#C9AC8C] text-[16px] mb-[28px]">Mavjud formatlar</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-[26px]">
                                    <div className="flex flex-col items-center">
                                        <i className='bx bxs-book-alt text-[22px]'></i>
                                        <p className="text-[16px]">Qog’oz kitob</p>
                                        <span className="text-[16px] text-gray-300">27 000 so’m</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <i className='bx bx-headphone text-[22px]'></i>
                                        <p className="text-[16px]">Audiokitob</p>
                                        <span className="text-[16px] text-gray-300">6:23 soat</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <i className='bx bxs-book text-[22px]'></i>
                                        <p className="text-[16px]">Elektron</p>
                                        <span className="text-[16px] text-gray-300">pdf, epub</span>
                                    </div>
                                </div>
                                <button className="bg-[#C9AC8C] py-[16px] px-[32px] text-[16px]">Javonga qo’shish </button>
                            </div>
                        </div>

                    </div>
                    <ul className="flex items-center gap-x-[70px] mb-[50px]">
                        <li><a href="#">Muallif haqida</a></li>
                        <li><a href="#">Kitobdan iqtiboslar</a></li>
                        <li><a href="#">Kitobxonlar taqrizi</a></li>
                    </ul>



                    <div className="flex mb-[53px] justify-between">
                        {
                            "GG".split("").map((item) => {
                                return <CardQuote/>
                            })
                        }
                    </div>

                    <div className="flex items-center justify-between mb-[66px]">
                        <h4 className="text-[#C9AC8C] uppercase text-[25px] font-['Rotter']">Asarlari</h4>
                        <a className="text-[25px]" href="#">Barchasini ko’rish</a>
                    </div>
                    <div className="flex items-cnter gap-x-10">
                        {
                            "HELLOW!".split("").map((item) => {
                                return <CardBook />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;