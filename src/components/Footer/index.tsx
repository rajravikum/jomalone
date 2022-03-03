import React from "react";
import './footer.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer-section">
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text text-white font-medium text-center">
                            <p>Copyright &copy; 2022, All Right Reserved Jomalone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  );
};

export default Footer;