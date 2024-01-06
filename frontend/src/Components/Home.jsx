import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import logo from '../assets/og.png'
import pic from '../assets/HOME.png'
import pic2 from '../assets/HOME2.png'

import useAppContext from '../AppContext';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);

  const { logout, loggedIn, setLoggedIn } = useAppContext();

  console.log(isLoggedIn);

  const { githubusername } = useParams();

  console.log(githubusername);

  const getGithubData = async () => {
    const res = await fetch(`http://localhost:3000/user/${githubusername}`);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoggedIn(true);
      setCurrentUser(data.displayName);
    }
  }

  useEffect(() => {
    if (githubusername)
      getGithubData();
  }, []);


  const showLoginOption = () => {

    if (loggedIn) {
      return (
        // <button type="submit" className='login-container' >
        // <div className="dropdown">
        //   <button className="dropbtn login-container" >{currentUser.}</button>
        //   <div className="dropdown-content">
        <button className="login-container btn" onClick={logout} >
          Logout
        </button>
        //   </div>
        // </div>
      )
    }
    else {
      return (
        <Link type="submit" to="/Login" className="login-container btn" >Login

        </Link>
      )
    }
  }


  return (
    <div>
      <div className="row">
        <div className="col-md-1 h-col">
          {/* <i className="fas fa-bars burger-icon" onClick={openNav}></i> This is the burger icon */}
        </div> 
        <section className="col-md-11 swipe">
          <Swiper
            spaceBetween={30}
            effect={'fade'}

            pagination={{
              clickable: true,
            }}

            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
             <SwiperSlide>
              <div className="bg-img">

                <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "90vh" }}>


                  <div className="container d-flex flex-column justify-content-center text-white" style={{ height: "80vh" }}>
                    <h1 className="mb-4" style={{ fontSize: '100px',letterSpacing:'8px', fontFamily: 'sans-serif', fontWeight: 'bolder',}}>OpenGalaxy</h1>
                    <p className='' style={{ fontSize: '30px', fontFamilt: 'serif'}}>Welcome to an open-source internship platform</p>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-img-2">

                <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "90vh" }}>


                  <div className="container d-flex flex-column  justify-content-center  text-white" style={{ height: "70vh" }}>
                    <h1 className="mb-4" style={{fontSize: '70px', fontFamily: 'sans-serif', fontWeight: 'bolder', marginTop: '100px'}}>Gain Real-World Experience</h1>
                    <p className='' style={{ fontSize: '30px', fontFamilt: 'serif'}}>Contribute to projects that people depend on, <br/> not a side project that never sees the light of day</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-img-2">

                <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "90vh" }}>


                  <div className="container d-flex flex-column  justify-content-center  text-white" style={{ height: "70vh" }}>
                    <h1 className="mb-4" style={{fontSize: '70px', fontFamily: 'sans-serif', fontWeight: 'bolder', marginTop: '100px'}}>Join a Community</h1>
                    <p className='' style={{ fontSize: '30px', fontFamilt: 'serif'}}>Don't go alone. You'll join a network of other <br/> talented builders & professional mentors.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>
        <div className="">
          {showLoginOption()}
        </div>
        <img src={logo} alt="" className="h-logo" />

        {/* next section */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={pic2} alt="" className='w-75' />
            </div>
            <div className="col-md-6 ">
              <h5 className='home-txt'>What exactly is the</h5>
              <h5 className='home-txt2 '>Open Source Track</h5>
              <p className='home-txt-p'>"Given enough eyeballs, all bugs are shallow"</p>
              <p className='home-txt-p2 '>This Open Source Internship Platform provides a transformative experience, offering interns hands-on learning, skill development, and a global network. By contributing to real projects, interns enhance their portfolios and make a meaningful impact. Emphasizing open source culture, the program prepares interns for industry demands, creating a pathway to a successful career in technology.</p>
            </div>
          </div>
        </div>

        {/* next section */}
        <div className="container">
          <h2 className="text-learn">Learn by doing, not by watching</h2>
          <p className="text-center fs-5 mt-4 mb-5"> We pair fun, educational curriculum with real-world practical experience.<br /> It's collaborative, remote, & happens under the guidance of expert mentors.</p>


          {/* left */}
          <div className="row">
            <div className="col-md-4">

              <div className="row mb-3 mt-3">
                <div className="col-">
                  <div className="row">
                    <div className="col-md-9" style={{ marginLeft: '35px' }}>
                      <h5 className="mt-4 text-end fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color: "darkblue" }}>REAL-WORLD EXPERIENCES</h5>
                      <p className=" mt-3 mb-3 text-end "> Students gain practical, applicable experience by working on real-world projects.</p>
                    </div>

                    <div className="col-md-2">
                      <i className="fa-solid fa-globe  fs-3" style={{ marginTop: "30px", color:"darkblue" }}></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-">
                  <div className="row mb-3">
                    <div className="col-md-9" style={{ marginLeft: '30px' }}>
                      <h5 className="mt-4 text-end fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color: "darkblue" }}>PORTFOLIO BUILDING</h5>
                      <p className=" mt-3 mb-3 text-end "> Contributions become tangible evidence in a student's portfolio.</p>
                    </div>

                    <div className="col-md-2">
                      <i className="fa-solid fa-file  fs-3" style={{ marginTop: "30px", color:"darkblue" }}></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-">
                  <div className="row">
                    <div className="col-md-9" style={{ marginLeft: '30px' }}>
                      <h5 className="mt-4 text-end fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color: "darkblue" }}>COMMUNITY ENGAGEMENT</h5>
                      <p className=" mt-3 mb-3 text-end ">  Connect with professionals and mentors globally. Get Exposure to diverse viewpoints and challenges.</p>
                    </div>

                    <div className="col-md-2">
                      <i className="fa-solid fa-users  fs-3" style={{ marginTop: "30px",color:"darkblue"}}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* center */}
            <div className="col-md-4">
              <img src={pic} className='home-part-img' alt="" />

            </div>


            {/* right */}
            <div className="col-md-4">
              <div className="row mb-3 mt-3" >
                <div className="col-" >
                  <div className="row">

                    <div className="col-md-2">
                      <i className="fa-solid fa-pen ms-2 fs-3" style={{ marginTop: "30px", color: "darkblue" }}></i>
                    </div>
                    <div className="col-md-9">
                      <h5 className="mt-4  fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color:"darkblue" }}>CONTRIBUTION TO MEANINGFUL PROJECTS </h5>
                      <p className=" mt-3 mb-3  "> Contribute to projects with a positive societal impact.</p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-">
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <i className="fa-regular fa-gem  fs-3" style={{ marginTop: "30px", color:"darkblue" }}></i>
                    </div>

                    <div className="col-md-9">
                      <h5 className="mt-4  fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color:"darkblue" }}>SKILL DEVELOPMENT</h5>
                      <p className="mt-3 mb-3 ">Students enhance technical proficiency. Develop communication, teamwork, problem-solving, and time management skills.</p>
                    </div>


                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-">
                  <div className="row">
                    <div className="col-md-2">
                      <i className="fa-regular fa-file  fs-3" style={{ marginTop: "30px",color:"darkblue" }}></i>
                    </div>
                    <div className="col-md-9">
                      <h5 className="mt-4  fw-bold" style={{ fontFamily: "serif", fontSize: "17px", letterSpacing: "2px", color:"darkblue" }}>OPEN SOURCE CULTURE</h5>
                      <p className="mt-3 mb-3 "> Exposure to a culture of transparency, collaboration, and knowledge-sharing.</p>
                    </div>


                  </div>
                </div>

              </div>

            </div>
          </div>

        </div >




        {/* next section */}
        {/* <section>
          <div className="homebg-img-2" >
            <div className="container-fluid bg-dark bg-opacity-25 " style={{ position: "relative", height: "90vh" }}>
              <div className="container " style={{ height: "90vh" }}>
                <div className="row ">
                  <div className="col-md-4" >
                    <div className="card bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                      <h6 className="home-card-head">EVERYTHING IS AWESOME</h6>
                      <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>
                    </div>
                    <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img className='card-img-home' src="https://i.pinimg.com/564x/15/03/f6/1503f6352fb72ef76d67a45f23ec0dc9.jpg" alt="" />

                        </div>
                        <div className="col-md-6">
                          <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>EMILIA MOLER</h5>
                          <p className="text-white ms-3 fw-semibold">pr manager</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-4" >
                    <div className="card  bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                      <h6 className="home-card-head">FANTASTIC WEB SKILLS</h6>
                      <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>

                    </div>

                    <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img className='card-img-home' src="https://i.pinimg.com/564x/0b/58/2f/0b582f85c092dbaefa55f4508bf06b8d.jpg" alt="" />

                        </div>
                        <div className="col-md-6">
                          <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>UNO MATTES</h5>
                          <p className="text-white ms-3 fw-semibold mb-3">developer</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-4" >
                    <div className="card  bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                      <h6 className="home-card-head">AMAZING SUPPORT TEAM</h6>
                      <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>

                    </div>

                    <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img className='card-img-home' src="https://i.pinimg.com/564x/af/d2/bd/afd2bd0cf55eb83819da40f7c544c3f0.jpg" alt="" />

                        </div>
                        <div className="col-md-8">
                          <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>MARIA WILIAMS</h5>
                          <p className="text-white ms-3 fw-semibold mb-3">designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* footer */}
        <footer className='mt-5'>
          <div className="bg-img-4">
            <div className="container-fluid bg-opacity-50" style={{ height: "60vh", backgroundColor:'#02084b', width:'80%' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mt-5 text-white text-center">
                    <span className="fs-1 text-white  fw-bold" style={{ fontFamily: "sans-serif" }}>OpenGalaxy</span>

                    <p className="footer-text">Unlock the doors to knowledge, collaboration, and real-world impact</p>
                    <i className="fa-brands fa-twitter fs-5 text-white"></i>
                    <i className="fa-brands fa-facebook ms-2 fs-5 text-white"></i>
                    <i className="fa-brands fa-instagram ms-2 fs-5 text-white"></i>
                    <p className="mt-2 mb-1 footer-text">+91 7269095830</p>
                    <p className="mb-1 footer-text">opengalaxy12@gmail.com</p>
                    <p className="mb-4 footer-text">Hazratganj,Lucknow</p>
                  </div>
                  <div className="col-md-6 mt-5 text-white text-center">
                    <h5 className="mb-4 mt-4 footer-head">Quick Links</h5>
                    <Link to="/Home" className="nav-link"> <p className='footer-text'>Home</p></Link>
                    <Link to="/Shop" className="nav-link"><p className="footer-text">Signup</p></Link>
                    <Link to="/AboutUs" className="nav-link">  <p className="footer-text">Login</p></Link>
                    <Link to="/Login" className="nav-link"><p className="footer-text">Project</p></Link>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-center text-danger p-4" style={{ fontFamily: "cursive" }}>@2023 | All Right Reserved</p>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Home