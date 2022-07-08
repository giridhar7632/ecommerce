import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<a>
					<div className='product-card'>
						<img
							src={urlFor(image && image[0])}
							alt={name}
							width={250}
							height={250}
							className='product-image'
						/>
						<p className='product-name'>{name}</p>
						<p className='product-price'>
							$<span style={{ color: '#ee5253' }}>{price}</span>
						</p>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default Product
