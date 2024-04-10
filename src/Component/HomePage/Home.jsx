import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './Home.css';
import { AiTwotoneHome } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";
import SearchBar from '../SearchBar/SearchBar.jsx';
import villaImg1 from "../../assets/Images/villaImg1.jpeg";
import villaImg2 from "../../assets/Images/villaImg2.jpeg";
import villaImg3 from "../../assets/Images/villaImg3.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  const [clicks, setClicks] = useState([true, true, true]);
  const handleHeartClick = (index) => {
    setClicks((prevClicks) => {
      const newClicks = [...prevClicks];
      newClicks[index] = !newClicks[index];
      return newClicks;
    });
  };
  return (
    <>
      <div className="home-bg">
        <div className="bg-area">
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="Nearby">
                  <h1>
                    Find Your Nearby <span>Villas Weekend Homes</span>
                  </h1>
                  <h4>
                    Find some best places to spend your holiday in your own
                    city.

                  </h4>
                </div>
                <div className="need-place">
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar />
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="Browse">
                  <h3>Or Browse Popular Categories</h3>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <MdOutlineHouse />
                        <p>Farmhouse</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <AiTwotoneHome />
                        <p>Villa</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <HiHomeModern />
                        <p>Apartment</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <MdApartment />
                        <p>Weekend Home</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </section>
        </div>
      </div>

      <section className="section-padding">
        <div className="Most-Recommended">
          <div className="justify-content-center d-flex mb-5">
            <div className="col-lg-4">
              <h3>Most Recommended</h3>
            </div>
          </div>

          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-4 py-2">
                {/* <a href="/"> */}
                <div className="villa-card">
                  <img
                    src={villaImg1}
                    alt="img"
                />
                  <span className="poji">weekend home</span>
                  <div className="villa-card-body">
                    <div className="row">
                      <div className="col-lg-10">
                        <h5>FH168 | England Home 161</h5>
                      </div>
                      <div className="col-lg-2">
                        <div className="rating">
                          4.7
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="location">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>New dandi road, Surat.</span>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="price">
                          <span className="pay-price">2,705</span>
                          <strike className="show-price">8056</strike>
                          <span className="discount">66% off

                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2 ">
                        <div className="heart " onClick={() => handleHeartClick(0)}>
                          <div className=" col-1 col-lg-6 col-md-1 col-sm-1 heartmedia">
                            {clicks[0] ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div className="col-lg-4 py-2">
                {/* <a href="/"> */}
                <div className="villa-card">
                  <img src={villaImg2} alt="img" />
                  <div className="villa-card-body">
                    <div className="row">
                      <div className="col-lg-10">
                        <h5>FH168 | England Home 168

                        </h5>
                      </div>
                      <div className="col-lg-2">
                        <div className="rating">
                          4.7
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="location">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>New dandi road, Surat.</span>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="price">
                          <span className="pay-price">2,705</span>
                          <strike className="show-price">8056</strike>
                          <span className="discount">66% off</span>
                        </div>
                      </div>
                      
                      <div className="col-lg-2 ">
                        <div className="heart " onClick={() => handleHeartClick(1)}>
                          <div className=" col-1 col-lg-6 col-md-1 col-sm-1 heartmedia">
                            {clicks[1] ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>

              <div className="col-lg-4 py-2">
                {/* <a href="/"> */}
                <div className="villa-card">
                  <img src={villaImg3} alt="img"
                    className=" object-fit-scale"
                  />
                  <div className="villa-card-body">
                    <div className="row">
                      <div className="col-lg-10">
                        <h5>FH168 | England Home 168</h5>
                      </div>
                      <div className="col-lg-2">
                        <div className="rating">
                          4.7
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="location">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>New dandi road, Surat.</span>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="price">
                          <span className="pay-price">2,705</span>
                          <strike className="show-price">8056</strike>
                          <span className="discount">66% off</span>
                        </div>
                      </div>



                      <div className="col-lg-2 ">
                        <div className="heart " onClick={() => handleHeartClick(2)}>
                          <div className=" col-1 col-lg-6 col-md-1 col-sm-1 heartmedia ">
                            {clicks[2] ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    
                    
                    
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>


            </div>
          </div>
        </div>

      </section>
    </>
  );
}
