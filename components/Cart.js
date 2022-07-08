import { useRef } from 'react'
import Link from 'next/link'
import { useData } from '../lib/useData'
import { Minus, Plus, Trash, LeftArrow, Bag } from '../lib/icons'
import { urlFor } from '../lib/client'

const Cart = () => {
	const {
		totalPrice,
		products,
		cart,
		setShowCart,
		toggleCartItemQuantity,
		handleRemoveCart,
	} = useData()
	const cartRef = useRef(null)

	return (
		<div className='cart-wrapper' ref={cartRef}>
			<div className='cart-container'>
				<button
					type='button'
					className='cart-heading'
					onClick={() => setShowCart(false)}>
					<LeftArrow />
					<span className='heading'>Your Cart</span>
					<span className='cart-num-items'>({products}items)</span>
				</button>

				{cart.length < 1 && (
					<div className='empty-cart'>
						<Bag size={100} />
						<h3>Your cart is empty</h3>
						<Link href='/'>
							<a>
								<button
									type='button'
									className='btn'
									onClick={() => setShowCart(false)}>
									Continue Shopping
								</button>
							</a>
						</Link>
					</div>
				)}

				<div className='product-container'>
					{cart?.length >= 1 &&
						cart.map((item) => (
							<div className='product' key={item._id}>
								<img
									src={urlFor(item?.image[0])}
									className='cart-product-image'
									alt={item?.name}
								/>
								<div className='item-desc'>
									<div className='flex top'>
										<h5>{item?.name}</h5>
										<h4>${item?.price}</h4>
									</div>
									<div className='flex bottom'>
										<div>
											<p className='quantity-desc'>
												<span
													className='minus'
													onClick={() =>
														toggleCartItemQuantity(item._id, 'dec')
													}>
													<Minus />
												</span>
												<span className='num'>{item.quantity}</span>
												<span
													className='plus'
													onClick={() =>
														toggleCartItemQuantity(item._id, 'inc')
													}>
													<Plus />
												</span>
											</p>
										</div>
										<button
											type='button'
											className='remove-item'
											onClick={() => handleRemoveCart(item)}>
											<Trash />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cart?.length >= 1 && (
					<div className='cart-bottom'>
						<div className='total'>
							<h3>Subtotal:</h3>
							<h3>${totalPrice}</h3>
						</div>
						<div className='btn-container'>
							<button type='button' className='btn'>
								Pay with Stripe
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
