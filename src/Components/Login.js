import React from "react";
import { Layout } from "antd";
import styles from "../Styles/Login.css"
import LoginForm from "./LoginForm";
import OntroDashboard from "./OntroDashboard"



const { Header, Footer, Content } = Layout;

function Login(props) {
  return (
    <>
      <Layout>
        <Header>
          <div
            style={{
              margin: " 0 20px",
              display: "flex",
              height: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <i class="fas fa-desktop"></i>
            <h1 style={{ marginLeft: "10px" }}>ONTRO</h1>
          </div>
          <button
            style={{
              width: "100px",
              border: "none",
              height: "80%",
              marginRight: "20px",
            }}
          >
            Sign Up
          </button>
        </Header>
        <Content>
          <LoginForm
            style={{ align: "center", width: "100% ", border: "none" }}
          />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
     
    </>
  );
}

export default Login;
