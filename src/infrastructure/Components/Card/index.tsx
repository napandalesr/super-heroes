import React from "react";
import { Link } from 'react-router-dom';
import { Card, Image } from 'antd';
import { linkRoutes } from "../../Util/constants";

const { Meta } = Card;

type CardSuperHeroProps = {
  id:number,
  nombre: string,
  avatarURL: string
}

const CardSuperHero: React.FC<CardSuperHeroProps> = ({
  id, 
  nombre, 
  avatarURL
}) => {
  const gridStyle = {
    width: "360px",
    height: "500px",
  };
  return<>
    <Card.Grid style={gridStyle}>
      <Card
      hoverable
      cover={<Image
        style={{height:'340px',objectFit:'cover'}}
        src={avatarURL}
        alt={nombre}
      />}
      >
        <Meta title={nombre} description={<Link to={`${linkRoutes.Detail}/${id}`}>Ver más</Link>} />
      </Card>
    </Card.Grid>
  </>;
};

export default CardSuperHero;