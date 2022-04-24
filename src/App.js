import React, { useState } from "react";

import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ItemList from "./Components/ItemList";
import { items } from "./data";

function App() {
  const [itemData, setItemData] = useState(items);

  //Get All Category Uniqe
  const allCategory = ["all", ...new Set(items.map((i) => i.category))];

  // Filter By Category
  const filterbyCategory = (cat) => {
    if (cat === "all") {
      setItemData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };

  // Filter By Search
  const filterbySearch = (word) => {
    if (word !== "") {
      setItemData(items);
    } else {
      const newArr = items.filter((item) => item.title === word);
      setItemData(newArr);
    }
  };

  return (
    <div>
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <ItemList itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
