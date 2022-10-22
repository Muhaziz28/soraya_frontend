import React from "react";
import Layout from "./Layout";
import PegawaiList from "../components/PegawaiList";
import Sidebar from "../components/Sidebar";

const Pegawai = () => {
  return (
    <Layout>
      <Sidebar />
      <PegawaiList />
    </Layout>
  );
};

export default Pegawai;
