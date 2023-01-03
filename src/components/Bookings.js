import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Profile from "./Profile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [fetched, setFetched] = useState([]);
  const [userId, setUserId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setFetched(data);
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const search = searchVal => {
    const filteredResults = fetched.filter((el, i) => {
      return (
        searchVal.toUpperCase() === el.firstName.toUpperCase() ||
        searchVal.toUpperCase() === el.surname.toUpperCase()
      );
    });
    setBookings(filteredResults.length === 0 ? fetched : filteredResults);
  };

  const showProfile = id => {
    setUserId(id);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <div>ESPERA UN MOMENTO...CARGANDO</div>
        ) : (
          <SearchResults results={bookings} showProfile={showProfile} />
        )}
        {userId !== 0 && <Profile userId={userId} />}
      </div>
    </div>
  );
};

export default Bookings;
