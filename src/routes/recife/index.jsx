import React from "react";
import "./style.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

const imageStyle = {
  ...contentStyle,
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
};

const Recife = () => {
  return (
    <div className="carousel-container">
      <Carousel autoplay>
        <div>
          <img
            style={imageStyle}
            src="https://bookers.s3.amazonaws.com/pages/carnaval-recife-3.jpg"
          />
        </div>
        <div>
          <img
            style={imageStyle}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhQWDoWCKlskULdPUtlAo0jBkG3HVQpzaMA&usqp=CAU"
          />
        </div>
        <div>
          <img
            style={imageStyle}
            src="https://www.contabeis.com.br/assets/img/news/n_45984_c5bbc0634e263b626edd07c1b03b43a9.jpg"
          />
        </div>
        <div>
          <img
            style={imageStyle}
            src="https://bookers.s3.amazonaws.com/pages/carnaval-recife-3.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Recife;
