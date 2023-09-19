import { useTranslation } from "react-i18next";
import  {NavLink} from "react-router-dom";
import "./style.scss";
const SettingHeader = () => {
    const { t } = useTranslation();
    return (
        <header className="bg-[#E5E5E5]">
            <div className="container">

                <ul className="flex">
                    <li className="w-1/4 mx-1">
                        <NavLink to="/settings/my-account" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">
                            {t("profile")}
                        </NavLink>
                    </li>
                    <li className="w-1/4 mx-1">
                        <NavLink to="/settings/security" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">
                            {t("security")}
                        </NavLink>
                    </li>
                    <li className="w-1/4 mx-1">
                        <NavLink to="/settings/setting" className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]">
                            {t("settings")}
                        </NavLink>
                    </li>
                </ul>

            </div>
        </header>
    );
};

export default SettingHeader;