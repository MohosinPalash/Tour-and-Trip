import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                            <h3>TOUR & TRIP</h3>
                            <p className="paragraph">We are always concern to make your holidays beautiful and charming. And try to give you the best service in the city. We are very careful about our Tourist People.</p>

                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                            <h3>DEVELOPER INFO</h3>
                            <ul>
                                <li>MOHOSIN ISLAM PALASH</li>
                                <li>Mobile: 01676336205</li>
                                <li>Email: mp@gmail.com</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-three md-mb-30 sm-mb-30">
                            <h3>FOLLOW US</h3>
                            <p className="paragraph">We are available in social medias. You may contact us from 10 AM to 10 PM. And our executive
                                member will reply you as soon as possible </p>

                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-four md-mb-30 sm-mb-30">
                            <h3>CONTACT US</h3>
                            <p className="paragraph">We take any feedback with great interest. You may also be a part of makin our activity
                                smoother just typing a text in the below box and tap on the sen dbutton.</p>
                            <form action="">
                                <input type="email" />
                                <input type="submit" value="Send" />

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <p className="footer-bottom-text paragraph">All rights reserved by &copy; MEDICA 2021</p>
        </div>
    );
};

export default Footer;