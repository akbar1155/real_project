import "../../components/generate.css";
import { Logo } from "../../images/svg";
import Search from "../../images/Search.svg";
import "../header/header.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";

export function Header() {
  const navigate = useNavigate();
  return (
    // Start Header section
    <header className="header">
      <div className="container">
        <Logo />
        <div className="input__form">
          <input
            type="text"
            placeholder="Search Bar"
            className="search__input"
          />
          <img src={Search} alt="" className="search__svg__img" />
        </div>{" "}
        <select
          name=""
          id=""
          onChange={(e) => {
            navigate(e.target.value);
          }}
          className="select__header"
        >
          <option value="/" className="option__header">
            Category
          </option>

          <option value="/" className="option__header">
            Home
          </option>
          <option value="/blog" className="option__header">
            <a href="/blog">blog</a>
          </option>
        </select>
        <a href="#" className="one__of__word">
          Become an Mentor
        </a>
        <button className="btn__for__login btn">Login</button>
        <button className="btn__for__sign btn">Sign Up</button>
      </div>
    </header>
    // End Header section
  );
}
