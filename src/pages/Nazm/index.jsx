


import CardBook from "../../components/UI/Card/Book/CardBook";

const index = () => {
    return (
        <section className="py-[50px]">
            <div className="container">
                <div className="grid grid-cols-7 gap-x-[35px] gap-y-[52px]">
                        {
                            "HELLOWORLD!HEY".split("").map((item, index) => {
                                return <CardBook key={index}/>
                            })
                        }
                </div>
            </div>
        </section>
    );
};

export default index;