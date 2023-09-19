

import Intro from "../../components/Intro";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";
import Category from "../../components/Category/Category";
import "./style.scss"



const index = () => {

    

    return (
        <div className="mainsection">
            <Intro />
            <SearchPanel />
            <Category />
           
        </div>
    );
};

export default index;