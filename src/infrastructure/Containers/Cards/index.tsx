import React from "react";
import { Button, Card, Input, Modal, Form, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './style.scss';
import CardSuperHero from "../../Components/Card";
import { SuperHerosModel } from "../../../domain/models/superHeros.mode";

type CardsProps = {
  superHerosSeleted:SuperHerosModel[];
  ChangeValue: any;
  showModal: any;
  isModalVisible:boolean;
  handleCancel: any;
  onFinish: any
}

const Cards:React.FC<CardsProps> = ({
  superHerosSeleted,
  ChangeValue,
  showModal,
  isModalVisible,
  handleCancel,
  onFinish
}) => {
  return<div style={{marginTop:'100px'}}>
  <Input onChange={(e)=>{ChangeValue(e.target.value);}} placeholder='Buscar...' suffix={<SearchOutlined />}/>
  <Button type="primary" onClick={showModal}>Añadir</Button>
    <Card
    >
      {
        superHerosSeleted.map(item=>
        <CardSuperHero 
        id={item.id}
        nombre={item.nombre}
        avatarURL={item.avatarURL}/>
        )
      }
    </Card>
    <Modal title="Añadir Súper héroe" visible={isModalVisible} footer={<></>}>
        <Form
        onFinish={onFinish}
        wrapperCol={{span:11}}
        labelCol={{span:10}}>
          <Form.Item
          label="Nombre del súper héroe"
          name="nombre"
          tooltip={{title:"Ej: Súperman, Wonder woman..."}}
          rules={[
            {
              required: true,
            },
          ]}>
            <Input/>
          </Form.Item>
          <Form.Item
          label="Nombre real"
          name="nombreReal"
          tooltip={{title:"Ej: Peter Benjamin Parker, Bruce Banner..."}}
          rules={[
            {
              required: true,
            },
          ]}>
            <Input/>
          </Form.Item>
          <Form.Item
          label="¿Puede Volar?"
          name="puedeVolar"
          rules={[
            {
              required: true,
            },
          ]}>
            <Radio.Group>
              <Radio value={true}>Si</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
          label="URL del Avatar"
          tooltip={{title:"Debe terminar en jpg o png Ej: http...jpg"}}
          name="avatarURL"
          rules={[
            {
              required: true,
            },
          ]}>
            <Input/>
          </Form.Item>
          
          <Button htmlType='submit' type="primary">Guardar</Button> <Button htmlType='button' onClick={()=>handleCancel()}>Cancelar</Button>
        </Form>
      </Modal>
  </div>;
};

export default Cards;