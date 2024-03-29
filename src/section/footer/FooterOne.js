import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { Logo } from '../../components/logo/Logo'
import Footer from '../../layout/footer/Footer'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import { SocialIcon } from '../../components/icon/Icon'
import { LinkInline } from '../../components/styledList/StyledList'
import { SocialIconOne, LinkData, LinkDataFour } from './FooterData'

const FooterOne = props => {
	return (
		<Footer className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='g-3 align-items-center justify-content-center justify-content-md-between py-4'>
					<Col md='8' className='d-flex justify-content-md-start justify-content-center'>
						<LinkInline
							className='gx-5 d-flex justify-content-md-start justify-content-center'
							data={LinkData}
						/>
					</Col>
					<Col md='4' className='d-flex justify-content-center justify-content-md-end'>
						<SocialIcon data={SocialIconOne} />
					</Col>
				</Row>
				<hr className='hr border-light mb-0 mt-n1'></hr>
				<Row className='g-3 align-items-center justify-content-center justify-content-md-between py-4'>
					<Col md='8' className='d-flex justify-content-md-start justify-content-center'>
						<div className='text-base text-center px-5'>
							 &copy; 2023. All rights reserved. 
						</div>
					</Col>
					<Col md='4' className='d-flex justify-content-center justify-content-md-end'>
						<LinkInline
							className='gx-5 d-flex justify-content-md-start justify-content-center'
							data={LinkDataFour}
						/>
					</Col>
				</Row>
				
			</Container>
		</Footer>
	)
}

export default FooterOne
