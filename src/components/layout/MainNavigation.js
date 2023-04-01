import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoutitesContext from "../../store/favourites-context";

function MainNavigation() {
    const favouritesCtx = useContext(FavoutitesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups in react</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favourites">
                            Favourites
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
