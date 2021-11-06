import React from "react";

import { SuperHerosModel } from "../../../domain/models/superHeros.mode";
import { SuperHerosService } from "../../../domain/services/superHeros.services";
import DetailView from "../../Containers/Detail";
import Header from '../../Containers/Header';
import { linkRoutes } from "../../Util/constants";

type DetailProps = {
  match:any
}

const Detail: React.FC<DetailProps> = ({ match }) => {
  const [superHeros, setSuperHeros] = React.useState<SuperHerosModel>(
    {
      nombre:'',
      avatarURL:'',
      id: 0,
      nombreReal: '',
      puedeVolar: false
    }
  );

  React.useEffect(()=>{
    getSuperHero();
  },[]);

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
      key: 1
    },
    {
      path: linkRoutes.Detail,
      breadcrumbName: 'Detalles',
      key: 2
    }
  ];

  const getSuperHero = async () => {
    try {
      const response = await SuperHerosService.find(match.params.id);
      setSuperHeros(response.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  return <>
    <Header 
    routes={routes} 
    />
    <DetailView
    superHeros={superHeros}/>
  </>;
};

export default Detail;