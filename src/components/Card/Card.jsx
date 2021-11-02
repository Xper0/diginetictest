import React from 'react';
import "./Card.scss";

const Card = ({dataCard}) => {
    return (
        <div className="Card">
            <div className="Card-img" />
            <p className="Card__title">Наименование товара, которое не более 2 строк</p>
            <div className="Cost">
                <b className="Cost__new">XX XXX, $</b>
                <span className="Cost__old">XX XXX, $</span>
            </div>
            <button className="Card-control">Кнопка</button>
        </div>
    );
};

export default Card;