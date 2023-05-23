import React from "react";
import styles from "./pacient.css"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Pacient() {
    return (
        <Nav>
        <div className="pola p-3 mb-1 bg-secondary">
            <Nav.Link as={Link} to="/"className="text-black nazad">Назад</Nav.Link>
            {/* <button>Назад</button> */}
            <div className="polana">
            <div className="">
                <div className="familia poiskaa in">Фамилия</div>
                <input type={Text} className="poiskai in"></input>
                <div className="name poiskaa">Имя</div>
                <input type={Text} className="poiskai in"></input>
                <div className="otchestvo poiskaa in">Отчество</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div className="">
                <div className="SNILS poiskaa in">СНИЛЛС</div>
                <input type={Text} className="poiskai in"></input>
                <div className="INN poiskaa in">ИНН</div>
                <input type={Text} className="poiskai in"></input>
                <div className="pasport poiskaa in">Паспорт</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div>
                <div className="date poiskaa in">Дата приёма</div>
                <input type={Text} className="poiskai in "></input>
                <div className="Type poiskaa in">Тип приёма (повторный или первичный)</div>
                <input type={Text} className="poiskai in"></input>
            </div>
            <div>
                <div className="jalobi poiskaa in">Жалобы</div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <div className="lechenie poiskaa in">Лечение</div>
                {/* <input type={Text} className="poiskai in"></input> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
            </div>
            <div className="btn d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="float-sm-right">Сохранить</button>
            </div>
            </div>

        </div>
        </Nav>
    )
}