import "./styles/Header.css";
import React from "react";
function Header({ user, tag, time, type }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div
          className="container-fluid "
          style={{ justifyContent: "flex-start" }}
        >
          <a className="navbar-brand" href="#">
            <img src={user.displayProfile} alt="" width="30" height="30" />
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a className="navbar-brand" href="#">
              {user.name}
            </a>
            <div className="text-muted">Posted in {type}</div>
          </div>

          <div>
            <div className="navbar-nav">
              <div className="text-muted">{time} ago</div>
              <div className="badge text-bg-primary">{tag}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
