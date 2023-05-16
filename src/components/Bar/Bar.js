import React from "react";
import styles from "./Bar.css"
import Table from 'react-bootstrap/Table';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Bar() {
    return (
        <div className="">
            <div className="p-3 mb-1 bg-secondary text-black">
            <div className="upravlenia">
                <div className="zapis"><button className="upravlenia">Записанные</button></div>
                <div className="priniat"><button className="upravlenia">Принятые</button></div>

            </div>
            <div className="poisk">
                <div className="familia poiska">Фамилия</div>
                <input type={Text} className="poiska"></input>
                <div className="name poiska">Имя</div>
                <input type={Text} className="poiska"></input>
                <div className="otchestvo poiska">Отчество</div>
                <input type={Text} className="poiska"></input>
                <button className="poiska">Поиск</button>
            </div>
            </div>
            <div className="table">
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Время приёма</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Отчество</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>10:10</td>
                    <td>Номоконов </td>
                    <td>Данила</td>
                    <td>Сергеевич</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10:20</td>
                    <td>Смернов</td>
                    <td>Антон</td>
                    <td>Степанович</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>10:30</td>
                    <td>Иванов</td>
                    <td>Петр</td>
                    <td>Степанович</td>
                </tr>
            </tbody>
        </Table></div>
        </div>


    );
}