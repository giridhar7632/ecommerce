import Link from 'next/link'
import { useData } from '../lib/useData'
import { CartIcon } from '../lib/icons'
import Cart from './Cart'

const Navbar = () => {
	const { showCart, setShowCart, products } = useData()
	return (
		<nav className='navbar-container'>
			<p>
				<Link href='/'>
					<a>Headphones Store</a>
				</Link>
			</p>

			<button
				type='button'
				className='cart-icon'
				onClick={() => setShowCart((prev) => !prev)}>
				<CartIcon />
				<span className='cart-item-qty'>{products}</span>
			</button>

			{showCart && <Cart />}
		</nav>
	)
}

export default Navbar
