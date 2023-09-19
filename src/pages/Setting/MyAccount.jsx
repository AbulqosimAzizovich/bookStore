import { useEffect, useReducer } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import useUser from '../../service/user/userApi';
import { useTranslation } from "react-i18next";

const MyAccount = () => {
    const id = localStorage.getItem("my_id");
    const { t } = useTranslation();
  
    const onFinish = (value) => {
        console.log(value);
    };

    const initState = {
        userData: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_USER":
                return { ...state, userData: action.payload };
            default:
                return state;
        }
    }

    const [{ userData }, dispatch] = useReducer(reducer, initState);

    const getUser = async () => {
        try {
            const response = await useUser.getUserItem(id)
            if (response.status === 200) {
                dispatch({ type: "SET_USER", payload: response.data })
            }

        } catch (err) {
            console.log(err)
        }

    }

    const upload = (value) => {
        console.log(value)
    }

    
    useEffect(() => {
        getUser();
       
    }, [])
   
    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                    <div className='avatar w-[400px] p-4'>
                        <Avatar shape='square' size="large" className='mb-5 h-[200px] w-[200px]'></Avatar>
                        <input type="file" accept='jpg/png' onChange={(e) => upload(e.target.files[0])} />
                    </div>

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>{t("myAccountTitle")}</h1>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>

                            <label htmlFor="name">
                                <p>{t("name")}</p>
                                <Input value={userData?.first_name} className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' 
                                placeholder={t("name")} 
                                />
                            </label>

                            <label htmlFor="lastname">
                                <p>{t("surname")}</p>
                                <Input value={userData?.last_name} className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' 
                                placeholder={t("surname")}
                                 />
                            </label>


                            <div className='flex gap-x-4 w-full'>
                                <label htmlFor="tel" className='grow'>
                                    <p>{t("tel")}:</p>
                                    <Input value={userData?.phone} type="tel" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none'
                                     placeholder={t("tel")}
                                      />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p>{t("email")}:</p>
                                    <Input value={userData?.email} type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' 
                                    placeholder={t("email")} 
                                    />
                                </label>

                            </div>

                            <Button className='bg-slate-500 text-white' htmlType="submit">
                                {t("save")}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;