import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Hat",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},

		{
			id: 3,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Coat",
			isNew: false,
			oldPrice: 20,
			price: 12,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Skirt",
			isNew: false,
			oldPrice: 20,
			price: 12,
		},
	];

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					process.env.REACT_APP_API_URL + "/products",
					{
						headers: {
							Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
						},
					}
				);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					A Software Developer with developed competencies in frontend
					development, technical documentation, version control management, and
					performance tuning.
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
