import React, { useState, useEffect } from 'react'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import { Logo, BrandLogo } from '../../components/logo/Logo'
import { Col, Container, Row } from 'reactstrap'
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../layout/header/Header'
import {
	HeaderCaption,
	HeaderText,
	HeaderTitle,
} from '../../components/headerCaption/HeaderCaption'
import { BannerFiveData } from './BannerData'
import { BgImage } from '../../layout/ovm/Ovm'
import Scroll from 'react-scroll'
import LogoDrak2x from '../../images/logo.webp'
import { Link } from '../../components/button/Button'

const ScrollLink = Scroll.Link

const BannerFive = props => {
	const [toggle, setToggle] = useState(false)
	const [offset, setOffset] = useState(0)
	const [mobileView, setMobileView] = useState(false)

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset)
		}
		window.scrollTo(0, 0)
		viewChange()
		window.addEventListener('resize', viewChange)
		return () => {
			window.removeEventListener('resize', viewChange)
		}
	}, [])

	// function to change the design view under 1200 px
	const viewChange = () => {
		if (window.innerWidth < 992) {
			setMobileView(true)
		} else {
			setMobileView(false)
		}
	}

	return (
		<Header className={props.className && props.className} id={props.id && props.id}>
			<HeaderMain className={`header-main-s1 is-sticky is-transparent on-dark has-fixed`}>
				<Container className='header-container'>
					<HeaderWrap>
						<div className='header-logo'>
							<Logo to='/' dark={LogoDrak2x} />
						</div>
						<div className='header-toggle' onClick={() => setToggle(!toggle)}>
							<button className={`menu-toggler ${toggle === true ? 'active' : ''}`}>
								<em className='menu-on icon ni ni-menu'></em>
								<em className='menu-off icon ni ni-cross'></em>
							</button>
						</div>
						<nav
							className={`header-menu menu ${toggle === true ? 'active' : ''} ${
								mobileView ? 'mobile-menu' : ''
							}`}
						>
							{!mobileView ? (
								<Menu className='ms-lg-auto' data={BannerFiveData} />
							) : (
								<MobileMenu data={BannerFiveData} />
							)}
							<ul className='menu-btns'>
								<li>
									<ScrollLink
										to='#waitlist'
										smooth={true}
										duration={500}
										className='btn btn-primary btn-lg'
									>
										Join Our Waitlist
									</ScrollLink>
								</li>
							</ul>
						</nav>
						{toggle && window.innerWidth < 992 && (
							<div className='header-overlay' onClick={() => setToggle(!toggle)}></div>
						)}
					</HeaderWrap>
				</Container>
			</HeaderMain>
			<HeaderContent className=' py-5 is-dark'>
				<div className='lg:ml-10 ml-5  md:w-8/12 lg:w-7/12  pt-10  h-screen md:h-full'>
					<h1 className='text-6xl md:text-7xl lg:text-8xl  font-semibold'>
						Premium Groceries at your Doorstep
					</h1>
					<p className='mt-5 text-white text-xl max-w-3xl'>
						We aim to provide affordable and convenient grocery shopping experiences, making fresh
						produce accessible to consumers while supporting local farmers.
					</p>
					<ScrollLink
						to='#waitlist'
						smooth={true}
						duration={500}
						className='btn btn-primary btn-lg mt-3'
					>
						Join Our Waitlist
					</ScrollLink>
				</div>
			</HeaderContent>
			<BgImage className='bg-image bg-overlay after-bg-dark after-opacity-10 overlay-fall bg-image-loaded bg-image-header-a' />
		</Header>
	)
}

export default BannerFive
