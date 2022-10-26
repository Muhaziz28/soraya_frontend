import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import DivisiComponent from "../components/DivisiComponent";

const Divisi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  // ? dispatch(getMe()) is called in useEffect() to get the user data
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // ? isError is true when the user is not logged in, so we redirect to login page
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.payload.datas.role_id !== 1) {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <DivisiComponent />
    </Layout>
  );
};

export default Divisi;
