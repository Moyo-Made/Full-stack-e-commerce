import React from "react";
import PaymentImage from "../images/payment.png";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						A Software Developer with developed competencies in frontend
						development, technical documentation, version control management,
						and performance tuning.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						A Software Developer with developed competencies in frontend
						development, technical documentation, version control management,
						and performance tuning.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">Madestore</span>
					<span className="copyright">
						&copy; Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div className="right">
					<img src={PaymentImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
