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
							 &copy; 2023. All rights reserved. Built with{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#d3d3d3'
								stroke-width='2.5'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='lucide lucide-heart'
							>
								<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
							</svg>{' '}
							by
							<a
								className='text-base '
								href='https://edgetellur.com'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								EdgeTellur Inc{' '}
							</a>
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
