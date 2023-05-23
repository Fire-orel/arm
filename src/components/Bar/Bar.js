import React from "react";
import styles from "./Bar.css"
import Table from 'react-bootstrap/Table';
import  Nav  from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
export default function Bar() {
    return (
        <Nav>
        <div className="">
            <div className="p-3 mb-1 bg-secondary text-black">
            <div className="upravlenia">
                {/* <div className="zapis"><button className="upravlenia">Записанные</button></div> */}
                <Nav.Link as={Link} to="/" className="text-black upravlenia">Принятые</Nav.Link>
                {/* <div className="priniat"><button className="upravlenia">Принятые</button></div> */}
                <Nav.Link as={Link} to="Table" className="text-black upravlenia">Записанные</Nav.Link>


            </div>
            <div className="poisk">
                <div className="familia poiska">Фамилия</div>
                <input type={Text} className="poiska"></input>
                <div className="name poiska">Имя</div>
                <input type={Text} className="poiska"></input>
                <div className="otchestvo poiska">Отчество</div>
                <input type={Text} className="poiska"></input>
                <Nav.Link as={Link} to="/pacient" className="text-black poiska poiskp text-uppercase">Поиск</Nav.Link>
                {/* <button className="poiska">Поиск</button> */}
            </div>
            
            </div>
            <Container>
                <Outlet />
            </Container>
        </div>
        </Nav>

    );
}