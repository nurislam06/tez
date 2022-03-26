import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../category/Category";
import "../app/app.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from "../users/users";
import Card from "../card/card";

const App = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <Header />
      <Category setCategory={setCategory}/>
      <Card category={category} />
      <Footer />
    </div>
  );
};

export default App;
