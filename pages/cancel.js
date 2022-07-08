import { useEffect } from 'react'
import Link from 'next/link'
import { useData } from '../lib/useData'
import Meta from '../components/Meta'

const Success = () => {
	const { setCart, setTotalPrice, setProducts } = useData()

	useEffect(() => {
		localStorage.clear()
		setCart([])
		setTotalPrice(0)
		setProducts(0)
	}, [setCart, setProducts, setTotalPrice])

	return (
		<div className='cancel-wrapper'>
			<Meta name={'Cancel'} />

			<div className='cancel'>
				<h2>Order cancelled successfully!!</h2>
				<Link href='/'>
					<a>
						<button type='button' className='btn'>
							Continue Shopping
						</button>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Success
