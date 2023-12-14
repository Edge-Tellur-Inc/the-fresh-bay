import React, { useRef, useState } from 'react'
import { Section, SectionHead } from '../../layout/section/Section'
import { Container, Row, Col, Card, Form, Input } from 'reactstrap'
import { Button } from '../../components/button/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const CtaOne = props => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [loading, setLoading] = useState(false)
	const form = useRef()

	const onSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		if (phone.length < 10 || phone.length > 10) {
			toast.error('Please enter a valid phone number')
			return
		}
		const url = `${process.env.REACT_APP_SERVER_URL}waitlist`
		try {
			const res = await axios.post(url, {
				email,
				username: name,
				phoneNumber: phone,
			})
			toast.success(res.data.message)
			setEmail('')
			setName('')
			setPhone('')
			setLoading(false)
			emailjs.sendForm('service_fb0b41n', 'template_rxxl863', form.current, 'nhGMgqFf9mwvaEKsh')
		} catch (err) {
			setLoading(false)
			setEmail('')
			setName('')
			setPhone('')
			toast.error(err.response.data.message || 'User already exist')
		}
	}
	return (
		<Section className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='justify-content-center '>
					<Col md='10' className=' '>
						<Card className='card-shadow round-xl  mt-n4'>
							<div className='card-inner card-inner-lg'>
								<div className='form-block'>
									<SectionHead className='section-head-sm'>
										<h4 className='title pb-0'>Join our waitlist</h4>
										<p>
											Subscribe to our waitlist and get more information about our app and when it
											will be available. You will also be the first to know when we launch in your
											area and get exclusive offers and discounts on your first order. Hoping to see
											you soon!
										</p>
									</SectionHead>
									<form ref={form} className='form-submit' onSubmit={e => onSubmit(e)}>
										<Row className='g-4'>
											<Col xs='12'>
												<div className='form-group'>
													<label className='form-label' htmlFor='name'>
														Your Name
													</label>
													<div className='form-control-wrap'>
														<Input
															type='text'
															className='form-control form-control-lg'
															id='name'
															placeholder='Your Name'
															name='name'
															onChange={e => setName(e.target.value)}
															value={name}
														/>
													</div>
												</div>
											</Col>
											<Col xs='12'>
												<div className='form-group'>
													<label className='form-label' htmlFor='name'>
														Enter Your Email
													</label>
													<div className='form-control-wrap'>
														<Input
															type='email'
															className='form-control form-control-lg'
															id='email'
															placeholder='Enter Your Email'
															onChange={e => setEmail(e.target.value)}
															name='email'
															value={email}
															required
														/>
													</div>
												</div>
											</Col>
											<Col xs='12'>
												<div className='form-group'>
													<label className='form-label' htmlFor='name'>
														Your Phone Number
													</label>
													<div className='form-control-wrap'>
														<Input
															type='tel'
															className='form-control form-control-lg'
															id='phone'
															placeholder='eg: 0500000000'
															name='phone'
															value={phone}
															onChange={e => setPhone(e.target.value)}
														/>
													</div>

													<p className='text-sm font-normal'>
														Should not be less or more than 10 letters
													</p>
												</div>
											</Col>

											<Col xs='12'>
												<Button className='btn btn-primary text-white'>
													{loading ? (
														<div className='animate-spin w-4 h-4 border-t border-l rounded-full' />
													) : (
														'Join Waitlist'
													)}
												</Button>
											</Col>
										</Row>
									</form>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

export default CtaOne
