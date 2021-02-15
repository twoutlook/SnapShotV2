import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot  這是演練有改動了代碼 by Mark 2021-02-15</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
