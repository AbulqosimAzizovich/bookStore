
import { Form, Input, Button } from 'antd';
import UploadImage from "../../components/UI/Upload/Upload";


const Security = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                   

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>Ma'lumotlarni yangilash</h1>

                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                            
                            <label htmlFor="email" className='block mb-8'>
                                <p>Email</p>
                                <Input type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='Email' />
                            </label>

                            <label htmlFor="lastname" className='block mb-8'>
                                <p>Hozirgi parol:</p>
                                <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='***********' />
                            </label>


                            <div className='flex gap-x-4 w-full mb-8'>
                                <label htmlFor="tel" className='grow'>
                                    <p>Yangi parol:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p>Parolni tastiqlash:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
                                </label>

                            </div>

                            <Button className='bg-slate-500 text-white' htmlType="submit">
                                Saqlash
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;