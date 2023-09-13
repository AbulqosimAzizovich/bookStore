
import { Form, Input, Button } from 'antd';
import UploadImage from "../../components/UI/Upload/Upload";


const MyAccount = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                    <div className='avatar w-[400px] p-4'>
                        <UploadImage />
                    </div>

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>Mening sahifam</h1>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>

                            <label htmlFor="name">
                                <p>Ism</p>
                                <Input className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='Ism' />
                            </label>

                            <label htmlFor="lastname">
                                <p>Sharif</p>
                                <Input className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='Sharif' />
                            </label>
                            

                            <div className='flex gap-x-4 w-full'>
                                <label htmlFor="tel" className='grow'>
                                    <p>Tel:</p>
                                    <Input type="tel" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='Tel:' />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p>Email:</p>
                                    <Input type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='Email:' />
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

export default MyAccount;