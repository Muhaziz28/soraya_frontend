import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const DivisiComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const [divisis, setDivisis] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDivisis();
  }, []);

  const getDivisis = async () => {
    const response = await axios.get("http://localhost:5000/divisi");
    setDivisis(response.data.payload.datas);
    setLoading(true);
  };

  const result = divisis.map((divisi) => (
    <div className="col-6 col-md-4 col-lg-3" key={divisi.id}>
      <div className="d-flex flex-column justify-content-between align-items-center employee-card">
        <img
          src="./assets/img/employees/photo-6.png"
          alt=""
          className="employee-img"
        />

        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          <h4 className="employee-name">{divisi.nama}</h4>
          <p className="text-center text-muted text-sm fs-6 my-3">
            {divisi.keterangan}
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
          {user && user.payload.datas.role_id === 1 ? (
            <>
              <button className="btn text-warning rounded-md">Edit</button>
              <button className="btn text-danger rounded-md">Delete</button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="content-title">Divisi</h2>
                <h5 className="content-desc mb-4">Your team powers</h5>
              </div>
              <div></div>
              <button className="btn btn-outline-primary">Add Divisi</button>
            </div>
          </div>
        </div>

        <div className="row pb-5">
          {loading ? (
            result
          ) : (
            <lottie-player
              src="https://lottie.host/2c8638b5-892d-4cb3-a956-47f1ff29093c/Kf87ZqrGsm.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px", margin: "auto" }}
              loop
              autoplay
            ></lottie-player>
          )}
        </div>
      </div>
    </div>
  );
};

export default DivisiComponent;
