import React from "react";
import { Link } from "react-router-dom";

const PegawaiList = () => {
  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                Users List
              </h1>
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                  <Link
                    href="../../demo1/dist/index.html"
                    className="text-muted text-hover-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-400 w-5px h-2px"></span>
                </li>

                <li className="breadcrumb-item text-muted">User Management</li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-400 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-muted">Users</li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-2 gap-lg-3">
              <div className="m-0">
                <Link
                  href="#"
                  className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <span className="svg-icon svg-icon-6 svg-icon-muted me-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Filter
                </Link>
                <div
                  className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                  data-kt-menu="true"
                  id="kt_menu_631f0907ed901"
                >
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5">
                    <div className="mb-10">
                      <label className="form-label fw-semibold">Status:</label>
                      <div>
                        <select
                          className="form-select form-select-solid"
                          data-kt-select2="true"
                          data-placeholder="Select option"
                          data-dropdown-parent="#kt_menu_631f0907ed901"
                          data-allow-clear="true"
                        >
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-semibold">
                        Member Type:
                      </label>
                      <div className="d-flex">
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <span className="form-check-label">Author</span>
                        </label>

                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="2"
                            checked="checked"
                          />
                          <span className="form-check-label">Customer</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-semibold">
                        Notifications:
                      </label>
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="notifications"
                          checked="checked"
                        />
                        <label className="form-check-label">Enabled</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="reset"
                        className="btn btn-sm btn-light btn-active-light-primary me-2"
                        data-kt-menu-dismiss="true"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        data-kt-menu-dismiss="true"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={"/add-pegawai"}
                className="btn btn-sm fw-bold btn-primary"
              >
                Create
              </Link>
            </div>
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-header border-0 pt-6">
                <div className="card-title">
                  <div className="d-flex align-items-center position-relative my-1">
                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height="2"
                          rx="1"
                          transform="rotate(45 17.0365 15.1223)"
                          fill="currentColor"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      data-kt-user-table-filter="search"
                      className="form-control form-control-solid w-250px ps-14"
                      placeholder="Search user"
                    />
                  </div>
                </div>
                <div className="card-toolbar">
                  <div
                    className="d-flex justify-content-end"
                    data-kt-user-table-toolbar="base"
                  >
                    <button
                      type="button"
                      className="btn btn-light-primary me-3"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <span className="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                      data-kt-menu="true"
                    >
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">
                          Filter Options
                        </div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div
                        className="px-7 py-5"
                        data-kt-user-table-filter="form"
                      >
                        <div className="mb-10">
                          <label className="form-label fs-6 fw-semibold">
                            Role:
                          </label>
                          <select
                            className="form-select form-select-solid fw-bold"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-allow-clear="true"
                            data-kt-user-table-filter="role"
                            data-hide-search="true"
                          >
                            <option></option>
                            <option value="Administrator">Administrator</option>
                            <option value="Analyst">Analyst</option>
                            <option value="Developer">Developer</option>
                            <option value="Support">Support</option>
                            <option value="Trial">Trial</option>
                          </select>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fs-6 fw-semibold">
                            Two Step Verification:
                          </label>
                          <select
                            className="form-select form-select-solid fw-bold"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-allow-clear="true"
                            data-kt-user-table-filter="two-step"
                            data-hide-search="true"
                          >
                            <option></option>
                            <option value="Enabled">Enabled</option>
                          </select>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                            data-kt-menu-dismiss="true"
                            data-kt-user-table-filter="reset"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary fw-semibold px-6"
                            data-kt-menu-dismiss="true"
                            data-kt-user-table-filter="filter"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-light-primary me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_export_users"
                    >
                      <span className="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.3"
                            x="12.75"
                            y="4.25"
                            width="12"
                            height="2"
                            rx="1"
                            transform="rotate(90 12.75 4.25)"
                            fill="currentColor"
                          />
                          <path
                            d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_add_user"
                    >
                      <span className="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width="16"
                            height="2"
                            rx="1"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    className="d-flex justify-content-end align-items-center d-none"
                    data-kt-user-table-toolbar="selected"
                  >
                    <div className="fw-bold me-5">
                      <span
                        className="me-2"
                        data-kt-user-table-select="selected_count"
                      ></span>
                      Selected
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-kt-user-table-select="delete_selected"
                    >
                      Delete Selected
                    </button>
                  </div>
                  <div
                    className="modal fade"
                    id="kt_modal_export_users"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="fw-bold">Export Users</h2>
                          <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                          >
                            <span className="svg-icon svg-icon-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x="6"
                                  y="17.3137"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(-45 6 17.3137)"
                                  fill="currentColor"
                                />
                                <rect
                                  x="7.41422"
                                  y="6"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(45 7.41422 6)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                          <form
                            id="kt_modal_export_users_form"
                            className="form"
                            action="#"
                          >
                            <div className="fv-row mb-10">
                              <label className="fs-6 fw-semibold form-label mb-2">
                                Select Roles:
                              </label>
                              <select
                                name="role"
                                data-control="select2"
                                data-placeholder="Select a role"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bold"
                              >
                                <option></option>
                                <option value="Administrator">
                                  Administrator
                                </option>
                                <option value="Analyst">Analyst</option>
                                <option value="Developer">Developer</option>
                                <option value="Support">Support</option>
                                <option value="Trial">Trial</option>
                              </select>
                            </div>
                            <div className="fv-row mb-10">
                              <label className="required fs-6 fw-semibold form-label mb-2">
                                Select Export Format:
                              </label>
                              <select
                                name="format"
                                data-control="select2"
                                data-placeholder="Select a format"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bold"
                              >
                                <option></option>
                                <option value="excel">Excel</option>
                                <option value="pdf">PDF</option>
                                <option value="cvs">CVS</option>
                                <option value="zip">ZIP</option>
                              </select>
                            </div>
                            <div className="text-center">
                              <button
                                type="reset"
                                className="btn btn-light me-3"
                                data-kt-users-modal-action="cancel"
                              >
                                Discard
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                data-kt-users-modal-action="submit"
                              >
                                <span className="indicator-label">Submit</span>
                                <span className="indicator-progress">
                                  Please wait...
                                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="kt_modal_add_user"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                      <div className="modal-content">
                        <div
                          className="modal-header"
                          id="kt_modal_add_user_header"
                        >
                          <h2 className="fw-bold">Add User</h2>
                          <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                          >
                            <span className="svg-icon svg-icon-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x="6"
                                  y="17.3137"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(-45 6 17.3137)"
                                  fill="currentColor"
                                />
                                <rect
                                  x="7.41422"
                                  y="6"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(45 7.41422 6)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                          <form
                            id="kt_modal_add_user_form"
                            className="form"
                            action="#"
                          >
                            <div
                              className="d-flex flex-column scroll-y me-n7 pe-7"
                              id="kt_modal_add_user_scroll"
                              data-kt-scroll="true"
                              data-kt-scroll-activate="{default: false, lg: true}"
                              data-kt-scroll-max-height="auto"
                              data-kt-scroll-dependencies="#kt_modal_add_user_header"
                              data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                              data-kt-scroll-offset="300px"
                            >
                              <div className="fv-row mb-7">
                                <label className="d-block fw-semibold fs-6 mb-5">
                                  Avatar
                                </label>

                                <div
                                  className="image-input image-input-outline image-input-placeholder"
                                  data-kt-image-input="true"
                                >
                                  <div
                                    className="image-input-wrapper w-125px h-125px"
                                    style={{
                                      backgroundImage:
                                        "url('assets/media/avatars/blank.png')",
                                    }}
                                  ></div>
                                  <label
                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="change"
                                    data-bs-toggle="tooltip"
                                    title="Change avatar"
                                  >
                                    <i className="bi bi-pencil-fill fs-7"></i>
                                    <input
                                      type="file"
                                      name="avatar"
                                      accept=".png, .jpg, .jpeg"
                                    />
                                    <input type="hidden" name="avatar_remove" />
                                  </label>
                                  <span
                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="cancel"
                                    data-bs-toggle="tooltip"
                                    title="Cancel avatar"
                                  >
                                    <i className="bi bi-x fs-2"></i>
                                  </span>
                                  <span
                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="remove"
                                    data-bs-toggle="tooltip"
                                    title="Remove avatar"
                                  >
                                    <i className="bi bi-x fs-2"></i>
                                  </span>
                                </div>
                                <div className="form-text">
                                  Allowed file types: png, jpg, jpeg.
                                </div>
                              </div>
                              <div className="fv-row mb-7">
                                <label className="required fw-semibold fs-6 mb-2">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  name="user_name"
                                  className="form-control form-control-solid mb-3 mb-lg-0"
                                  placeholder="Full name"
                                  value={"John Wick"}
                                />
                              </div>
                              <div className="fv-row mb-7">
                                <label className="required fw-semibold fs-6 mb-2">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="user_email"
                                  className="form-control form-control-solid mb-3 mb-lg-0"
                                  placeholder="example@domain.com"
                                  value="smith@kpmg.com"
                                />
                              </div>

                              <div className="mb-7">
                                <label className="required fw-semibold fs-6 mb-5">
                                  Role
                                </label>
                                <div className="d-flex fv-row">
                                  <div className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input me-3"
                                      name="user_role"
                                      type="radio"
                                      value={"0"}
                                      id="kt_modal_update_role_option_0"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="kt_modal_update_role_option_0"
                                    >
                                      <div className="fw-bold text-gray-800">
                                        Administrator
                                      </div>
                                      <div className="text-gray-600">
                                        Best for business owners and company
                                        administrators
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                <div className="separator separator-dashed my-5"></div>
                                <div className="d-flex fv-row">
                                  <div className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input me-3"
                                      name="user_role"
                                      type="radio"
                                      value={"1"}
                                      id="kt_modal_update_role_option_1"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="kt_modal_update_role_option_1"
                                    >
                                      <div className="fw-bold text-gray-800">
                                        Developer
                                      </div>
                                      <div className="text-gray-600">
                                        Best for developers or people primarily
                                        using the API
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                <div className="separator separator-dashed my-5"></div>
                                <div className="d-flex fv-row">
                                  <div className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input me-3"
                                      name="user_role"
                                      type="radio"
                                      value={"2"}
                                      id="kt_modal_update_role_option_2"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="kt_modal_update_role_option_2"
                                    >
                                      <div className="fw-bold text-gray-800">
                                        Analyst
                                      </div>
                                      <div className="text-gray-600">
                                        Best for people who need full access to
                                        analytics data, but don't need to update
                                        business settings
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                <div className="separator separator-dashed my-5"></div>
                                <div className="d-flex fv-row">
                                  <div className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input me-3"
                                      name="user_role"
                                      type="radio"
                                      value="3"
                                      id="kt_modal_update_role_option_3"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="kt_modal_update_role_option_3"
                                    >
                                      <div className="fw-bold text-gray-800">
                                        Support
                                      </div>
                                      <div className="text-gray-600">
                                        Best for employees who regularly refund
                                        payments and respond to disputes
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                <div className="separator separator-dashed my-5"></div>
                                <div className="d-flex fv-row">
                                  <div className="form-check form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input me-3"
                                      name="user_role"
                                      type="radio"
                                      value={"4"}
                                      id="kt_modal_update_role_option_4"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="kt_modal_update_role_option_4"
                                    >
                                      <div className="fw-bold text-gray-800">
                                        Trial
                                      </div>
                                      <div className="text-gray-600">
                                        Best for people who need to preview
                                        content data, but don't need to make any
                                        updates
                                      </div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center pt-15">
                              <button
                                type="reset"
                                className="btn btn-light me-3"
                                data-kt-users-modal-action="cancel"
                              >
                                Discard
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                data-kt-users-modal-action="submit"
                              >
                                <span className="indicator-label">Submit</span>
                                <span className="indicator-progress">
                                  Please wait...
                                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body py-4">
                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_table_users"
                >
                  <thead>
                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                      <th className="w-10px pe-2">
                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="true"
                            data-kt-check-target="#kt_table_users .form-check-input"
                            value="1"
                          />
                        </div>
                      </th>
                      <th className="min-w-125px">User</th>
                      <th className="min-w-125px">Role</th>
                      <th className="min-w-125px">Last login</th>
                      <th className="min-w-125px">Two-step</th>
                      <th className="min-w-125px">Joined Date</th>
                      <th className="text-end min-w-100px">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 fw-semibold">
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link hrefLang="../../demo1/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                              <img
                                src="assets/media/avatars/300-1.jpg"
                                alt="Max Smith"
                                className="w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            Max Smith
                          </Link>
                          <span>max@kt.com</span>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>
                        <div className="badge badge-light fw-bold">
                          3 days ago
                        </div>
                      </td>
                      <td></td>
                      <td>19 Aug 2022, 10:30 am</td>
                      <td className="text-end">
                        <Link
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <Link
                              href="../../demo1/dist/apps/user-management/users/view.html"
                              className="menu-link px-3"
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="menu-item px-3">
                            <Link
                              href="#"
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link hrefLang="../../demo1/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                              <img
                                src="assets/media/avatars/300-5.jpg"
                                alt="Sean Bean"
                                className="w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            Sean Bean
                          </Link>
                          <span>sean@dellito.com</span>
                        </div>
                      </td>
                      <td>Support</td>
                      <td>
                        <div className="badge badge-light fw-bold">
                          5 hours ago
                        </div>
                      </td>
                      <td>
                        <div className="badge badge-light-success fw-bold">
                          Enabled
                        </div>
                      </td>
                      <td>22 Sep 2022, 5:30 pm</td>
                      <td className="text-end">
                        <Link
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <Link
                              href="../../demo1/dist/apps/user-management/users/view.html"
                              className="menu-link px-3"
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="menu-item px-3">
                            <Link
                              href="#"
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link hrefLang="../../demo1/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                              <img
                                src="assets/media/avatars/300-25.jpg"
                                alt="Brian Cox"
                                className="w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            Brian Cox
                          </Link>
                          <span>brian@exchange.com</span>
                        </div>
                      </td>
                      <td>Developer</td>
                      <td>
                        <div className="badge badge-light fw-bold">
                          2 days ago
                        </div>
                      </td>
                      <td>
                        <div className="badge badge-light-success fw-bold">
                          Enabled
                        </div>
                      </td>
                      <td>10 Mar 2022, 11:05 am</td>
                      <td className="text-end">
                        <Link
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>

                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <Link
                              href="../../demo1/dist/apps/user-management/users/view.html"
                              className="menu-link px-3"
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="menu-item px-3">
                            <Link
                              href="#"
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link href="../../demo1/dist/apps/user-management/users/view.html">
                            <div className="symbol-label fs-3 bg-light-warning text-warning">
                              C
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            Mikaela Collins
                          </Link>
                          <span>mik@pex.com</span>
                        </div>
                      </td>
                      <td>Administrator</td>
                      <td>
                        <div className="badge badge-light fw-bold">
                          5 days ago
                        </div>
                      </td>
                      <td></td>
                      <td>15 Apr 2022, 5:30 pm</td>
                      <td className="text-end">
                        <Link
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <Link
                              href="../../demo1/dist/apps/user-management/users/view.html"
                              className="menu-link px-3"
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="menu-item px-3">
                            <Link
                              href="#"
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link href="../../demo1/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                              <img
                                src="assets/media/avatars/300-9.jpg"
                                alt="Francis Mitcham"
                                className="w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            href="../../demo1/dist/apps/user-management/users/view.html"
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            Francis Mitcham
                          </Link>
                          <span>f.mit@kpmg.com</span>
                        </div>
                      </td>
                      <td>Trial</td>
                      <td>
                        <div className="badge badge-light fw-bold">
                          3 weeks ago
                        </div>
                      </td>
                      <td></td>
                      <td>20 Jun 2022, 10:30 am</td>
                      <td className="text-end">
                        <Link
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <Link
                              href="../../demo1/dist/apps/user-management/users/view.html"
                              className="menu-link px-3"
                            >
                              Edit
                            </Link>
                          </div>
                          <div className="menu-item px-3">
                            <Link
                              href="#"
                              className="menu-link px-3"
                              data-kt-users-table-filter="delete_row"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PegawaiList;
