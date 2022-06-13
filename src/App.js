import Header from "./components/Header";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { user, type, time, tag, issue } from "./api";
import React from "react";

function App() {
  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card ">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card ">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card ">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
    </>
  );
}

export default App;
