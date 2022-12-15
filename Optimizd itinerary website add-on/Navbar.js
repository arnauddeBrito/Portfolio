import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import{ IoSearchOutline } from "react-icons/io5";


export default function Navbar(){
    return<Nav>
        <div className='brand'>
            <img src={logo} alt="logo" />
        </div>
        <div> className="toggle"</div>
        <div> className= "links"
            <ul>
                <li><a href="#services">Services</a></li> //présentation de l'outil
                <li><a href="#destination">Destination</a></li>
                <li><a href="#tours">Tours</a></li>
                <li><a href="#formulaire">Formulaire</a></li> //Formulaire de l'utilisateur
            </ul>

        </div>

        <div className="account-info">
            <div className="account">
                <span>My Account</span>
            </div>
            <div className="search">
                <IoSearchOutline />
            </div>


        </div>

    </Nav>;

}

const Nav = styled.nav;