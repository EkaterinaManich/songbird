import React from "react";

import "./ListOfQuestions.scss";

export default function ListOfQuestions(props) {
    return (
        <ul className="ListOfQuestions row pagination">
            {props.data.map((item, index) => {
                return <li className={`col-${12 / props.data.length} page-item`}><span className="page-link">{index}</span></li>
            })}
        </ul>
    );
}
