import React from "react";
import footImg from "../footer/footerImg/foot.png";
import footImg2 from "../footer/footerImg/foot2.png";
import logoFoot from "../header/header.img/web.png";
import "../footer/footer.css";
import wst from "../images/wts.svg";
const Footer = () => {
  return (
    <div className="footGl">
      <div className="footer">
        <div className="infBlock">
          <h3>Tez Sat</h3>
          <p>
            Tez Sat (Тез Сат) - это сервис бесплатных объявлений
            Кыргызстана.Сервис позволяет подавать бесплатные объявления о купле,
            продаже, аренде, обмене как б/у, так и новых товаров и услуг.
            Продажа авто, домов, квартир, электроники, поиск работы и услуг
            является неотъемлемой частью повседневного бытия.
          </p>
        </div>
        <div className="DiscoverBlock">
          <h3>Узнать больше</h3>
          <ul className="footUl">
            <li className="footLi">
              <a>Служба поддержки</a>
            </li>
            <li className="footLi">
              <a>Карта сайта</a>
            </li>
            <li className="footLi">
              <a>О нас</a>
            </li>
            <li className="footLi">
              <a>Помощь</a>
            </li>
            <li className="footLi">
              <a>Пользовательское соглашение</a>
            </li>
          </ul>
        </div>
        <div className="downloadBlock">
          <h3>Скачать приложение</h3>
          <img src={footImg} />
          <img src={footImg2} />
        </div>
      </div>
      <div className="endFoot">
        <img src={logoFoot} />
        <p>© 2021 Все права защищены</p>
        <div className="iconFoot">
          <ul className="iconUl">
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
            <li className="iconLi">
              <a>
                <img className="iconImg" src={wst} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
