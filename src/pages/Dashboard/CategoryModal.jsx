

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Input} from "antd";
import useCategory from "../../service/category/useCategory";


const CategoryModal = ({ modal4, modal }) => {
    const [btnDisable, btnEnable] = useState(false);
    const [name, setName] = useState("")

    const addCategory = () => {
        btnEnable(true)
        const object = {
            name: name
        }
       
        useCategory.createCategory(object).then((res) => {
            
            toast.success("Kategoriya qo'shildi!", { autoClose: 500})
            btnEnable(false);
            
            setTimeout(() => {
                modal();
            }, 500)
            setName("");
        }).catch((err) => {
            console.log(err);
            toast.error("Xatolik!", { autoClose: 1000})
        })
    }
    return (
        <div>
            <ToastContainer />
            <Modal
                okText="Saqlash"
                cancelText="Bekor qilish"
                title="Kategoriya qushish"
                open={modal4}
                onOk={() => addCategory()}
                onCancel={() => modal()}
                width={"1000px"}
                okButtonProps={{ disabled: btnDisable }}
            >
                <div className="flex">
                    
                    <div className="p-5 grow">
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className=" rounded-lg py-3 mb-3"
                            placeholder="Kategoriya nomi"
                        />
                        
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CategoryModal;

