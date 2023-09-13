


import { TextInput, Button } from "flowbite-react";

const SearchPanel = () => {
    return (
        <section>
            <div className='w-[80%] rounded-[15px] bg-white py-[47px] px-[144px] border mx-auto -mt-12 relative z-40'>
                <h2 className='text-center text-[#C9AC8C] text-[31px] font-["Rotter"] mb-[13px] text-[#C9AC8C]'>Qidirish</h2>
                <div className="flex gap-x-[14px]">
                    <TextInput className="grow" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                    <Button className="bg-[#C9AC8C] text-white flex items-center justify-center">
                        <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="ms-[5px]">Izlash</span>

                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SearchPanel;