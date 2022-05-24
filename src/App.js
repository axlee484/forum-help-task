import Header from "./components/Header";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { user, type, time, tag, issue } from "./api";

function App() {
  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card card">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card card">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card card">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded  Card card">
        <Header user={user} tag={tag} time={time} type={type} />
        <Body issue={issue} />
        <Footer />
      </div>
    </>
  );
}

export default App;
