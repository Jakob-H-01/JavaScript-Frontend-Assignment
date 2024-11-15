import chevronsRight from "../assets/bx-chevrons-right.svg";
import house from "../assets/bx-home-alt.svg";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/").map((crumb) => {
    currentLink === "/"
      ? (currentLink += `${crumb}`)
      : (currentLink += `/${crumb}`);

    return (
      <div className="crumb-container" key={crumb}>
        {crumb ? (
          <img src={chevronsRight} alt="right chevron" />
        ) : (
          <img src={house} alt="house" />
        )}
        <Link to={currentLink} className="crumb paragraph paragraph--small">
          {crumb ? crumb.charAt(0).toUpperCase() + crumb.slice(1) : "Homepage"}
        </Link>
      </div>
    );
  });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
