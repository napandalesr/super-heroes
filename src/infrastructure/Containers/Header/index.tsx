import React from "react";
import { PageHeader } from 'antd';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './style.scss';

type RouteProps = {
  routes: any
};

const Header: React.FC<RouteProps> = ({routes}) => {
  const {scroll} = useSelector((state:any) => state.scroll);
  return <>
  <PageHeader
    className="site-page-header"
    title={<div style={{color:scroll>50 ? 'white' : 'black'}}>SUPERHÉROES</div>}
    style={{
      backgroundColor:scroll>50 ? 'black' : 'white', 
      color:scroll>50 ? 'white' : 'black', 
      position:'fixed',
      zIndex: 5,
      width: '100%',
      top: 0
    }}
    breadcrumb={<>{routes.map((item:any) =><>
      {item.key !== routes.length ? <><Link to={item.path}>{item.breadcrumbName}</Link> / </> : item.breadcrumbName}
    </>)}</>}
    subTitle={<div style={{color:scroll>50 ? 'white': 'black' }}>prueba técnica</div>}
  /></>;
};

export default Header;