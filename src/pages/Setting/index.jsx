
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "./style.scss";
import SettingHeader from "./SettingHeader";
import { Button } from "antd";


const index = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => {
        navigate("/settings/my-account")
    }, [])
    
    return (
        <div>
            <SettingHeader/>
            <Outlet />

            <div className="container">
                <Link to="/">
                    <Button className="mt-12 mb-5">
                        {t("home")}
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default index;