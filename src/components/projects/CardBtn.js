import React from "react";
// import userContext from "../../utils/userContext";
import "../index.css";

function CardBtn(props) {
    // const { handleBtnClick } = useContext(UserContext);
    return(
        <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
        );
}

export default CardBtn;