import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Cart.scss";
import { useSelector } from "react-redux";

function Cart() {
	const products = useSelector((state) => state.cart.products);
	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{products?.map((item) => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">1 x ${item.price}</div>
					</div>

					<MdDeleteOutline className="delete" />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$123</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">Reset cart</span>
		</div>
	);
}

export default Cart;
