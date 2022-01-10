import React, { Fragment } from "react";
import home from "./assets/img/home..jpg";
import luffy from "./assets/img/luffy.jfif";
import ace from "./assets/img/ace.jfif";
import sabo from "./assets/img/sabo.jfif";
import luffybadass from "./assets/img/luffy-bs.jfif";
import shanks from "./assets/img/shanks.jfif";
import roger from "./assets/img/roger.jfif";
import hat from "./assets/img/hat.jfif";
import cdp from "./assets/img/background.jpg";
import freres from "./assets/img/freres.jpg";
import duo from "./assets/img/duo.webp";
import crew from "./assets/img/creww.jpg";
import wanoo from "./assets/img/wano.jpg";
// import mf from "./assets/img/marineford.png";

export default function Home() {
  return (
    <Fragment>
      {/* <div>
        <img className="image-op" src={home} alt="" />
      </div> */}
      <div className="text-op">
        <h1>LEATHER BAGS</h1>
        <hr />
        <p>New Collection</p>
        <button>SHOP NOW</button>
      </div>
      <div class="images">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src={cdp}
                class="d-block w-100"
                alt="Background"
                height="800px"
                width="100px"/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={freres}
                class="d-block w-100"
                alt="3 freres"
                height="800px"
                width="100px"/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={duo}
                class="d-block w-100"
                alt="luffy zoro"
                height="800px"
                width="100px"/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={crew}
                class="d-block w-100"
                alt="Crew"
                height="800px"
                width="100px"/>
            </div>
            <div class="carousel-item">
              <img
                src={wanoo}
                class="d-block w-100"
                alt="Wano"
                height="800px"
                width="100px"/>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="c-soon">
        <div className="carte">
          <img src={luffy} alt="" />
          <button>COMING SOON</button>
        </div>
        <div className="carte">
          <img src={ace} alt="" />
          <button>COMING SOON</button>
        </div>
        <div className="carte">
          <img src={sabo} alt="" />
          <button>COMING SOON</button>
        </div>
      </div>
      {/* finish */}
      <div>
        <div className="products">
          <h3>OUR PRODUCTS</h3>
          <div className="prod-btn">
            <p className="btn">Best Seller</p>
            <p className="btn">New</p>
            <p className="btn">Sale</p>
            <p className="btn">Old</p>
          </div>
        </div>
        <div className="products-1">
          <div>
            <img src={luffybadass} alt="" />
            <p>LUFFYYYY</p>
            <p>10€</p>
          </div>
          <div>
            <img src={shanks} alt="" />
            <p>SHANKSSS</p>
            <p>10€</p>
          </div>
          <div>
            <img src={roger} alt="" />
            <p>ROGEEERR</p>
            <p>10€</p>
          </div>
          <div>
            <img src={hat} alt="" />
            <p>straw hat</p>
            <p>10€</p>
          </div>
        </div>
      </div>
      {/* <div className="parallax">
          {/* <img className="marineford" src={mf} alt="" /> */}
      {/* </div> */}
      <div className="marineford">
        <div className="parallax">
          <div className="txt">
            <h3>The Beauty</h3>
            <h2>LOOKBOOK</h2>
            <p>PLAY VIDEO</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
