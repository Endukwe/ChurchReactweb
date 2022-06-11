import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/images/wave-haikei (4).svg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "0px solid #697dac",
      }}
    >
      <div className="mt-0 pt-5 pb-5 footer">
        <div className="container pt-5">
          <div className="row mt-5">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2 style={{ color: "#697dac" }}>BSAG(Crown of Glory)</h2>
              <p className="pr-5 text-secondary">
                Our mission and vision as a church is to help people all over
                get revived to a new life, new beginning, be liberated, healed,
                freed from captivity and affliction, while adding meaning to
                their lives through the holy spirit that has mandated the church{" "}
              </p>
              <p className="text-secondary">
                <a href=" ">
                  <i class="fa fa-facebook-square mr-1"></i>
                </a>
                <a href=" ">
                  <i class="fa fa-linkedin-square"></i>
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3" style={{ color: "#697dac" }}>
                Links
              </h4>
              <ul className="m-0 p-0">
                <li>
                  -
                  <Link
                    to="#about"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    <>About</>
                  </Link>
                </li>
                <li>
                  -{" "}
                  <Link
                    to="#ministries"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    Ministries
                  </Link>
                </li>
                <li>
                  -{" "}
                  <Link
                    to="#sermon"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    <>Sermons</>
                  </Link>
                </li>
                <li>
                  -{" "}
                  <Link
                    to="#requestprayer"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    <>Prayer Request</>
                  </Link>
                </li>
                <li>
                  -
                  <Link
                    to="#testimonies"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    <>Testimonies</>
                  </Link>
                </li>
                <li>
                  -{" "}
                  <Link
                    to="#blog"
                    smooth
                    activeClassName="selected"
                    activeStyle={{ color: "#697dac" }}
                    style={{ textDecoration: "none" }}
                  >
                    <>Blog</>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4" style={{ color: "#697dac" }}>
                Location
              </h4>
              <p style={{ color: "whitesmoke" }}>
              No 31 Anam Street, Omagba phase II Onitsha, Anambra State
              </p>
              <p className="mb-0" style={{ color: "whitesmoke" }}>
                <i class="fa fa-phone mr-3"></i>08035839222
              </p>
              <p style={{ color: "whitesmoke" }}>
                <i class="fa fa-envelope-o mr-3"></i>blissfulspringark@gmail.com
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small class="text-white-50">
                BSAC © 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
