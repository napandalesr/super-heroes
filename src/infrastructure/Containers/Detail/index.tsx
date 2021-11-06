import React from "react";
import { Col, Divider, Row, Typography } from 'antd';

import { SuperHerosModel } from "../../../domain/models/superHeros.mode";

const { Title } = Typography;

type DetailViewProps = {
  superHeros:SuperHerosModel
}

const DetailView: React.FC<DetailViewProps> = ({superHeros}) => {
  return <div style={{padding:'50px', marginTop:'80px'}}>
    <Row>
      <Divider orientation="left"><Title>{superHeros.nombre}</Title></Divider>
    </Row>
    <Row>
      <Col lg={{span:8}}>
        <img src={superHeros.avatarURL} style={{width:'100%'}}/>
      </Col>
      <Col lg={{span:8, offset: 2}}>
        <Row>
          <Col span={24}>
            <Title level={3}>Nombre real</Title>
          </Col>
          <Col span={24}>
            {superHeros.nombreReal}
          </Col>
        </Row>
        <Row>
        <Title level={5}>{superHeros.puedeVolar && 'Puede volar'}</Title>
        </Row>
      </Col>
    </Row>
  </div>;
};

export default DetailView;