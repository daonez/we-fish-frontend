import React, { Component } from "react"
import Nav from "../component/nav/Nav"
import NavSideBar from "../component/nav/NavSideBar/NavSideBar"
import NavSideBarLogin from "../component/nav/NavSideBar/NavSideBarLogin"
import NavMypage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage"
import NavOrderList from "../component/nav/NavSideBar/NavSideBarChild/NavOrderList"
import NavReview from "../component/nav/NavSideBar/NavSideBarChild/NavReview"
import NavMyPage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage"
import "../styles/layout.scss"
import SectionLeft from "../component/LayoutLeft"
import Slideshow from "../component/navAdd/Slideshow"
import NavFooter from "../component/navAdd/NavFooter"
import NavCart from "../component/navAdd//NavCart"
import Selector from "../pages/product/Selector_button"
import "../styles/product.scss"

class SearchResult extends Component {
    state = {
        search_results:[]
    };
    componentDidMount() {
      this.fetchProduct();
    }

    componentDidUpdate(prevProps, prevState) {
      if (
        prevProps.location.search.split("=")[1] !==
        this.props.location.search.split("=")[1]
      ) {
        this.fetchProduct();
      }
    }


    fetchProduct() {
      const queryId = this.props.location.search.split("=")[1];

      fetch(`http://52.78.241.65:8000/product/search?keyword=${queryId}`)
        .then(request => request.json())
        .then(request => {
          console.log("여기가 request다: ", request);
          this.setState({ search_results: request.search_results });
        });
    }
  render() {
    const { search_results } = this.state;
    console.log("this.state:",this.state);
    return (
      <>
        <div>
          <Nav>
            <div className="content-wrapper">
              <section className="product-main-container">
                <div className="productList-section">
                  <div className="productList__nav">
                  </div>
                  <ul className="productList">
                    {search_results && search_results.map(item => (
                      <li className="product-item">
                        <div className="productCard">
                          <div className="parent">
                            <img src={item.image_url} alt="" />
                          </div>
                        </div>
                        <div className="productCardContent">
                          <h1>{item.name}</h1>
                          <p>
                            <span>{item.price}</span>원
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </Nav>
          
        </div>
        <div className="wrap">
          <SectionLeft />
          <section className="section-right">
            <section className="section-right__main" />
          </section>
        </div>
      </>
    )
  }
}

export default SearchResult
