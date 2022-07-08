import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useData } from '../lib/useData'
import { Confetti } from '../lib/confetti.min'

const Success = () => {
	const ref = useRef(null)
	const { setCart, setTotalPrice, setProducts } = useData()
	const [mounted, setmounted] = useState(false)

	useEffect(() => setmounted(true), [])

	useEffect(() => {
		localStorage.clear()
		setCart([])
		setTotalPrice(0)
		setProducts(0)
	}, [setCart, setProducts, setTotalPrice])

	useEffect(() => {
		const confetti = new Confetti('confetti')
		confetti.setCount(550)
		confetti.setSize(1)
		confetti.setPower(55)
		confetti.setFade(false)
		confetti.destroyTarget(false)
	}, [])

	useEffect(() => {
		mounted && ref.current && ref.current.click()
	}, [mounted])

	return (
		<div className='success-wrapper'>
			<div className='success'>
				<div ref={ref} id='confetti' />
				<h2>Thank you for your order!</h2>
				<p className='email-msg'>Check your email inbox for the reciept</p>
				<p className='description'>
					If you have any questions, please contact us at{' '}
					<a className='email' href='mailto:contact@headphonestore.com'>
						contact@headphonestore.com
					</a>
				</p>
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
