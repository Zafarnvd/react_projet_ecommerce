import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div container>
          <div className="us" row>
            <div className="git" col-4>
              <h3>GET IN TOUCH</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Totam, illo. Numquam ut.
              </p>
              <div>
                <button>
                  <i class="fab   fa-facebook"></i>
                </button>
                <button>
                  <i class="fab   fa-instagram"></i>
                </button>
                <button>
                  <i class="fab   fa-pinterest-square"></i>
                </button>
                <button>
                  <i class="fab   fa-snapchat-ghost"></i>
                </button>
                <button>
                  <i class="fab   fa-youtube"></i>
                </button>
              </div>
            </div>
            <div className="link" col-4>
              <h3>LINKS</h3>
              <p>Search</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Returns</p>
            </div>
            <div className="links" col-4>
              <h3>LINKS</h3>
              <p>Search</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Returns</p>
            </div>
          </div>
        </div>
        <div className="copy">
          <div>
            <i class="fab fa-cc-paypal"></i>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-amex"></i>
            <i class="fab fa-cc-discover"></i>
          </div>
          <p>
            Copyright <i class="far fa-copyright"></i> All rights reserved
          </p>
        </div>
      </footer>
    </Fragment>
  );
}
