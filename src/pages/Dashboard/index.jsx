import React, { useState, useReducer, useEffect } from "react";
import { Modal, Input, Avatar } from "antd";
import { Button, Tabs, Table } from "flowbite-react";

import { Link } from "react-router-dom";
import useCountry from "../../service/country/useCountry";
import useAuthor from "../../service/author/useAuthor";
import useCategory from "../../service/category/useCategory";
import useBook from "../../service/book/useBook";
import { ToastContainer, toast } from 'react-toastify';
import "./style.scss";
import AuthorModal from "./AuthorModal";
import BookModal from "./BookModal";
import CategoryModal from "./CategoryModal";
import { useTranslation } from "react-i18next";

const index = () => {
    const { t } = useTranslation();


    const initState = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        countryName: "",
        countryIcon: "",
        countryList: [],
        countryLoad: false,
        authorList: [],
        authorLoad: false,
        categoryList: [],
        categoryLoad: false,
        bookList: [],
        bookLoad: false,
    }

    const [btnDisable, btnEnable] = useState(false);

    const reducer = (state, action) => {
        switch (action.type) {
            case "MODAL1":
                return { ...state, modal1: !state.modal1 };
            case "MODAL2":
                return { ...state, modal2: !state.modal2 };
            case "MODAL3":
                return { ...state, modal3: !state.modal3 };
            case "MODAL4":
                return { ...state, modal4: !state.modal4 };
            case "SETCOUNTRY_NAME":
                return { ...state, countryName: action.payload };
            case "SETCOUNTRY_ICON":
                return { ...state, countryIcon: action.payload };
            case "SET_COUNTRY":
                return { ...state, countryList: action.payload };
            case "SET_COUNTRY_LOAD":
                return { ...state, countryLoad: true };
            case "CLEAR_COUNTRY_INPUT":
                return { ...state, countryName: " ", countryIcon: " " };

            case "SET_AUTHOR":
                return { ...state, authorList: action.payload };
            case "SET_AUTHOR_LOAD":
                return { ...state, countryLoad: true };

            case "SET_CATEGORY":
                return { ...state, categoryList: action.payload };
            case "SET_CATEGORY_LOAD":
                return { ...state, categoryLoad: true };

            case "SET_BOOK":
                return { ...state, bookList: action.payload };
            case "SET_BOOK_LOAD":
                return { ...state, bookLoad: true };
            default:
                return state;
        }
    }

    const [{ modal1, modal2, modal3, modal4, countryName, countryIcon, countryList, countryLoad, authorList, authorLoad, categoryList, categoryLoad, bookList, bookLoad }, dispatch] = useReducer(reducer, initState);

    const addNewCountry = () => {
        btnEnable(true);

        const newCountry = {
            name: countryName,
            icon: countryIcon
        }

        if (newCountry.name.trim().length === 0 || newCountry.icon.trim().length === 0) {
            toast.warn("Maydonlarni to'ldiring!");
        } else {
            useCountry.createCountry(newCountry).then((res) => {

                if (res.status === 201) {
                    getCountry();
                    toast.success("Davlat qo'shildi!");
                    dispatch({ type: "MODAL1" });
                    dispatch({ type: "CLEAR_COUNTRY_INPUT" });
                    btnEnable(false);
                }
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    const getCountry = () => {
        useCountry.getCountry().then((res) => {
            dispatch({ type: "SET_COUNTRY", payload: res.data })
            dispatch({ type: "SET_COUNTRY_LOAD" })
        })
    }

    const deleteCountry = (id) => {
        useCountry.deleteCountry(id).then((res) => {
            getCountry()
            toast.success("Davlat o'chirildi!", { autoClose: 1000 })
        })
    }

    const SHOW_MODAL_2 = () => {
        dispatch({ type: "MODAL2" });
        getAuthor();
    }

    const SHOW_MODAL_3 = () => {
        dispatch({ type: "MODAL3" });
        getBook();
    }

    const SHOW_MODAL_4 = () => {
        dispatch({ type: "MODAL4" });
        getCategory();
    }


    const getAuthor = () => {
        useAuthor.getAuthor().then((res) => {

            dispatch({ type: "SET_AUTHOR", payload: res.data })
            dispatch({ type: "SET_AUTHOR_LOAD" })
        })
    }

    const deleteAuthor = (id) => {
        useAuthor.deleteAuthor(id).then((res) => {
            getAuthor()
            toast.success("Mualif o'chirildi!", { autoClose: 1000 })
        })
    }

    const getCategory = () => {
        useCategory.getCategory().then((res) => {

            dispatch({ type: "SET_CATEGORY", payload: res.data })
            dispatch({ type: "SET_CATEGORY_LOAD" })
        })
    }

    const deleteCategory = (id) => {
        useCategory.deleteCategory(id).then((res) => {
            getCategory()
            toast.success("Kategoriya o'chirildi!", { autoClose: 1000 })
        })
    }

    const getBook = () => {
        useBook.getBook().then((res) => {
            dispatch({ type: "SET_BOOK", payload: res.data })
            dispatch({ type: "SET_BOOK_LOAD" })
        })
    }

    const deleteBook = (id) => {
        useBook.deleteBook(id).then((res) => {
            getBook()
            toast.success("Kitob o'chirildi!", { autoClose: 1000 })
        })
    }

    useEffect(() => {
        getCountry()
        getAuthor()
        getCategory()
        getBook()
    }, [])


    return (
        <section>
            <div className="container">
                <ToastContainer />

                <AuthorModal  modal2={modal2} countryList={countryList} modal={SHOW_MODAL_2} />

                <BookModal  countryList={countryList} categoryList={categoryList} authorList={authorList} modal3={modal3} modal={SHOW_MODAL_3} />

                <CategoryModal  modal4={modal4} modal={SHOW_MODAL_4} />

                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    // title={t?.addCountry}
                    title="Davlat qo'shish"
                    open={modal1}
                    onOk={() => addNewCountry()}
                    onCancel={() => dispatch({ type: "MODAL1" })}
                    width={"1000px"}
                    okButtonProps={{ disabled: btnDisable }}
                >
                    <div className="flex">

                        <div className="p-5 grow">
                            <label htmlFor="name">
                                <p>Davlat nomi:</p>
                                <Input
                                    id="name"
                                    type="text"
                                    className=" rounded-lg py-3 mb-3"
                                    placeholder="Davlat nomini yozing"
                                    value={countryName}
                                    onChange={(e) => dispatch({ type: "SETCOUNTRY_NAME", payload: e.target.value })}
                                />
                            </label>
                            <label htmlFor="lastname">
                                <p>Icon:</p>
                                <Input
                                    id="lastname"
                                    type="text"
                                    className=" rounded-lg py-3 mb-3"
                                    placeholder="Bayroq linki: "
                                    value={countryIcon}
                                    onChange={(e) => dispatch({ type: "SETCOUNTRY_ICON", payload: e.target.value })}
                                />
                            </label>
                        </div>
                    </div>
                </Modal>


                <div className="flex justify-between py-8 border-b-2">
                    <div className="text-xl font-sans flex items-center gap-x-4 ">
                        <Link to="/">
                            <Button gradientDuoTone="purpleToBlue">{t("home")}</Button>
                        </Link>
                        <span> {t("totalBase")}</span>
                    </div>
                    <div className="flex gap-x-2 font-mono">
                        <Button gradientMonochrome="info" onClick={() => dispatch({ type: "MODAL1" })}>
                            {t("addCountry")}
                        </Button>
                        <Button gradientMonochrome="purple" onClick={() => dispatch({ type: "MODAL2" })}>
                            {t("addAuthor")}
                        </Button>
                        <Button gradientMonochrome="success" onClick={() => dispatch({ type: "MODAL4" })}>
                            {t("addCategory")}
                        </Button>
                        <Button gradientMonochrome="success" onClick={() => dispatch({ type: "MODAL3" })}>
                            {t("addBook")}
                        </Button>

                    </div>
                </div>

                <div className="mt-4 font-mono">
                    <Tabs.Group aria-label="Default tabs" style="default">
                        <Tabs.Item title={t("countries")}>
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Nomi</Table.HeadCell>
                                    <Table.HeadCell>Belgisi</Table.HeadCell>
                                    <Table.HeadCell>O'chirish</Table.HeadCell>
                                    <Table.HeadCell>Tahrirlash</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">

                                    {
                                        countryList.length ? countryList.map((item) => {
                                            return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {item?.name}
                                                </Table.Cell>
                                                <Table.Cell>{item?.icon}</Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={() => deleteCountry(item?.id)} gradientMonochrome="failure">O'chirish </Button>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        Tahrirlash
                                                    </p>
                                                </Table.Cell>

                                            </Table.Row>
                                        }) : <Table.Row>
                                            <Table.Cell>
                                                <h1 className="text-2xl text-bold">Ma'lumot topilmadi</h1>
                                            </Table.Cell>
                                        </Table.Row>
                                    }

                                </Table.Body>
                            </Table>
                        </Tabs.Item>
                        <Tabs.Item title={t("authors")}>
                            <Table hoverable>
                                <Table.Head>

                                    <Table.HeadCell>Muallif</Table.HeadCell>
                                    <Table.HeadCell>Tuguligan sanasi</Table.HeadCell>
                                    <Table.HeadCell>Vafot etgan sanasi</Table.HeadCell>
                                    <Table.HeadCell>Davlat</Table.HeadCell>
                                    <Table.HeadCell>BIO</Table.HeadCell>
                                    <Table.HeadCell>O'chirish</Table.HeadCell>
                                    <Table.HeadCell>Ma'lumot</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {
                                        authorList.length ? authorList?.map((item) => {
                                            return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    <Avatar src={`https://literature-18wr.onrender.com/api/image/${item.image}`} size="large" />
                                                    <span className="ms-3">{item?.first_name} {item?.last_name}</span>
                                                </Table.Cell>
                                                <Table.Cell>{item?.date_birth}</Table.Cell>
                                                <Table.Cell>{item?.date_death}</Table.Cell>
                                                <Table.Cell>{item?.country?.name}</Table.Cell>
                                                <Table.Cell>{item?.bio}</Table.Cell>

                                                <Table.Cell>
                                                    <Button onClick={() => deleteAuthor(item?.id)} gradientMonochrome="failure">O'chirish </Button>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <p className="font-medium text-cyan-600 hover:text-cyan-300 dark:text-cyan-500 cursor-pointer">Batafsil</p>
                                                </Table.Cell>
                                            </Table.Row>
                                        }) : <Table.Row>
                                            <Table.Cell>
                                                <h1 className="text-2xl text-bold">Ma'lumot topilmadi</h1>
                                            </Table.Cell>

                                        </Table.Row>

                                    }



                                </Table.Body>
                            </Table>
                        </Tabs.Item>

                        <Tabs.Item title={t("categories")}>
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Nomi</Table.HeadCell>
                                    <Table.HeadCell>O'chirish</Table.HeadCell>
                                    <Table.HeadCell>Tahrirlash</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {
                                        categoryList.length ? categoryList.map((item) => {
                                            return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {item?.name}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={() => deleteCategory(item?.id)} gradientMonochrome="failure">O'chirish </Button>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Tahrirlash</p>
                                                </Table.Cell>
                                            </Table.Row>
                                        }) : <Table.Row>
                                            <Table.Cell>
                                                <h1 className="text-2xl text-bold">Ma'lumot topilmadi</h1>
                                            </Table.Cell>

                                        </Table.Row>
                                    }
                                </Table.Body>
                            </Table>
                        </Tabs.Item>

                        <Tabs.Item title={t("books")}>
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Nomi</Table.HeadCell>
                                    <Table.HeadCell>Muallifi</Table.HeadCell>
                                    <Table.HeadCell>Janr</Table.HeadCell>
                                    <Table.HeadCell>Narhi</Table.HeadCell>
                                    <Table.HeadCell>Sahifalar</Table.HeadCell>
                                    <Table.HeadCell>O'chirish</Table.HeadCell>
                                    <Table.HeadCell>Tahrirlash</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">

                                    {
                                        bookList.length ? bookList.map((item) => {
                                            return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    <Avatar src={`https://literature-18wr.onrender.com/api/image/${item?.book_cover}`} shape="square" size="large" />
                                                    <span className="ms-2">{item?.title}</span>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Avatar src={`https://literature-18wr.onrender.com/api/image/${item?.author?.image}`} size="large" />
                                                    <span className="ms-2">{item?.author?.first_name} {item?.author?.last_name}</span>
                                                </Table.Cell>
                                                <Table.Cell>{item?.category?.name}</Table.Cell>
                                                <Table.Cell>{item?.price} so'm</Table.Cell>
                                                <Table.Cell>{item?.pages}</Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={() => deleteBook(item?.id)} gradientMonochrome="failure">O'chirish </Button>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Tahrirlash</p>
                                                </Table.Cell>
                                            </Table.Row>
                                        }) : <Table.Row>
                                            <Table.Cell>
                                                <h1 className="text-2xl text-bold">Ma'lumot topilmadi</h1>
                                            </Table.Cell>
                                        </Table.Row>
                                    }

                                </Table.Body>
                            </Table>
                        </Tabs.Item>

                    </Tabs.Group>
                </div>
            </div>
        </section>
    );
};

export default index;
