import { Col, Card, Avatar, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UsersGrid = ({ users, search }: { users: User[]; search: string }) => {
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const usersPerRow = 2;
  const rows = [];
  for (let i = 0; i < filteredUsers.length; i += usersPerRow) {
    const rowUsers = filteredUsers.slice(i, i + usersPerRow);
    const rowCols = rowUsers.map((user, index) => (
      <Col
        key={index}
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 12 }}
        xl={{ span: 12 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Card className="user-card">
          <Avatar
            shape="square"
            size={{ xs: 56, sm: 64, md: 56, lg: 64, xl: 80, xxl: 100 }}
            icon={<UserOutlined />}
          />
          <h1 className="heading">{user.username}</h1>
          <p className="text" style={{ margin: "5px 0" }}>
            <span>fullname</span>: {user.name}
          </p>
          <p className="text" style={{ margin: "5px 0" }}>
            <span>phone</span>: {user.phone}
          </p>
          <p className="text" style={{ margin: "5px 0" }}>
            <span>email</span>: {user.email}
          </p>
        </Card>
      </Col>
    ));

    rows.push(
      <Row key={i} gutter={16}>
        {rowCols}
      </Row>
    );
  }
  return rows;
};

export default UsersGrid;
