import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({
	footerBanner: {
		discount,
		desc,
		image,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		product,
		buttonText,
	},
}) => {
	return (
		<div className='footer-banner-container'>
			<div className='banner-desc'>
				<div className='left'>
					<p>{discount}</p>
					<h2>{largeText1}</h2>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>
				<div className='right'>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<a>
							<button type='button'>{buttonText}</button>
						</a>
					</Link>
				</div>

				<img
					src={urlFor(image)}
					alt='Headphones'
					className='footer-banner-image'
				/>
			</div>
		</div>
	)
}

export default FooterBanner
