


import { Select, Button } from "flowbite-react";
import { Switch } from "antd";
const Setting = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <h1 className='text-2xl my-8'>Sozlanmalar</h1>

                    <Select
                        id="countries"
                        required
                        className="py-4"
                    >
                        <option>
                            Uzb
                        </option>
                        <option>
                            Eng
                        </option>
                        <option>
                            Rus
                        </option>
                        <option>
                            Kar
                        </option>
                    </Select>
                    <div className="py-3">
                        <p className="my-2">Mavzu:</p>
                        <Switch defaultChecked onChange={onChange} />;
                    </div>

                    <div className="flex justify-end">
                        <Button className='bg-slate-500 text-white' htmlType="submit">
                            Saqlash
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Setting;