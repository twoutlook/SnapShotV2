import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot </h1>
      <h3>這是演練有改動了代碼 by Mark陳炳陵 2021-02-15</h3>
      
      <table>
        <tr><td>好教程</td><td> https://app.pluralsight.com/guides/how-to-host-your-static-webpages-on-github-pages</td></tr>
        <tr> <td>原項目</td><td align="left">https://github.com/Yog9/SnapShot</td> </tr>
        <tr> <td>本項目</td><td align="left">https://github.com/twoutlook/SnapShotV2</td> </tr>
      </table>
      <h3 align="left">技術梗</h3>
     <table>
     <tr><th  align="right">Github Pages</th><td align="left">基礎</td></tr>
     <tr><th  align="right">Github Actions</th><td align="left">今天的新重點</td></tr>
     <tr><th  align="right"> Node.js 相關領域 </th><td>參考的前端項目, 包括 yarn, npm, react</td></tr>
    
     </table>
     
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
