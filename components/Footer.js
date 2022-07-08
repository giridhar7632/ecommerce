import { Instagram, Twitter } from '../lib/icons'

const Footer = () => {
	return (
		<div className='footer-container'>
			<p>2020-2022 Headphones Store | All rights reserved</p>
			<p className='icons'>
				<Instagram />
				<Twitter />
			</p>
		</div>
	)
}

export default Footer
