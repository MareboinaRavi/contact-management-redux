import React, { useState } from "react";
import Contact from "./Contact";
const Navbar = () => {
  const [value, setvalue] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setvalue(e.target.value);
  // };
  const handleInput = (e) => {
    setvalue(e.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Contact App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for contact..."
                aria-label="Search"
                value={value}
                onChange={handleInput}
              />
            </form>
          </div>
        </div>
      </nav>
      <Contact value={value} />
    </>
  );
};
export default Navbar;
