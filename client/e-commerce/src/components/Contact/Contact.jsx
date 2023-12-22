import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaPinterest } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			<div className="wrapper">
				<span>BE IN TOUCH WITH US:</span>
				<div className="mail">
					<input type="text" placeholder="Enter your e-mail..." />
					<button>JOIN US</button>
				</div>
				<div className="icons">
					<FaFacebook />
					<BsInstagram />
					<BsTwitter />
					<FcGoogle />
					<FaPinterest />
				</div>
			</div>
		</div>
	);
};

export default Contact;
