import React from "react";
import { Carousel } from "antd";
import "./style.css";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

const imgstyle = {
  ...contentStyle,
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
};

const Olinda = () => {
  return (
    <div className="carrousel">
      <Carousel autoplay>
        <div>
          <img
            src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/02/priscila-enquadramento-capa.jpg"
            style={imgstyle}
          />
        </div>
        <div>
          <img 
            src="https://s2-g1.glbimg.com/FZf8BMAJbNq2XGHRVfnd6DUDuDE=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/C/n/XpkXwpR72NEER9auC0Mg/olinda-carnaval.jpg" 
            style={imgstyle} />
        </div>
        <div>
          <img 
              src="https://media.istockphoto.com/id/1205589943/pt/foto/parade-of-giant-dolls-on-tuesday-of-carnival-in-olinda.jpg?s=612x612&w=0&k=20&c=_oCU9CJBLvkgCSSmO9E8-1qFEXWgmN-PYDuTCWy8t90=" 
              style={imgstyle} />
        </div>
        <div>
         <img src="https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/1067104-20170226_123904.jpg" 
              style={imgstyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default Olinda;
