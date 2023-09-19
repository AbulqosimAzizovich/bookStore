
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';

import img from "../../assets/images/signin.png";

import useAuth from "../../service/auth/useAuth";
import { ToastContainer, toast } from 'react-toastify';
const SignIn = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
       
        const user = {email: values.username, password: values.password};

        useAuth.login(user).then((res) => {
           
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("user", res?.data?.user?.first_name);
            localStorage.setItem("my_id", res.data?.user?.id);
            if(res.status === 201 && localStorage.getItem("token")){

                toast.success("Tizimga kirdiniz!", {autoClose: 1000})
                setTimeout(() => {
                    navigate("/");
                }, 1000)
                
            }
            
        }).catch((err) => {
            console.log(err.message);
            toast.error("Error!");
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='grid grid-cols-2 items-center w-full h-screen mx-auto gap-x-[81px]'>
            <div className='item bg-[#C9AC8C] h-full flex items-center justify-end me-4'>
                <img src={img} alt="" />
            </div>
            <div className='item'>
                <ToastContainer/>
                <h2 className="text-[36px] text-[#1A1919] font-['ArialBlack']">Login</h2>
                <h3 className='my-4 text-sm'>
                    Siz ro'yhatdan otmaganmisizmi? <Link to="/signup" className="font-bold text-indigo-600">Ro'yhatdan o'tish</Link>
                </h3>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item

                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos loginni kiriting!',
                            },
                        ]}
                    >
                        <Input className='rounded-lg outline-none py-2' placeholder="Login" />
                    </Form.Item>

                    <Form.Item

                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Iltimos parolni kiriting!',
                            },
                        ]}
                    >
                        <Input.Password className='py-2 outline-none mt-4' placeholder="Parol" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Button className=' bg-slate-700 text-white rounded-2xl w-full mt-4' htmlType="submit">
                            Kirish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

};
export default SignIn;