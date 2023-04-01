import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetudId) => {},
    itemIsFavourite: (meetudId) => {},
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetudId) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(
                (meetup) => meetup.id !== meetudId
            );
        });
    }

    function itemIsFavouriteHandler(meetudId) {
        return userFavourites.some((meetup) => meetup.id === meetudId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;
