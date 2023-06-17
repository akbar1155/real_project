import "../../components/generate.css";
import { Logo } from "../svg";
import Search from "../images/Search.svg";
import "../header/header.css";

export function Header() {
  return (

    // Start Header section 
    <header className="header">
      <div className="container">
        <Logo />
        <div className="input__form">
           <input type="text"  placeholder="Search Bar" className="search__input"/>
            <img src={Search} alt="" className="search__svg__img" />
           </div>
       <select name="" id="" className="select__header">
          <option value="Category" className="option__header">Category</option>
          <option value="" className="option__header">Akbarjon</option>
          <option value="" className="option__header">Anvarjon</option>
          <option value="" className="option__header">Abdulqodir</option>
        </select>

        <a href="#" className="one__of__word">Become an Mentor</a>

        <button className="btn__for__login btn">Login</button>
        <button className="btn__for__sign btn">Sign Up</button>
      </div>
    </header>
    // End Header section 

  );
}
