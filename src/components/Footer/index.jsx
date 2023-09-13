
import "./style.scss";

const index = () => {
    return (
        <footer className="py-5 bg-slate-600">
            <div className="container">
                <div className="text-center text-white text-[18px]">
                    2023 - {new Date().getFullYear()} &copy;
                </div>
            </div>
        </footer>
    );
};

export default index;