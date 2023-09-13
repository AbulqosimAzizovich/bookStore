
import UploadImage from "./../../components/UI/Upload/Upload";
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Input, Select } from "antd";
import { Textarea } from "flowbite-react";


const BookModal = ({modal3, modal}) => {
    return (
        <div>
            <ToastContainer />
            <Modal
                okText="Saqlash"
                cancelText="Bekor qilish"
                title="Kitob qushish"
                open={modal3}
                onOk={() => modal()}
                onCancel={() => modal()}
                width={"1000px"}
            >
                <div className="flex">
                    <div className="p-5 w-[400px]">
                        <UploadImage />
                    </div>
                    <div className="p-5 grow">
                        <Input
                            type="text"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Kitob nomi"
                        />
                        <Input
                            type="number"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Sahifalar soni"
                        />
                        <Input
                            type="date"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Yili"
                        />
                        <Input
                            type="number"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Kitob narhi"
                        />
                        <Input
                            type="text"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Davlati"
                        />
                        <Select className="py-3  mb-3 " id="countries" required defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">
                                Kitob muallifini tanglang
                            </option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>

                        <Textarea
                            id="comment"
                            placeholder="Tasnifini yozing"
                            required
                            rows={4}
                        />
                    </div>
                </div>
            </Modal> 
        </div>
    );
};

export default BookModal;