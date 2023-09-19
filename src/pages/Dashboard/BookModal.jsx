
import { useReducer, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Input } from "antd";
import { Textarea } from "flowbite-react";
import useBook from "../../service/book/useBook";
import useFile from '../../service/fileUpload/useFile';
const BookModal = ({ modal3, modal, categoryList, countryList, authorList }) => {

    const [btnDisable, btnEnable] = useState(false);

    const initState = {
        title: "",
        pages: "",
        year: "",
        price: "",
        country_id: "",
        author_id: "",
        category_id: "",
        description: "",
        book_cover: ""
    };

    const reducer = (state, action) => {
        switch (action.type.trim()) {
            case "SET_TITLE":
                return { ...state, title: action.title };
            case "SET_PAGES":
                return { ...state, pages: action.pages };
            case "SET_YEAR":
                return { ...state, year: action.year };
            case "SET_PRICE":
                return { ...state, price: action.price };
            case "SET_COUNTRY":
                return { ...state, country_id: action.country_id };
            case "SET_AUTHOR":
                return { ...state, author_id: action.author_id };
            case "SET_CATEGORY":
                return { ...state, category_id: action.category_id };
            case "SET_DESCRIPTION":
                return { ...state, description: action.description };
            case "SET_BOOK_COVER":
                return { ...state, book_cover: action.book_cover };

            case "CLEAR_BOOK_INPUT":
                return { ...state, title: " ", pages: " ", year: " ", price: " ", country_id: " ", author_id: " ", category_id: " ", description: " ", book_cover: " " };
            default:
                return state;
        }
    }

    const [{ title, pages, year, price, country_id, author_id, category_id, description, book_cover }, dispatch] = useReducer(reducer, initState);



    const addBook = () => {
        btnEnable(true)
        const newBook = {
            title,
            pages,
            year,
            price,
            country_id,
            author_id,
            category_id,
            description,
            book_cover
        }

        if (
            newBook?.title?.length &&
            newBook?.pages?.length &&
            newBook?.year?.length &&
            newBook?.price?.length &&
            newBook?.country_id?.length &&
            newBook?.author_id?.length &&
            newBook?.category_id?.length &&
            newBook?.description?.length
        ) {
            newBook.country_id = Number(newBook.country_id);
            newBook.category_id = Number(newBook.category_id);
            newBook.author_id = Number(newBook.author_id);

            useBook.createBook(newBook).then((res) => {

                toast.success("Kitob qo'shildi!", { autoClose: 1000 })
                btnEnable(false);
                dispatch({ type: "CLEAR_BOOK_INPUT" });

                setTimeout(() => {
                    modal();
                }, 1000)
            }).catch((err) => {

                toast.error("Error!", { autoClose: 1000 })
            })
        } else {
            toast.warn("Hamma qatorni to'ldiring!", { autoClose: 1000 })
        }
    }


    const upload = (file) => {
        const image = new FormData();
        image.append("image", file);

        useFile.uploadFile(image).then((res) => {
            dispatch({ type: "SET_BOOK_COVER", book_cover: res.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <ToastContainer />
            <Modal
                okText="Saqlash"
                cancelText="Bekor qilish"
                // title={t?.addBook}
                title="Kitob qo'shish"
                open={modal3}
                onOk={() => addBook()}
                onCancel={() => modal()}
                width={"1000px"}
                okButtonProps={{ disabled: btnDisable }}
            >
                <div className="flex">
                    <div className="p-5 w-[400px]">
                        <input type="file" accept='jpg/png' onChange={(e) => upload(e.target.files[0])} />
                    </div>
                    <div className="p-5 grow">
                        <Input
                            type="text"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Kitob nomi"
                            value={title}
                            onChange={(e) => dispatch({ type: "SET_TITLE", title: e.target.value })}
                        />
                        <Input
                            type="number"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Sahifalar soni"
                            // value={pages}
                            onChange={(e) => dispatch({ type: "SET_PAGES", pages: e.target.value })}
                        />
                        <Input
                            type="date"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Yili"
                            value={year}
                            onChange={(e) => dispatch({ type: "SET_YEAR", year: e.target.value })}
                        />
                        <Input
                            type="number"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Kitob narxi"
                            value={price}
                            onChange={(e) => dispatch({ type: "SET_PRICE", price: e.target.value })}
                        />
                        <select onChange={(e) => dispatch({ type: "SET_COUNTRY", country_id: e.target.value })} className="w-full py-3 block mb-3" id="countries" required defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">
                                Kitob davlatini tanglang
                            </option>
                            {
                                countryList.length ? countryList.map((item) => {
                                    return <option key={item.id} value={item.id}>{item?.name}</option>
                                }) : <option value="0">Ma'lumot topilmadi!</option>
                            }

                        </select>
                        <select onChange={(e) => dispatch({ type: "SET_CATEGORY", category_id: e.target.value })} className="w-full py-3 block mb-3" id="categories" required defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">
                                Kitob kategoriyasini tanglang
                            </option>
                            {
                                categoryList.length ? categoryList.map((item) => {
                                    return <option key={item.id} value={item.id}>{item?.name}</option>
                                }) : <option value="0">Ma'lumot topilmadi!</option>
                            }
                        </select>
                        <select onChange={(e) => dispatch({ type: "SET_AUTHOR", author_id: e.target.value })} className="w-full py-3 block mb-3" id="author" required defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">
                                Kitob muallifini tanglang
                            </option>
                            {
                                authorList.length ? authorList.map((item) => {
                                    return <option key={item.id} value={item.id}>{item?.first_name} {item?.last_name}</option>
                                }) : <option value="0">Ma'lumot topilmadi!</option>
                            }

                        </select>

                        <Textarea
                            id="comment"
                            placeholder="Tasnifini yozing"
                            required
                            rows={4}
                            onChange={(e) => dispatch({ type: "SET_DESCRIPTION", description: e.target.value })}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default BookModal;