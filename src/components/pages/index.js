import React from "react";
import video from "./videos/college-video.mp4";
import "./styles/Layout.css";
import { Row, Col } from "react-bootstrap";

const Video = () => {
  return (
    <React.Fragment>
      <div>
        <video autoPlay playsInline muted src={video} />
      </div>
    </React.Fragment>
  );
};

const Home = () => {
  return (
    <div>
      <Video />
    </div>
  );
};

export default Home;
