import { useTranslation } from "react-i18next";
import { useReducer, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import useUser from '../../service/user/userApi';

const Security = () => {
    const { t } = useTranslation();
    const id = localStorage.getItem("my_id");

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
    useEffect(() => {
        getUser();
       
    }, [])

    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                   

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>
                            {t("updateData")}
                        </h1>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                            
                            <label htmlFor="email" className='block mb-8'>
                                <p className="mb-1">{t("email")}:</p>
                                <Input value={userData?.email} type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none'
                                 placeholder={t("email")} 
                                 />
                            </label>

                            <label htmlFor="lastname" className='block mb-8'>
                                <p className="mb-1">{t("currentPassword")}:</p>
                                <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='***********' />
                            </label>


                            <div className='flex gap-x-4 w-full mb-8'>
                                <label htmlFor="tel" className='grow'>
                                    <p className="mb-1">{t("newPassword")}:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p className="mb-1">{t("confirmPassword")}:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
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

export default Security;