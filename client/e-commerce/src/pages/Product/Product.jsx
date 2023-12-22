import React, { useState } from "react";
import "./Product.scss";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineBalance } from "react-icons/md";

const Product = () => {
	const [selectedImages, setSelectedImages] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
	];
	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={(e) => setSelectedImages(0)} />
					<img src={images[1]} alt="" onClick={(e) => setSelectedImages(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImages]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$19.9</span>
				<p>
					A Software Developer with developed competencies in frontend
					development, technical documentation, version control management, and
					performance tuning.
				</p>

				<div className="quantity">
					<button
						onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
					>
						-
					</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className="add">
					<MdAddShoppingCart /> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<MdFavoriteBorder /> ADD TO WISH LIST
					</div>
					<div className="item">
						<MdOutlineBalance /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
					<hr />
				</div>

				<div className="desc">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
