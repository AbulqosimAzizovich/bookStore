import { useEffect, useReducer } from "react";
import CardAuthor from "../UI/Card/Author/CardAuthor";
import useCategory from "../../service/category/useCategory";
import { useTranslation } from "react-i18next";

const Category = () => {
    const { t } = useTranslation();
    const initState = {
        categoryList: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_CATEGORY":
                return { ...state, categoryList: action.payload };
            default:
                return state;
        }
    }

    const [{ categoryList }, dispatch] = useReducer(reducer, initState);

    const getCategory = async () => {
        try {
            const res = await useCategory.getCategory();
       
            if (res.status === 200) {
                dispatch({ type: "SET_CATEGORY", payload: res.data })
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCategory();
    }, [])

    return (
        <section className='py-[50px]'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='text-[#C9AC8C] text-center uppercase text-[31px] font-["Rotter"] mb-5'>{t("mainCategories")}</h2>
                    <nav className='mb-10'>
                        <ul className='flex items-center justify-center gap-x-[49px] text-[20px] text-gray-400'>

                            {
                                categoryList.length ? categoryList.map((item) => {
                                    return <li key={item.id} className='p-[10px] cursor-pointer p-1 rounded-md hover:bg-orange-100 hover:text-black'>
                                              {item?.name} 
                                            </li>
                                }): null
                            }
                         
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center flex-wrap gap-x-[37.22px] gap-y-[43.85px]">
                        {
                            "HELLOWORLD!".split("").map((item, index) => {
                                return <CardAuthor key={index} />
                            })
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Category;