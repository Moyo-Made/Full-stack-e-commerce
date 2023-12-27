import React, { useState } from "react";
import "./Product.scss";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineBalance } from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
	const id = useParams().id;
	const [selectedImages, setSelectedImages] = useState("img");
	const [quantity, setQuantity] = useState(1);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
	return (
		<div className="product">
			{loading ? (
				"loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImages("img")}
							/>
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img2?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImages("img2")}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes[selectedImages]?.data?.attributes?.url
								}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h1>{data?.attributes?.title}</h1>
						<span className="price">${data?.attributes?.price}</span>
						<p>{data?.attributes?.desc}</p>

						<div className="quantity">
							<button
								onClick={() =>
									setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
								}
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
				</>
			)}
		</div>
	);
};

export default Product;
