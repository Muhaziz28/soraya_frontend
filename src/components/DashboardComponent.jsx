import React from "react";

const DashboardComponent = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-12">
          <h2 className="content-title">Dashboard</h2>
          <h5 className="content-desc mb-4">Your team powers</h5>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="statistics-card simple">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-around align-items-start employee-stat">
                <h5 className="content-desc">In Total</h5>

                <h3 className="statistics-value">425,000</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="statistics-card simple">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-around align-items-start employee-stat">
                <h5 className="content-desc">Active</h5>

                <h3 className="statistics-value">205,399</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="statistics-card simple">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-around align-items-start employee-stat">
                <h5 className="content-desc">Inactive</h5>

                <h3 className="statistics-value">142,593</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
