import { Layout } from '../components'
import DataProvider from '../lib/useData'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<DataProvider>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</DataProvider>
	)
}

export default MyApp
