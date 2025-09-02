import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      alert("Login with Google successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={5}>
          <div className="auth-box">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <Button
                variant="danger"
                type="button"
                onClick={handleGoogleLogin}
                className="w-100 mt-2"
              >
                Login with Google
              </Button>
            </Form>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
