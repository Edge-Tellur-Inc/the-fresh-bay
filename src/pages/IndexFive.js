import React from 'react'
import BannerFive from '../section/banner/BannerFive'
import FooterTwo from '../section/footer/FooterTwo'
import ServiceFive from '../section/service/ServiceFive'
import TeamOne from '../section/team/TeamOne'
import ProductOne from '../section/product/ProductOne'
import CtaFive from '../section/cta/CtaFive'
import ReviewThree from '../section/review/ReviewThree'
import PricingFour from '../section/pricing/PricingFour'
import { FeatureFourAlt, FeatureFour } from '../section/feature/FeatureFour'
import { FeatureFiveAlt } from '../section/feature/FeatureFive'
import CtaOne from '../section/cta/CtaOne'
import FaqOne from '../section/faq/FaqOne'
import FooterOne from '../section/footer/FooterOne'

const IndexFive = props => {
	return (
		<div className='nk-main'>
			<BannerFive className='has-header-main-s1 bg-dark has-bg-image' id='#home' />
			{/* <ServiceFive className='section-service pb-0' id='#service' /> */}
			{/* <ProductOne className='section-product' id='#product' /> */}

			<FeatureFour className='section-feature pb-0' id='#product' />
			<FeatureFiveAlt className='section-feature bg-dark is-dark' />
			{/* <CtaFive className='section-cta is-dark has-bg-image' id='#cta' /> */}
			{/* <PricingFour className='pb-0' id='#package' /> */}
			<TeamOne className='section-team ' id='#team' />
			{/* <ReviewThree className='section-reviews' id='#reviews' /> */}
			<FaqOne className='section-faq' id='#faqs' />

			<CtaOne className='secton-cta bg-lighter' id='#waitlist' />

			<FooterOne className='bg-dark is-dark' />
		</div>
	)
}

export default IndexFive
