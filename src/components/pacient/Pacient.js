import React from "react";
import styles from "./pacient.css"
export default function Pacient() {
    return (
        <div className="pola p-3 mb-1 bg-secondary">
            <button>Назад</button>
            <div className="">
                <div className="familia poiska in">Фамилия</div>
                <input type={Text} className="poiskai in"></input>
                <div className="name poiska">Имя</div>
                <input type={Text} className="poiskai in"></input>
                <div className="otchestvo poiska in">Отчество</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div className="">
                <div className="SNILS poiska in">СНИЛЛС</div>
                <input type={Text} className="poiskai in"></input>
                <div className="INN poiska in">ИНН</div>
                <input type={Text} className="poiskai in"></input>
                <div className="pasport poiska in">Паспорт</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div>
                <div className="date poiska in">Дата приёма</div>
                <input type={Text} className="poiskai in"></input>
                <div className="Type poiska in">Тип приёма (повторный или первичный)</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div>
                <div className="jalobi poiska in">Жалобы</div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <div className="lechenie poiska in">Лечение</div>
                {/* <input type={Text} className="poiskai in"></input> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
            </div>
            <div className="btn d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="float-sm-right">Сохранить</button>
            </div>


        </div>

    )
}