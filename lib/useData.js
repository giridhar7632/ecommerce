import React, { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

const DataContext = createContext(null)

export const useData = () => useContext(DataContext)

export default function DataProvider({ children }) {
	const [showCart, setShowCart] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)
	const [cart, setCart] = useState([])
	const [products, setProducts] = useState(0)
	const [qty, setQty] = useState(1)

	let foundProduct, index

	const incQty = () => setQty((prev) => prev + 1)
	const decQty = () => {
		setQty((prev) => {
			if (prev - 1 < 1) return 1

			return prev - 1
		})
	}

	const handleAddToCart = (product, quantity) => {
		const checkProductInCart = cart.find((item) => item._id === product._id)

		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
		setProducts((prevTotalQuantities) => prevTotalQuantities + quantity)

		if (checkProductInCart) {
			const updatedCartItems = cart.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					}
			})

			setCart(updatedCartItems)
		} else {
			product.quantity = quantity

			setCart([...cart, { ...product }])
		}

		toast.success(`${qty} ${product.name} added to the cart.`)
	}

	const toggleCartItemQuantity = (id, value) => {
		foundProduct = cart.find((item) => item._id === id)
		index = cart.findIndex((product) => product._id === id)

		if (value === 'inc') {
			foundProduct.quantity += 1
			setCart([...cart.slice(0, index), foundProduct, ...cart.slice(index + 1)])
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
			setProducts((prevTotalQuantities) => prevTotalQuantities + 1)
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				foundProduct.quantity -= 1
				setCart([
					...cart.slice(0, index),
					foundProduct,
					...cart.slice(index + 1),
				])
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
				setProducts((prevTotalQuantities) => prevTotalQuantities - 1)
			}
		}
	}

	const handleRemoveCart = (product) => {
		foundProduct = cart.find((item) => item._id === product._id)

		setTotalPrice(
			(prevTotalPrice) => prevTotalPrice - foundProduct.price * product.quantity
		)
		setProducts(
			(prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
		)
		setCart(cart.filter((item) => item._id !== foundProduct._id))
	}

	return (
		<DataContext.Provider
			value={{
				showCart,
				setShowCart,
				cart,
				setCart,
				totalPrice,
				setTotalPrice,
				products,
				setProducts,
				qty,
				incQty,
				decQty,
				handleAddToCart,
				toggleCartItemQuantity,
				handleRemoveCart,
			}}>
			{children}
		</DataContext.Provider>
	)
}
