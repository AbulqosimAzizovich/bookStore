
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Select, Button } from "flowbite-react";
import { Switch } from "antd";

const Setting = () => {

    const { t } = useTranslation();

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const changeLang = (lang) => {
      i18next.changeLanguage(lang.toLowerCase());
    }
  
  
    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <h1 className='text-2xl my-8'>
                        {t("settings")}
                        
                    </h1>

                    <Select
                        id="countries"
                        required
                        className="py-4 w-[250px]"
                        onChange={(e) => changeLang(e.target.value)}
                    >
                        <option> UZ </option>
                        <option> EN </option>
                        <option> RU </option>
                    </Select>
                    <div className="py-3">
                        <p className="my-2">{t("theme")}:</p>
                       
                        <Switch defaultChecked onChange={onChange} />;
                    </div>

                    <div className="flex justify-end">
                        <Button className='bg-slate-500 text-white' htmlType="submit">
                           {t("save")}
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Setting;