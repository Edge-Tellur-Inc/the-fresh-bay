import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Section, SectionContant, SectionHead } from '../../layout/section/Section'
import { Service, ServiceIcon, ServiceText } from '../../components/service/Service'
import { Paper, Responsive, Paint } from '../../components/svg/Icon'

const ServiceFive = props => {
	return (
		<Section className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='justify-content-center text-center'>
					<Col md='8' xl='7'>
						<SectionHead>
							<h2 className='title'>How We Work</h2>
							<p>
								We identify and define user needs and pain points. We then design and develop
								products that solve those needs. We test and validate our solutions with real users
								to ensure we are building the right thing.
							</p>
						</SectionHead>
					</Col>
				</Row>
				<SectionContant>
					<Row className='gy-gs justify-content-center text-center'>
						<Col xs='10' sm='6' lg='4'>
							<Service className='card card-full service-s4 after-bg-info'>
								<div className='card-inner'>
									<ServiceIcon className='styled-icon styled-icon-6x text-info'>
										<Paper />
									</ServiceIcon>
									<ServiceText>
										<h5 className='title'>Identify a Real-World Problem or Need</h5>
										<p>
											We firstly identify a real-world problem or need. We then define the problem
											or need and then brainstorm possible solutions.
										</p>
									</ServiceText>
								</div>
							</Service>
						</Col>
						<Col xs='10' sm='6' lg='4'>
							<Service className='card card-full service-s4'>
								<div className='card-inner'>
									<ServiceIcon className='styled-icon styled-icon-6x text-danger'>
										<Paint />
									</ServiceIcon>
									<ServiceText>
										<h5 className='title'>Conceptual / Prototype Design</h5>
										<p>
											We move a step further by conceptualizing and prototyping the product design.
											We then test the prototype with real users to validate the design.
										</p>
									</ServiceText>
								</div>
							</Service>
						</Col>
						<Col xs='10' sm='6' lg='4'>
							<Service className='card card-full service-s4 after-bg-danger'>
								<div className='card-inner'>
									<ServiceIcon className='styled-icon styled-icon-6x text-primary'>
										<Responsive />
									</ServiceIcon>
									<ServiceText>
										<h5 className='title'>Product Development and Testing</h5>
										<p>
											We then develop the product and test it with real users to ensure we are
											building the right thing and then launch the product to the market.
										</p>
									</ServiceText>
								</div>
							</Service>
						</Col>
					</Row>
				</SectionContant>
			</Container>
		</Section>
	)
}

export default ServiceFive
