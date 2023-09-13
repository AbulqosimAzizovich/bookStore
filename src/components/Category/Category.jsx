
import CardAuthor from "../UI/Card/Author/CardAuthor";
import CardBook from "../UI/Card/Book/CardBook";

const Category = () => {
    return (
        <section className='py-[50px]'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='text-[#C9AC8C] text-center uppercase text-[31px] font-["Rotter"] mb-5'>Asosiy kategoriyalar</h2>
                    <nav className='mb-10'>
                        <ul className='flex items-center justify-center gap-x-[49px] text-[20px] text-gray-400'>
                            <li className='p-[10px]'>
                                <a href="#">Temuriylar davri </a>
                            </li>
                            <li className='p-[10px]'>
                                <a href="#">Jadid adabiyoti  </a>
                            </li>
                            <li className='p-[10px]'>
                                <a href="#">Sovet davri  </a>
                            </li>
                            <li className='p-[10px]'>
                                <a href="#">Mustaqillik davri </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center flex-wrap gap-x-[37.22px] gap-y-[43.85px]">
                        {
                            "HELLOWORLD!".split("").map((item) => {
                                return <CardAuthor/>
                            })
                        }
                        
                    </div>

                    {/* <div className="grid grid-cols-7 gap-x-[35px] gap-y-[52px]">
                        {
                            "HELLOWORLD!HEY".split("").map((item) => {
                                return <CardBook/>
                            })
                        }
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Category;