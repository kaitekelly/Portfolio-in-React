import React, { useContext } from "react";
import userContext from "../../utils/userContext";
import "./style.css";

function CardBtn(props) {
    const { handleBtnClick } = useContext(UserContext);
    return(
        <button onClick={handleBtnClick} className={`card-btn ${props["data-value"]}`} {...props} /> 
    );
}

export default CardBtn;