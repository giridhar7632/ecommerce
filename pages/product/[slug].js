import { useState } from 'react'
import { Product } from '../../components'
import { urlFor, client } from '../../lib/client'
import { useData } from '../../lib/useData'
import { Star, Minus, Plus } from '../../lib/icons'
import Meta from '../../components/Meta'

export default function ProductDetails({ product, products }) {
	const [index, setIndex] = useState(0)
	const { incQty, decQty, qty, setShowCart, handleAddToCart } = useData()
	const { image, name, details, price } = product

	const handleBuyNow = () => {
		handleAddToCart(product, qty)

		setShowCart(true)
	}

	return (
		<div>
			<Meta name={product.name} />
			<div className='product-detail-container'>
				<div style={{ margin: 'auto' }}>
					<div className='image-container'>
						<img
							src={urlFor(image && image[index])}
							alt='product'
							className='product-detail-image'
						/>
					</div>
					<div className='small-image-container'>
						{image?.map((item, i) => (
							<img
								key={i}
								src={urlFor(item)}
								alt='product'
								className={`small-image ${i === index ? 'selected-image' : ''}`}
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>

				<div className='product-detail-desc'>
					<h1>{name}</h1>
					<div className='reviews'>
						<div>
							<Star fill={'#ee5253'} />
							<Star fill={'#ee5253'} />
							<Star fill={'#ee5253'} />
							<Star fill={'#ee5253'} />
							<Star />
						</div>
						<p>{'20k +'}</p>
					</div>
					<h4>Details</h4>
					<p>{details}</p>
					<p className='price'>${price}</p>
					<div className='quantity'>
						<h3>Quantity:</h3>
						<p className='quantity-desc'>
							<span className='minus' onClick={decQty}>
								<Minus />
							</span>
							<span className='num'>{qty}</span>
							<span className='plus' onClick={incQty}>
								<Plus />
							</span>
						</p>
					</div>
					<div className='buttons'>
						<button
							type='button'
							className='add-to-cart'
							onClick={() => handleAddToCart(product, qty)}>
							Add to Cart
						</button>
						<button type='button' className='buy-now' onClick={handleBuyNow}>
							Buy Now
						</button>
					</div>
				</div>
			</div>
			<div className='maylike-products-wrapper'>
				<h2>You may also like</h2>
				<div className='marquee'>
					<div className='maylike-products-container track'>
						{products?.map((item, i) => (
							<Product key={i} product={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const query = `*[_type == "product"] {
		slug {
			current
		}
	}`
	const products = await client.fetch(query)
	const paths = products.map((product) => ({
		params: { slug: product.slug.current },
	}))
	return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params: { slug } }) {
	const query = `*[_type == "product" && slug.current == "${slug}"][0]`
	const productQuery = `*[_type == "product"]`

	const product = await client.fetch(query)
	const products = await client.fetch(productQuery)

	return {
		props: {
			product,
			products,
		},
	}
}
