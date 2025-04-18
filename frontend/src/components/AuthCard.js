import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import FromField from "./FormField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../features/loadingSlice";
import { getError } from "../utils/getError";
import api from "../utils/axios";
import { setUser } from "../features/userSlice";
import toast from "react-hot-toast";

function AuthCard() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const location = useLocation();
  const isFarmerLogin = location.pathname.includes("user-login");
  const isFarmerReg = location.pathname.includes("user-reg");
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bgStyle = {
    background: "rgba( 255, 255, 255, 0.1 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px )",
    WebkitBackdropFilter: "blur( 20px )",
    borderRadius: "10px",
    minHeight: "500px",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading());
      const response = await api.post("/api/farmer-login", {
        email: email,
        password: password,
      });

      if (response?.status === 200) {
        const { user, token } = response?.data;
        const { firstname, lastname } = response?.data?.user;
        console.log(token);
        dispatch(setUser({ user, token }));
        toast.success(`Welcome Back ${firstname} ${lastname}`);
        navigate("/auth/clg-data");
      }
      dispatch(hideLoading());

      console.log(response);
    } catch (error) {
      dispatch(hideLoading());
      getError(error);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading());
      const response = await api.post("/api/farmer-register", {
        firstname: firstName,
        lastname: LastName,
        mobile: mobile,
        email: email,
        password: password,
        department: department,
      });

      if (response?.status === 200) {
        const { user, token } = response?.data;
        const { firstname, lastname } = response?.data?.user;
        console.log(token);
        dispatch(setUser({ user, token }));
        toast.success(
          `Welcome ${firstname} ${lastname}. User account created successfully`
        );
        navigate("/auth/clg-data");
      }
      dispatch(hideLoading());

      console.log(response);
    } catch (error) {
      dispatch(hideLoading());
      getError(error);
    }
  };

  return (
    <Form
      className=""
      onSubmit={
        isFarmerLogin ? handleLogin : isFarmerReg ? handleRegistration : null
      }
    >
      <Card
        className="rounded-5 p-3 mt-3"
        style={bgStyle}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <Card.Body>
          <h1>
            {isFarmerLogin
              ? "User Login"
              : isFarmerReg
              ? "User Registration"
              : null}
          </h1>

          {isFarmerLogin ? (
            <p className="text-end">
              New Member? <Link to="/auth/user-reg">Register</Link>
            </p>
          ) : isFarmerReg ? (
            <p className="text-end">
              Already a Member? <Link to="/auth/user-login">Login</Link>
            </p>
          ) : null}

          {isFarmerReg ? (
            <>
              <Row>
                <Col md={6}>
                  <FromField
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col>
                  <FromField
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <FromField
                label="Mobile No."
                type="number"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select 
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="FE">FE</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="ENTC">ENTC</option>
                </Form.Select>
              </Form.Group>
            </>
          ) : null}
          <FromField
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FromField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Card.Body>
        <Card.Footer className="border-0">
          <Button type="submit" className="w-100 rounded-pill">
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : isFarmerLogin ? (
              "Login"
            ) : isFarmerReg ? (
              "Register"
            ) : null}
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
}

export default AuthCard;
