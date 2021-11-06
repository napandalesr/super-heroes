import { notification } from "antd";
import React from "react";
import { SuperHerosModel } from "../../../domain/models/superHeros.mode";
import { SuperHerosService } from "../../../domain/services/superHeros.services";
import Cards from "../../Containers/Cards";
import Header from '../../Containers/Header';

const Home = () => {
  const [superHeros, setSuperHeros] = React.useState<SuperHerosModel[]>([]);
  const [superHerosSeleted, setSuperHerosSeleted] = React.useState<SuperHerosModel[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  React.useEffect(()=>{
    getSuperHeros();
  },[]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Home',
      key: 1
    }
  ];

  const ChangeValue = (value:string) => {
    
    if(value===''){
      setSuperHerosSeleted(superHeros);
    }else
    setSuperHerosSeleted(superHerosSeleted.filter(item=>item.nombre.toLowerCase().includes(value.toLowerCase())));
  };

  const getSuperHeros = async() =>{
    try {
      const response = await SuperHerosService.findAll();
      setSuperHeros(response.data);
      setSuperHerosSeleted(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async(data:SuperHerosModel) => {
    try {
      data.id=superHeros.length+1;
      const response = await SuperHerosService.create(data);
      if ([200, 201, 203, 204].indexOf(response.status) > -1) {
        notification.success({
          message: "Solicitud exitosa",
          description: "Los datos han sido guardados correctamente",
          duration: 5,
        });
        setTimeout(()=>{location.reload();},5);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <>
  <Header 
  routes={routes} />
  <Cards
  superHerosSeleted={superHerosSeleted}
  ChangeValue={ChangeValue}
  showModal={showModal}
  isModalVisible={isModalVisible}
  handleCancel={handleCancel}
  onFinish={onFinish}/>
  </>;
};

export default Home;