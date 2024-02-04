import React, { useState } from "react";
import { Carousel, Button, Modal } from "antd";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenTumara, setIsModalOpenTumaraca] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showModalTumaraca = () => {
    setIsModalOpenTumaraca(true);
  };

  const closeModalTumaraca = () => {
    setIsModalOpenTumaraca(false);
  };

  return (
    <div>
      <div className="carrousel">
        <Carousel autoplay>
          <div>
            <img
              src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/02/priscila-enquadramento-capa.jpg"
              style={imgstyle}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://s2-g1.glbimg.com/FZf8BMAJbNq2XGHRVfnd6DUDuDE=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/C/n/XpkXwpR72NEER9auC0Mg/olinda-carnaval.jpg"
              style={imgstyle}
              alt="Slide 2"
            />
          </div>
        </Carousel>
      </div>

      <div className="atrações">
        <div>
          <Button type="primary" onClick={showModalTumaraca}>
            Ensaio Tumaraca - Raízes de Pai Adão
          </Button>
          <Modal
            style={{ marginTop: "15px" }}
            title="Informações"
            visible={isModalOpenTumara}
            onOk={closeModal}
            onCancel={closeModalTumaraca}
          >
            <p>
              O ensaio comunitário chega ao Sítio de Pai Adão, sede do Maracatu
              Nação Raízes de Pai Adão.
            </p>
            <p>Horário: 19h </p>
            <p>Quinta-feira -01/02/2024- </p>
            <p>Local: Sítio de Pai Adão, na Estrada Velha de Água Fria</p>
          </Modal>
        </div>

        <div>
          <Button type="primary" onClick={showModal} style={{marginTop: '15px'}}>
            Bloco Balança Rolha
          </Button>
          <Modal
            style={{ marginTop: "15px" }}
            title="Informações"
            visible={isModalOpen}
            onOk={closeModal}
            onCancel={closeModal}
          >
            <p>Atrações: Madeira Delay, Orquestra de Frevo e Clara Sobral.</p>
            <p>Horário: 17h </p>
            <p>Sexta-feira -02/02/2024- </p>
            <p>
              Local: calçadão da Avenida Boa Viagem, 2170 - Quiosque 13 do Posto
              5
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Olinda;
