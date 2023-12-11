import React from 'react'
import { Section, SectionHead } from '../../layout/section/Section'
import { Container, Row, Col, Card, Form, Input } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { BgImage } from '../../layout/ovm/Ovm'

const CtaOne = props => {
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
									<Form className='form-submit'>
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
															type='text'
															className='form-control form-control-lg'
															id='email'
															placeholder='Enter Your Email'
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
															id='email'
															placeholder='Enter Your Phone Number'
														/>
													</div>
												</div>
											</Col>

											<Col xs='12'>
												<Link to={`${process.env.PUBLIC_URL}/`} className='btn-lg btn-primary'>
													Join Waitlist
												</Link>
											</Col>
										</Row>
									</Form>
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
