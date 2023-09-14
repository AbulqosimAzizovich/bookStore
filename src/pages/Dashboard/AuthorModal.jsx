import { useState, useReducer } from "react";
import UploadImage from "./../../components/UI/Upload/Upload";
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Input, Select } from "antd";
import { Textarea } from "flowbite-react";
import useAuthor from "../../service/author/useAuthor";


const AuthorModal = ({ modal2, countryList, modal }) => {

    const [btnDisable, btnEnable] = useState(false);

    const onChange = (value) => {
        console.log(`selected ${value}`);
        dispatch({ type: "SET_COUNTRY_ID", payload: value })
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const setImage = (value) => {
        
        dispatch({ type: "SET_IMAGE", payload: value })
    }

    const intState = {
        f_name: "",
        l_name: "",
        b_date: "",
        d_date: "",
        country_id: "",
        bio: "",
        image: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return { ...state, f_name: action.payload };
            case "SET_LAST_NAME":
                return { ...state, l_name: action.payload };
            case "SET_B_DATE":
                return { ...state, b_date: action.payload };
            case "SET_D_DATE":
                return { ...state, d_date: action.payload };
            case "SET_COUNTRY_ID":
                return { ...state, country_id: action.payload };
            case "SET_BIO":
                return { ...state, bio: action.payload };
            case "SET_IMAGE":
                return { ...state, image: action.payload };

            case "CLEAR_AUTHOR_INPUT":
                return { ...state, f_name: " ", l_name: " ", b_date: " ", d_date: " ", country_id: " ", bio: " ", image: " "};
            default:
                return state;
        }
    }

    const [{ f_name, l_name, b_date, d_date, country_id, bio, image }, dispatch] = useReducer(reducer, intState);

    const addAuthor = () => {
        btnEnable(true)
        const newAuthor = {
            first_name: f_name,
            last_name: l_name,
            date_birth: b_date,
            date_death: d_date,
            country_id: String(country_id),
            bio: bio,
            image: image
        }

        if (
            newAuthor?.first_name?.length &&
            newAuthor?.last_name?.length &&
            newAuthor?.date_birth?.length &&
            newAuthor?.date_death?.length &&
            newAuthor?.country_id?.length &&
            newAuthor?.bio?.length) {

            useAuthor.createAuthor(newAuthor).then((res) => {
                
                toast.success("Muallif qo'shildi!", { autoClose: 1000})
                btnEnable(false);
                dispatch({ type: "CLEAR_AUTHOR_INPUT" });
               
                setTimeout(() => {
                    modal();
                }, 1000)
                
               

            }).catch((err) => {
                console.log(err);
                toast.error("Xatolik bo'ldi!", { autoClose: 1000})
            })


        } else {
            toast.warn("Hamma qatorni to'ldiring!", { autoClose: 1000})
        }

    }
    return (
        <div>
            <ToastContainer />
            <Modal
                okText="Saqlash"
                cancelText="Bekor qilish"
                title="Muallif qushish"
                open={modal2}
                onOk={() => addAuthor()}
                onCancel={() => modal()}
                width={"1000px"}
                okButtonProps={{ disabled: btnDisable }}
            >
                <div className="flex">
                    <div className="p-5 w-[400px]">
                        <UploadImage setImage={setImage} />
                    </div>
                    <div className="p-5 grow">
                        <label htmlFor="name">
                            <p>Ismi:</p>
                            <Input
                                id="name"
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Ismi"
                                value={f_name}
                                onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                            />
                        </label>
                        <label htmlFor="lastname">
                            <p>Sharifi:</p>
                            <Input
                                id="lastname"
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Sharifi"
                                value={l_name}
                                onChange={(e) => dispatch({ type: "SET_LAST_NAME", payload: e.target.value })}
                            />
                        </label>
                        <label htmlFor="birth_of">
                            <p>Tugulgan sanasi:</p>
                            <Input
                                id="birth_of"
                                type="date"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Tugulgan sanasi"
                                value={b_date}
                                onChange={(e) => dispatch({ type: "SET_B_DATE", payload: e.target.value })}
                            />
                        </label>
                        <label htmlFor="death_of">
                            <p>Vafot etgan sanasi:</p>
                            <Input
                                id="death_of"
                                type="date"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Vafot etgan sanasi"
                                value={d_date}
                                onChange={(e) => dispatch({ type: "SET_D_DATE", payload: e.target.value })}
                            />
                        </label>
                        <label htmlFor="country">
                            <p>Davlati</p>
                            <Select
                                value={country_id}
                                className="w-full my-8"
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                options={countryList?.map((item) => {
                                    return {
                                        label: item.name,
                                        value: item.id,
                                    };
                                })}
                            />
                        </label>

                        <Textarea  value={bio} onChange={(e) => dispatch({ type: "SET_BIO", payload: e.target.value })} id="comment" placeholder="BIO" required rows={4} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AuthorModal;