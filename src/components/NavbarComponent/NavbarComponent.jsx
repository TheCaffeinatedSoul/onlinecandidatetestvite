import React, { useEffect, useState } from "react";
import { headers } from "../../messages/constants";
import logo from "../../assets/Resources/4i_Blue Logo with GPTW-01-01.svg";
import "./NavbarComponent.css";
import { useCookies } from "react-cookie";
import { API_URL } from "../../api/api";
import axios from "axios";

export const NavbarComponent = () => {
  const [cookie, setCookie] = useCookies();

  const user = cookie.NAME;
  const token = cookie.TOKEN;
  const candidateId = cookie.CANDIDATE_ID;

  const [profilePhoto, setProfilePhoto] = useState("");

  const fetchCandidate = async () => {
    try {
      const response = await axios.get(`${API_URL}/profilephoto`, {
        params: {
          id: candidateId,
        },
        headers: {
          Authorization: token,
        },
      });
      setProfilePhoto(response.data.PROFILE_PHOTO);
    } catch (error) {
      console.log("Error fetching profile photo: ", error);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, [candidateId]);

  return (
    <div className="navbar">
      <div className="image">
        <img alt="4i Logo" src={logo} />
      </div>
      <div className="text-wrapper">{headers.mainHeader}</div>
      <div className="text-wrapper-sm">
        <div style={{ paddingRight: "0.5rem" }}>{user}</div>
        <div>
          <img
            src={profilePhoto}
            alt="profile"
            style={{
              height: "45px",
              width: "45px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
