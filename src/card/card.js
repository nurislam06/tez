import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import el from "../images/el1.png";
import el2 from "../images/el2.png";
import el3 from "../images/el3.png";
import home from "../images/home1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home4 from "../images/home4.png";
import tr from "../images/tr1.png";
import tr2 from "../images/tr2.png";

const homeImg = [home, home2, home3, home4];
const trImg = [tr, tr2, tr2, tr];
const elImg = [el, el3, el2, el];

const templateHome = {
  price: `1200 som`,
  des: "Кружки керамические, с длинной ручкой",
  adress: "г. Бишкек, Чуйская область",
  category: "home",
};

const templateEl = {
  price: `1900 som`,
  des: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  adress: "г. Osh, Osh область",
  category: "electron",
};

const templateAdd = {
  price: `2200 $`,
  des: " It is a long established fact that a reader will be distracted by the",
  adress: "г. Naryn, Naryn область",
  category: "Adress",
};

const templateTr = {
  price: `120000 $`,
  des: " It is a long established fact that a reader will be distracted by the",
  adress: "г. Moscow, Moscow область",
  category: "transport",
};

const Card = ({ data, category }) => {
  const [users, setUsers] = useState([]);
  const [home, setHome] = useState([]);
  const [adress, setAdress] = useState([]);
  const [electron, setElectron] = useState([]);
  const [transport, setTransport] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setUsers(data.users);
    });
    setHome(fullMass(home, templateHome));
    setAdress(fullMass(adress, templateAdd));
    setElectron(fullMass(electron, templateEl));
    setTransport(fullMass(transport, templateTr));
  }, []);

  function fullMass(mass, temp) {
    for (let i = 0; i < 4; i++) {
      mass.push(temp);
    }
    return mass;
  }

  function randomIndex(min, max) {
    return Math.random() * (max - min) + min;
  }

  function Items({ price, adress, des, category, img }) {
    let indImg = Math.round(randomIndex(0, 3));
    return (
      <div className="item">
        <div className="cardImg">
          <img src={img[indImg]} />
        </div>
        <div className="cardPrice">${price}</div>
        <div className="cardDes">{des}</div>
        <div className="cardAdress">{adress}</div>
      </div>
    );
  }

  const userss = (
    <div className="items">
      {users?.map((item) => (
        <>
          <Items {...item} img={homeImg} />
        </>
      ))}
    </div>
  );

  const homee = (
    <div className="items">
      {home.map((item) => (
        <>
          <Items {...item} img={homeImg} />
        </>
      ))}
    </div>
  );
  const transportt = (
    <div className="items">
      {transport.map((item) => (
        <>
          <Items {...item} img={trImg} />
        </>
      ))}
    </div>
  );
  const address = (
    <div className="items">
      {adress.map((item) => (
        <>
          <Items {...item} img={homeImg} />
        </>
      ))}
    </div>
  );
  const electronn = (
    <div className="items">
      {electron.map((item) => (
        <>
          <Items {...item} img={elImg} />
        </>
      ))}
    </div>
  );
  switch (category) {
    case "Электроника":
      return <div className="container">{electronn}</div>;
    case "Транспорт":
      return <div className="container">{transportt}</div>;
    case "Недвижимость":
      return <div className="container">{address}</div>;
    case "Вещи":
      return <div className="container">{address}</div>;
    case "Всё для дома":
      return <div className="container">{homee}</div>;
    default:
      <div className="container">
        {userss}
        {homee}
        {transportt}
        {address}
        {electronn}
      </div>;
  }
  return (
    <div className="container">
      {userss}
      {homee}
      {transportt}
      {address}
      {electronn}
    </div>
  );
};

export default Card;
