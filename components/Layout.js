import Head from 'next/head'
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Head>
				<Meta
					title={'Store'}
					name={'Home'}
					description={'A place for music accessories'}
				/>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className='main-container'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
