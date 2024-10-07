import "./App.css";

import React, { useEffect } from "react";
import UserList from "./components/UserList";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(setUsers(data));
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Список пользователей</h1>
      <UserList />
    </div>
  );
};

export default App;
