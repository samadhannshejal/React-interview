import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const User = () => {
  const userData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];
  const {id} = useParams();
  // console.log(id);
  if (id) {
    console.log("true")
    return <Outlet />;
  }
  return (
    <div>
      <h1>User Page ...</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id} className="user-list-links">
            <Link to={user.id.toString()}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
