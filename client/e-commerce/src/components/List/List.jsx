import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
	//filter for products, checkbox, maxprice and sort
	const products = `/products?populate=*&[filters][categories][id]=${catId}`;
	const subCategoryQuery = subCats
		.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
		.join("");
	const price = `&[filters][price][$lte]=${maxPrice}`;
	const forSort = `&sort=price:${sort}`;

	const { data, loading } = useFetch(
		`${products}${subCategoryQuery}${price}${forSort}`
	);

	return (
		<div className="list">
			{loading
				? "loading"
				: data?.map((item) => <Card item={item} key={item.id} />)}
		</div>
	);
};

export default List;
