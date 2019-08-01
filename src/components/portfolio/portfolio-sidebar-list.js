import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSideBarList = props => {
  const PortfolioList = props.data.map(portolioItem => {
    return (
      <div key={portolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portolioItem.thumb_image_url} />
        </div>
        <div className="text-content">
          <div className="title">{portolioItem.name}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(portolioItem)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(portolioItem)}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>;
};

export default PortfolioSideBarList;
