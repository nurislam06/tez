import React from "react";
import "./category.css";

const Category = ({ setCategory }) => {
  const btnName = [
    {
      name: "Электроника",
    },
    {
      name: "Транспорт",
    },
    {
      name: "Недвижимость",
    },
    {
      name: "Вещи",
    },
    {
      name: "Всё для дома",
    },
  ];
  return (
    <div className="container">
      <h2 className="categoryh2">Главные категории</h2>
      <div className="categotyItem">
        {btnName.map((btn, index) => (
          <div key={btn.name}>
            <div className={`btns${index + 1}`}>
              <button onClick={(e) => setCategory(e.target.textContent)}>
                {btn.name}
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3
        style={{ cursor: "pointer" }}
        onClick={(e) => setCategory(e.target.textContent)}
      >
        Все категории
      </h3>
    </div>
  );
};
export default Category;
