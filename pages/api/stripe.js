const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const options = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				shipping_options: [
					{ shipping_rate: 'shr_1LJ9SfSDjJqfnimANjZhKruG' },
					{ shipping_rate: 'shr_1LJ9T9SDjJqfnimAeRrnfnFr' },
				],
				line_items: req.body.cart.map((item) => {
					const img = item.image[0].asset._ref
					const newImage = img
						.replace(
							'image-',
							`https://cdn.sanity.io/images/vj8g0lp8/production/`
						)
						.replace('-webp', '.webp')

					return {
						price_data: {
							currency: 'inr',
							product_data: {
								name: item.name,
								images: [newImage],
							},
							unit_amount: item.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: item.quantity,
					}
				}),
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/cancel`,
			}
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(options)
			res.status(200).json(session)
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message)
		}
	} else {
		res.setHeader('Allow', 'POST')
		res.status(500).end('Method Not Allowed')
	}
}
