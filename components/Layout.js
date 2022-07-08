import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Meta name={'Home'} />
			<header>
				<Navbar />
			</header>
			<main className='main-container'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
