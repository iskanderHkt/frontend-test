// import { Col, Card, Avatar, Row, Button, Spin, Input } from "antd";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import "./styles/Users.css";
import UsersGrid from "./UsersGrid";
import { Button, Input, Spin } from "antd";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setTimeout(() => {
          setUsers(response.data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, [update]);

  // const renderUserCards = () => {

  // };

  const handleSortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortBy === "asc") {
        return a.username.localeCompare(b.username);
      } else {
        return b.username.localeCompare(a.username);
      }
    });

    setUsers(sortedUsers);
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <>
      <div className="panel">
        <Button
          className="btn"
          onClick={() => setUpdate(!update)}
          size="large"
          type="primary"
        >
          Update Users
        </Button>
        <Button
          className="btn"
          onClick={handleSortUsers}
          size="large"
          type="primary"
        >
          SORT BY username
        </Button>
        <Input
          className="searchbar"
          placeholder="Type username..."
          size="large"
          onChange={handleSearch}
          type="primary"
        />
      </div>
      {loading ? (
        <div className="loader">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <UsersGrid users={users} search={search} />
      )}
    </>
  );
};

export default Users;
