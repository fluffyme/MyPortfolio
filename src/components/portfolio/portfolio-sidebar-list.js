import React from "react";

const PortfolioSideBarList = props => {
  const PortfolioList = props.data.map(portolioItem => {
    return (
      <div className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portolioItem.thumb_image_url} />
        </div>
        <h1 className="title">{portolioItem.name}</h1>
        <h2>{portolioItem.id}</h2>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>;
};

export default PortfolioSideBarList;
