import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Product = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);

	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					<div className="inputItem">
						<input type="checkbox" value={1} id="1" />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" value={2} id="2" />
						<label htmlFor="2">Skirts</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" value={3} id="3" />
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter by price</h2>
					<span>0</span>
					<input
						type="range"
						min={0}
						max={1000}
						onChange={(e) => setMaxPrice(e.target.value)}
					/>
					<span>{maxPrice}</span>
				</div>
				<div className="filterItem">
					<h2>Sort by</h2>
					<div className="inputItem">
						<input
							type="radio"
							value="asc"
							id="asc"
							name="price"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price(Lowest first)</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							value="desc"
							id="desc"
							name="price"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price(Highest first)</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img
					className="catImg"
					src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				<List catId={catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	);
};

export default Product;
