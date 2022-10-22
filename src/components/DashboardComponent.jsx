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

      <div className="row mt-5 pb-5">
        <div className="col-12">
          <h2 className="content-title">People</h2>
          <h5 className="content-desc mb-4">The rangers</h5>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-6.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Andini Danna</h4>

              <p className="employee-role">Product Designer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-2.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Ferrari Three</h4>

              <p className="employee-role">Quality Manager</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-4.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Sapiire Muke</h4>

              <p className="employee-role">iOS Engineer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status unverified">
              <a href="#">Verify Now</a>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Mw Kemanna</h4>

              <p className="employee-role">Website Developer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-7.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Onna Appa</h4>

              <p className="employee-role">Product Designer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-3.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Hehe Nadiia</h4>

              <p className="employee-role">Quality Manager</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-5.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Jamboel</h4>

              <p className="employee-role">iOS Engineer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status unverified">
              <a href="#">Verify Now</a>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column justify-content-between align-items-center employee-card w-100">
            <img
              src="./assets/img/employees/photo-1.png"
              alt=""
              className="employee-img"
            />

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4 className="employee-name">Eksis Melita</h4>

              <p className="employee-role">Website Developer</p>
            </div>

            <div className="d-flex justify-content-center align-items-center employee-status verified">
              <div className="employee-status-image">
                <img src="./assets/img/employees/check.svg" alt="" />
              </div>

              <span>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
