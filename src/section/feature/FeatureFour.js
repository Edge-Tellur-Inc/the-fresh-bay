import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { ImageBlock } from '../../components/images/Images'
import { Section } from '../../layout/section/Section'
import thumbImgOne from '../../images/product/phone-1.png'
import thumbImgTwo from '../../images/gfx/h.png'
import { TextBlock, TitleH2 } from '../../components/textBlock/TextBlock'
import { StyledIcon } from '../../components/icon/Icon'
import { ServiceText } from '../../components/service/Service'
import { Analytics, Idea, Badge, Box, Edit, Contents , Tools } from '../../components/svg/Icon'

const FeatureFour = (props) => {
  return (
		<Section className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='align-items-center g-gs py-5'>
					<Col lg='6'>
						<ImageBlock className='img-block-s2 pe-xl-6 pe-lg-3'>
							<img src={thumbImgOne} alt='feature-img' />
						</ImageBlock>
					</Col>
					<Col lg='6'>
						<TextBlock>
							<TitleH2>How it works</TitleH2>
							<div className='mt-4 ms-n3 ms-sm-n4'>
								<Row className='gy-gs'>
									<Col xs='12'>
										<Card className='service service-inline service-s4 after-bg-primary'>
											<div className='card-inner'>
												<StyledIcon className='service-icon styled-icon-s4 styled-icon-5x text-primary'>
													{/* <Box /> */}01
												</StyledIcon>
												<ServiceText>
													<h5 className='title'>Find and shop groceries</h5>
													<p>
														Find varieties of fresh groceries and shop from the comfort of your home
														or office with our easy to use app.
													</p>
												</ServiceText>
											</div>
										</Card>
									</Col>
									<Col xs='12'>
										<Card className='service service-inline service-s4 after-bg-primary'>
											<div className='card-inner'>
												<StyledIcon className='service-icon styled-icon-s4 styled-icon-5x text-primary'>
													{/* <Badge /> */}02
												</StyledIcon>
												<ServiceText>
													<h5 className='title'>Checkout and request delivery</h5>
													<p>
														Checkout and request delivery. We will deliver your groceries to your
														doorstep within 24 hours.
													</p>
												</ServiceText>
											</div>
										</Card>
									</Col>
									<Col xs='12'>
										<Card className='service service-inline service-s4 after-bg-primary'>
											<div className='card-inner'>
												<StyledIcon className='service-icon styled-icon-s4 styled-icon-5x text-primary'>
													{/* <Idea /> */}03
												</StyledIcon>
												<ServiceText>
													<h5 className='title'>Get and enjoy your groceries</h5>
													<p>
														Get your groceries delivered to your doorstep and enjoy the convenience
														of online grocery shopping.
													</p>
												</ServiceText>
											</div>
										</Card>
									</Col>
								</Row>
							</div>
						</TextBlock>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

const FeatureFourAlt = (props) =>{
    return(
        <Section className={ props.className && props.className } id={ props.id && props.id }>
            <Container>
                <Row className="flex-row-reverse align-items-center justify-content-between g-gs">
                    <Col xl="6" lg="5">
                        <ImageBlock className="img-block-s2 ps-xl-6">
                            <img src={thumbImgTwo} alt="feature-img" />
                        </ImageBlock>
                    </Col>
                    <Col xl="6" lg="7">
                        <TextBlock>
                            <TitleH2 className="text-center text-lg-start">Instantly upload any software usage SaaS dashlite data</TitleH2>
                            <Row className="g-gs justify-content-center text-center">
                                <Col xs="6">
                                    <Card className="service service-s4">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-4x text-primary">
                                                < Edit />
                                            </StyledIcon> 
                                            <ServiceText>
                                                <h5 className="title">Easy to manage</h5>
                                                <p>I must explain to you how all this denou idea ncing.</p>
                                            </ServiceText>  
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs="6">
                                    <Card className="service service-s4 after-bg-danger">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-4x text-danger">
                                                < Analytics />
                                            </StyledIcon> 
                                            <ServiceText>
                                                <h5 className="title">Analytics Tool</h5>
                                                <p>Explain to you how all this of denouncing pleasure.</p>
                                            </ServiceText>  
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs="6">
                                    <Card className="service service-s4 after-bg-pink">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-4x text-pink">
                                                < Tools />
                                            </StyledIcon> 
                                            <ServiceText>
                                                <h5 className="title">Professionals Tools</h5>
                                                <p>Explain to you how all this of denouncing pleasure.</p>
                                            </ServiceText>  
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs="6">
                                    <Card className="service service-s4 after-bg-purple">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-4x text-purple">
                                                < Contents />
                                            </StyledIcon> 
                                            <ServiceText>
                                                <h5 className="title">Ready Content</h5>
                                                <p>I must explain to you how all this denou idea ncing.</p>
                                            </ServiceText>  
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export { FeatureFour, FeatureFourAlt }
