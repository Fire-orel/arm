import React from "react";
import { Table } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function Table_zapis(){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Время приёма</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th></th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>10:10</td>
                    <td>Номоконов </td>
                    <td>Данила</td>
                    <td>Сергеевич</td>
                    <tb>Поситил</tb>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10:20</td>
                    <td>Смернов</td>
                    <td>Антон</td>
                    <td>Степанович</td>
                    <tb>Поситил</tb>
                </tr>
                <tr>
                    <td>3</td>
                    <td>11:30</td>
                    <td>Павлов</td>
                    <td>Павел</td>
                    <td>Сергеевич</td>
                    <tb></tb>
                </tr>
            </tbody>
        </Table>
    )
}