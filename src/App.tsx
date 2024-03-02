import { Layout } from "antd";

import "./App styles/App.css";
import Users from "./Users/Users";

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <h1>Test app</h1>
        </Header>
        <Content className="content">
          <Users />
        </Content>
      </Layout>
    </>
  );
}

export default App;
