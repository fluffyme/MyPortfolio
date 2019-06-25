import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    };
  }

  getPortfolioItems() {
    axios
      .get("https://alisnic.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <p>Portfolio Form</p>
        </div>

        <div className="right-column">
          <PortfolioSideBarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}
