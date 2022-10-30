import React from "react";
import moment from "moment/moment";

const SearchResults = props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(el => {
          const checkIn = moment(el.checkInDate);
          const checkOut = moment(el.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return (
            <tr key={el.id}>
              <td>{el.title}</td>
              <td>{el.firstName}</td>
              <td>{el.surname}</td>
              <td>{el.email}</td>
              <td>{el.roomId}</td>
              <td>{el.checkInDate}</td>
              <td>{el.checkOutDate}</td>
              <td>{difference}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
