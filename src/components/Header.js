import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot </h1>
      <p>這是演練有改動了代碼 by Mark 2021-02-15</p>
      <p>根據這教程 https://app.pluralsight.com/guides/how-to-host-your-static-webpages-on-github-pages</p>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
