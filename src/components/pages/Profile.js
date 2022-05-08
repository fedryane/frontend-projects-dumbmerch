import React, { useContext, useState, useEffect } from "react";
import NavbarUser from "../inc/NavbarUser";
import imgBlank from "../assets/Frame.png";
import Product1 from "../assets/product1.png";
import "./UserHome.css";
import Logo from "../assets/frame-kecil.png";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import dateFormat from "dateformat";

import { UserContext } from "../context/userContext";

// Import useQuery
import { useQuery } from "react-query";

// API config
import { API } from "../../config/api";

function Profile() {
  const title = "Profile";

  document.title = "DumbMerch | " + title;

  const [state] = useContext(UserContext);

  // Fetching profile data from database
  let { data: profile, refetch: profileRefetch } = useQuery("profileCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await API.get("/profile", config);
    return response.data.data;
  });

  // Fetching transactions data from database
  let { data: transactions, refetch: transactionsRefetch } = useQuery("transactionsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await API.get("/transactions", config);

    return response.data.data;
  });

  return (
    <div>
      <NavbarUser />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-danger my-5">My Profile</h3>
              <img src={profile?.image ? profile.image : imgBlank} style={{ width: "100%" }} />
            </div>
            <div className="col-md-3 mt-5">
              <div class="card bg-var-dark mt-5" style={{ maxWidth: "4000px" }}>
                <div class="col-md">
                  <div class="card-body mt-4">
                    <h5 class="card-title text-danger">Name</h5>
                    <p class="card-text text-light">{state.user.name}</p>

                    <h5 class="card-title text-danger">Email</h5>
                    <p class="card-text text-light">{state.user.email}</p>

                    <h5 class="card-title text-danger">Phone</h5>
                    <p class="card-text text-light">{profile?.phone ? profile?.phone : "-"}</p>

                    <h5 class="card-title text-danger">Gender</h5>
                    <p class="card-text text-light">{profile?.gender ? profile?.gender : "-"}</p>

                    <h5 class="card-title text-danger">Address</h5>
                    <p class="card-text text-light">{profile?.address ? profile?.address : "-"}</p>
                  </div>
                </div>
              </div>
            </div>
            <Col md="5">
              <h4 className="text-header-product mb-4 text-danger fw-bold">My Transaction</h4>
              {transactions?.length > 0 ? (
                <>
                  {transactions?.map((item) => (
                    <div style={{ background: "#303030" }} className="p-2 mb-1">
                      <Container fluid className="px-1">
                        <Row>
                          <Col xs="3">
                            <img
                              src={item.product.image}
                              alt="img"
                              className="img-fluid text-white"
                              style={{
                                height: "120px",
                                width: "100px",
                                objectFit: "cover",
                              }}
                            />
                          </Col>
                          <Col xs="6">
                            <div
                              style={{
                                fontSize: "18px",
                                color: "#F74D4D",
                                fontWeight: "500",
                                lineHeight: "19px",
                              }}
                            >
                              {item.product.name}
                            </div>
                            <div
                              className="mt-2"
                              style={{
                                fontSize: "14px",
                                color: "#F74D4D",
                                fontWeight: "300",
                                lineHeight: "19px",
                              }}
                            >
                              {dateFormat(item.createdAt, "dddd, d mmmm yyyy, HH:MM ")}
                              WIB
                            </div>

                            <div
                              className="mt-3 text-white"
                              style={{
                                fontSize: "14px",
                                fontWeight: "300",
                              }}
                            >
                              Price : {convertRupiah.convert(item.price)}
                            </div>

                            <div
                              className="mt-3 text-danger"
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                              }}
                            >
                              Sub Total : {convertRupiah.convert(item.price)}
                            </div>
                          </Col>
                          <Col xs="3">
                            <div className={`status-transaction-${item.status} text-danger rounded h-100 d-flex align-items-center justify-content-center`}>{item.status}</div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  ))}
                </>
              ) : (
                <div className="no-data-transaction">No transaction</div>
              )}
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
