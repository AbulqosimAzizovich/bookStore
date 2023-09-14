import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';




const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


const UploadImage = ({setImage}) => {

    // const [previewOpen, setPreviewOpen] = useState(false);
    // const [previewImage, setPreviewImage] = useState('');
    // const [previewTitle, setPreviewTitle] = useState('');
    // const [fileList, setFileList] = useState([]);

    // const handleCancel = () => setPreviewOpen(false);
    // const handlePreview = async (file) => {
    //     if (!file.url && !file.preview) {
    //         file.preview = await getBase64(file.originFileObj);
    //     }
    //     setPreviewImage(file.url || file.preview);
    //     setPreviewOpen(true);
    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    // };


    // const handleChange = async({ fileList: newFileList }) => {
    //     setFileList(newFileList);
        
    //     let fileLists = await fileList[0];

    //     if(fileLists.percent){
    //         if(fileLists.status == "uploading"){
    //             setImage(fileLists.originFileObj);
    //         }
           
    //     }
    // }


    // const uploadButton = (
    //     <div>
    //         <PlusOutlined />
    //         <div
    //             style={{
    //                 marginTop: 8,
    //             }}
    //         >
    //             Upload
    //         </div>
    //     </div>
    // );

    const uploadImage = (file) => {
        setImage(file)
    }

    return (
        <>
            <input type="file" accept='jpg/png' onChange={(e) => uploadImage(e.target.files[0])} />

            {/* <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal> */}


        </>
    );
};
export default UploadImage;