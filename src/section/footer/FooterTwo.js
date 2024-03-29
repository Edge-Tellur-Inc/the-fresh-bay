import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import { Logo } from '../../components/logo/Logo'
import Footer from '../../layout/footer/Footer'
import LogoDrak2x from '../../images/logo.webp'
import { SocialIcon } from '../../components/icon/Icon'
import { LinkInline } from '../../components/styledList/StyledList'
import {  LinkDataThree } from './FooterData'
import { Widget, WidgetTitle } from '../../components/wdiget/Widget'
import { SocialIconOne, LinkData } from './FooterData'

const FooterTwo = props => {
	return (
		<Footer className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='justify-content-between py-4 py-md-6'>
					<Col md='6' lg='4'>
						<Widget className='widget-about'>
							<Logo to='/' dark={LogoDrak2x} />
							<p>
								We key in on building innovative technology products that are grounded in practical
								applications and real-world solutions.
							</p>
						</Widget>
					</Col>
					<Col lg='6'>
						<Widget>
							<WidgetTitle>Contact Us</WidgetTitle>
							<LinkInline className='widget-link link-inline-2col  g-2 py-2' data={LinkDataThree} />
						</Widget>
					</Col>
				</Row>
				<hr className='hr border-light mb-0 mt-n1'></hr>
				<Row className='g-2 align-items-center  justify-content-md-center text-center py-4'>
					<Col md='4'>
						<div className='is-dark'>Copyright &copy; 2023 EdgeTellur. All rights reserved.</div>
					</Col>
					<Col md='4' className='d-flex justify-content-md-end'>
						<SocialIcon data={SocialIconOne} />
					</Col>
				</Row>
			</Container>
		</Footer>
	)
}

export default FooterTwo
