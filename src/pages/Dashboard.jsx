import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import DashboardComponent from "../components/DashboardComponent";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  // ? dispatch(getMe()) is called in useEffect() to get the user data
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // ? isError is true when the user is not logged in, so we redirect to login page
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <DashboardComponent />
    </Layout>
  );
};

export default Dashboard;
