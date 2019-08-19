import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

export default class Home extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <h1>Hello, this is resume builder!</h1>
        <p>Please chose the layout:</p>
        <ul>
          <li>
            <Link to="/layout1">
              <Button type="link">Layout 1</Button>
            </Link>
          </li>
          <li>
            <Link to="/layout2">
              <Button type="link">Layout 2</Button>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}
