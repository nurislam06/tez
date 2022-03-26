import React from "react";
import '../header/header.css'
import logo from '../header/header.img/web.png';
import arrowDown from '../header/header.img/Vector.svg'

const Header = () =>{
    return(
        <div className="container">
            <div className="header">
            <div className="leftBlock">
            <div className="headerLogo">
                <img src={logo} />
                </div>
                <div className="headerList">
                    <ul className="headerUl">
                        <li>
                            <a href="#">Для бизнеса</a>
                        </li>
                        <li>
                            <a href="#">Блог</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Помощь</a>
                            <img src={arrowDown}/>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="translate">
                    <button>ru</button>
                </div>
                <div className="headerLeftBlock">
                    <div className="headerLine1"></div>
                    <div className="entrance">
                        <a href="#">
                        Войти
                        </a>
                    </div>
                    <div className="headerLine2"></div>
                    <div className="registration">
                        <a href="#">
                        Регистрация
                        </a>
                    </div>
                </div>
            </div>
            <div className="headerlongLine"></div>
            <div className="headerSelector">
                <div className="selector">
                    <input></input>
                    <button className="finds">Найти</button>
                    <button className="btnFinds">Подать объявление</button>
                </div>
            </div>
        </div>
    );
}

export default Header ;