

import { useReducer, useEffect } from "react";
import CardBook from "../../components/UI/Card/Book/CardBook";

const index = () => {

    const initState = {
        bookList: [],
        loading: false,
        errorMessage: ""
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_BOOK":
                return { ...state, bookList: action.data };
            case "STOP_LOADER":
                return { ...state, loading: true };
            case "SET_ERROR_MESSAGE":
                return { ...state, errorMessage: action.message };
            default:
                return state;    
        }
    }

    const [{bookList, errorMessage, loading}, dispatch] = useReducer(reducer, initState);


    if(!loading){
        return <h1>loading . . .</h1>
    }

    useEffect(() => {
        dispatch({type: "STOP_LOADER"});
    }, [])
    return (
        <section className="py-[50px]">
            <div className="container">
                <div className="grid grid-cols-7 gap-x-[35px] gap-y-[52px]">
                    {
                        "HELLOWORLD!HEY".split("").map((item, index) => {
                            return <CardBook key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default index;