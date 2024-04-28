import { useRef, useState, useEffect,useContext } from "react";
import {Cart} from "./Cart";
import { CartContext } from "../context";
import { ShowCartContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  const { cart, setCart } = useContext(CartContext);  
  const { showCart, setShowCart } = useContext(ShowCartContext);  
  const savedCart = localStorage.getItem("cart");
  
   useEffect(()=>{
        const savedItem =localStorage.getItem('cart')
        setCart(JSON.parse(savedItem));
   },[])

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScrolled(true);
    }

    if (window.scrollY < 1) {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  

  const navStyle = {
    backdropFilter: scrolled ? "blur(8px) brightness(1.2)" : "none",
    color: scrolled ? "black" : "white",
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "transparent",
    width: "100vw",
    transition: scrolled
      ? "height 0.6s ease-in-out"
      : "height 0.6s ease-in-out",
    height: scrolled ? "60px" : "40px",
    marginTop: scrolled ? "-4px" : "none",
    position: scrolled ? "fixed" : "absolute",
    top: scrolled ? "0" : "15px",
    paddingTop: scrolled ? "8px" : "0",
    left: "0",

    right:"0",
    zIndex: "99999999999999999999999999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowX:"unset"
  };

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  async function play(videoRef) {
    try {
      videoRef.current.play();
    } catch (error) {
      console.error(error);
    }
  }
  async function pause(videoRef) {
    try {
      videoRef.current.pause();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>     

   
      <div className="header-box">
        <div className="cliped-back"> </div>
        <nav className="nav-box" style={navStyle}>
          <div className="nav-content">
            <div
              className="logo"
              style={{
                backgroundImage: scrolled
                  ? "url('/new-black-logo.png')"
                  : "url('/logo-8d8ce0ec.png')",
                height: scrolled ? "100%" : "98%",
                width: scrolled ? "8.5rem" : "5.5rem",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="icon-box"
              style={{ color: scrolled ? "black" : "white" }}
            >
              <div className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <div className="cart"  style={{position:'relative'}}  onClick={() => setShowCart(true)}>
              <p style={{backgroundColor:scrolled?'black':'white',width:'17px',borderRadius:'50%', height:'17px',color:scrolled?'white':'black',position:'absolute',top:'16px',right:'-5px',fontSize:'13px',display:'flex',justifyContent:'center',alignItems:'center',zIndex:"999999"}}>
              {cart?.length || 0}
              </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-section">
          <div className="heading">
            <h1 className="head">Play With Electric Nike</h1>
            <h1 className="head">Adapt 2.0 Sneakers {scrolled}</h1>
            <button className="explore-btn">Explore Store</button>
            <div className="shoe"> </div>
          </div>
          <div className="hero-content">
            <div className="videos">
              
              <video
                className="video1"
                ref={video1Ref}
                onMouseOver={() => play(video1Ref)}
                onMouseLeave={() => pause(video1Ref)}
                muted
                loop
              >
                <source src="/clip-add.mp4" type="video/mp4"></source>
              </video>
              <video
                className="video2"
                ref={video2Ref}
                onMouseOver={() => play(video2Ref)}
                onMouseLeave={() => pause(video2Ref)}
                muted
                loop
              >
                <source src="/clip-add.mp4" type="video/mp4"></source>
              </video>
              <video
                className="video3"
                ref={video3Ref}
                onMouseOver={() => play(video3Ref)}
                onMouseLeave={() => pause(video3Ref)}
                muted
                loop
              >
                <source src="/clip-add.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div className="media-icons">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="facebook-icon social-icon"
              />
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="messenger-icon social-icon"
              />

              <FontAwesomeIcon
                icon={faTwitter}
                className="twitter-icon social-icon"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="instagram-icon social-icon"
              />
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};
