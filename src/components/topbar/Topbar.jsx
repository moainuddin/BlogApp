import { Link } from "react-router-dom";
import "./topbar.css";


export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li><Link className="topListItem" to="/">HOME</Link></li>
          <li><Link className="topListItem" to="/write">WRITE</Link></li>
          <li><Link className="topListItem" to="/login">LOGIN</Link></li>
          <li><Link className="topListItem" to="/register">REGISTER</Link></li>
          <li><Link className="topListItem" to="/settings">SETTINGS</Link></li>
        </ul>
      </div>
      <div className="topRight">
       <Link to={"/login"}> <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />  </Link>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
