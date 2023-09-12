import Image from 'next/image'
import { Header } from '../components'
import { useRouter } from 'next/router'

function HomePage() {
	const Router = useRouter()

	return (
		<div className='w-full h-full bg-[#FAFFF4] max-w-[2020px] mx-auto'>
			{/* hero page */}
			<div className='w-full h-full'>
				{/* header */}
				<Header />
				{/* content */}
				<div className='flex justify-center flex-col items-center  w-full h-screen bg-[url("/images/hero-background.svg")] bg-center bg-cover bg-no-repeat '>
					<h3 className='text-5xl md:text-6xl lg:text-7xl RalewaySemiBold text-center md:w-9/12 lg:w-7/12 lg:pt-20 leading-tight'>
						The Fresh Bay - Ghana{"'"}s first online grocery shop
					</h3>
					<p className='w-9/12 md:w-6/12 lg:w-[38%] mt-10 text-center InterLight text[#1C1A1A] text-[27px] '>
						Join our waitlist and be the first to be notified when we launch
					</p>
					<button
						onClick={() =>
							// Router.push('https://6qnu0zx477s.typeform.com/c/yqmp7o0D')
							console.log('clicked')
						}
						className='px-16 mt-10 py-5 bg-[#009773] text-xl rounded-xl text-white InterMedium tracking-widest'
					>
						Join Waitlist
					</button>
				</div>
			</div>
			{/* our services */}
			<div
				id='howitworks'
				className='w-full flex flex-col h-full py-20 mb-20 bg-[#00977C] lg:h-full items-center lg:pt-0 justify-center lg:px-32 px-5'
			>
				<h3 className='text-5xl -mt-5 mb-12  md:my-20 RalewayMedium text-left w-full md:text-center text-white'>
					How it works
				</h3>
				<div className='w-full h-full grid md:grid-cols-2 gap-14 '>
					<div className='w-full h-full flex md:py-12 lg:py-20 gap-5 md:gap-10 flex-col '>
						<div className=''>
							<div className='flex space-x-3'>
								<p className='text-white RalewaySemiBold text-base'>01</p>
								<h3 className='text-2xl lg:text-3xl RalewaySemiBold tracking-wider text-white'>
									Find and shop groceries
								</h3>
							</div>
							<p className='pt-2 InterLight text-white w-full lg:w-9/12 text-lg'>
								Find varieties of fresh groceries and shop from the comfort of your home or office
								with our easy to use app.{' '}
							</p>
							<hr className='w-full lg:w-10/12 mt-5 border-[#1C1A1A]/25' />
						</div>
						<div className=''>
							<div className='flex space-x-3'>
								<p className='text-white RalewaySemiBold text-base'>02</p>
								<h3 className='text-2xl lg:text-3xl RalewaySemiBold tracking-wider text-white'>
									Checkout and request delivery
								</h3>
							</div>
							<p className='pt-2 InterLight text-white w-full lg:w-9/12 text-lg'>
								Checkout and request delivery. We will deliver your groceries to your doorstep
								within 24 hours.{' '}
							</p>
							<hr className='w-full lg:w-10/12 mt-5 border-[#1C1A1A]/25' />
						</div>
						<div className=''>
							<div className='flex space-x-3'>
								<p className='text-white RalewaySemiBold text-base'>03</p>
								<h3 className='text-2xl lg:text-3xl RalewaySemiBold tracking-wider text-white'>
									Get and enjoy your groceries
								</h3>
							</div>
							<p className='pt-2 InterLight text-white w-full lg:w-9/12 text-lg'>
								Get your groceries delivered to your doorstep and enjoy the convenience of online
								grocery shopping.{' '}
							</p>
							<hr className='w-full lg:w-10/12 mt-5 border-[#1C1A1A]/25' />
						</div>
					</div>
					<div className='w-full h-[500px] lg:h-full  md:flex items-center justify-center rounded-xl relative overflow-hidden'>
						<Image
							layout='fill'
							src='/images/how.png'
							objectFit='contain'
							placeholder='blur'
							blurDataURL='/images/mobile.svg'
							alt='mobile'
						/>
					</div>
				</div>
			</div>
			{/* our product */}
			<div className='w-full flex flex-col h-full lg:h-screen items-center lg:pt-0 justify-center lg:px-32 px-5'>
				<div className='w-full h-full grid md:grid-cols-2  gap-14 '>
					<div className='w-full h-full flex lg:pt-44 flex-col'>
						<h3 className='text-lg InterLight uppercase tracking-wider text-[#006654] '>
							groceries
						</h3>
						{/* <h3 className='text-lg uppercase PoppinsLight tracking-widest my-3 md:my-6 '></h3> */}
						<h3 className='text-5xl md:text-[64px] capitalize RalewaySemiBold my-3 md:my-2 text-[#263238] '>
							Coming soon
						</h3>
						<p className='InterLight font-normal text-left text-[#263238] md:text-left mt-3  text-lg md:w-11/12 '>
							Subscribe to our waitlist and get more information about our app and when it will be
							available. You will also be the first to know when we launch in your area and get
							exclusive offers and discounts on your first order. Hoping to see you soon!
						</p>
					</div>
					<div className='w-full h-[600px] lg:h-full  md:flex items-center justify-center relative overflow-hidden'>
						<Image
							layout='fill'
							src='/images/mobile.svg'
							objectFit='contain'
							placeholder='blur'
							blurDataURL='/images/mobile.svg'
							alt='mobile'
						/>
					</div>
				</div>
			</div>
			{/* footer */}
			<div
				id='waitlist'
				className="w-full h-[80vh] -mt-20 lg:-mt-[150px] bg-[url('/images/footer.png')] bg-center bg-cover"
			>
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<h3 className='text-5xl text-white md:text-6xl lg:text-7xl RalewaySemiBold text-center md:w-9/12 lg:w-7/12 lg:pt-20 leading-tight'>
						The Fresh Bay - Ghana{"'"}s first online grocery shop
					</h3>
					<p className='w-9/12 md:w-6/12 text-white lg:w-[38%] mt-10 text-center InterLight text[#1C1A1A] text-[27px] '>
						Join our waitlist and be the first to be notified when we launch
					</p>
					<button
						onClick={() =>
							// Router.push('https://6qnu0zx477s.typeform.com/c/yqmp7o0D')
							console.log('clicked')
						}
						className='px-16 mt-10 py-5 bg-white text-xl rounded-xl text-[#009773] InterMedium tracking-widest'
					>
						Join Waitlist
					</button>
				</div>
				<div id='contact' className='w-full py-5 my-4  grid lg:grid-cols-3  px-5'>
					<div className='flex flex-col items-center'>
						<div>
							<p className='text-[#1C1A1A] text-center lg:text-left InterLight '>
								Terms {'&'} Conditions
							</p>
							<p className='text-[#1C1A1A] pt-5 md:pt-2  text-center lg:text-left InterLight '>
								&copy; 2022 The Fresh Bay. All Rights Reserved
							</p>
						</div>
					</div>
					<p className='text-[#1C1A1A] InterLight flex pt-5 md:pt-0  justify-center text-center'>
						Privacy Policy
					</p>
					<div className='flex flex-col items-center pt-5 md:pt-0'>
						<div>
							<a
								href='mailto:info@thefreshbay.com'
								target='_blank'
								className='text-[#1C1A1A] text-center InterLight '
							>
								info@thefreshbay.com
							</a>
							<div className='flex justify-end pt-10 lg:pt-2 items-center'>
								<div className='w-[25px] h-[25px]  relative overflow-hidden flex justify-center items-center'>
									<a
										href='https://www.instagram.com/invites/contact/?i=f6cmkssdiek3&utm_content=pp75i1d'
										target='_blank'
									>
										<Image src={'/images/instagram.svg'} layout='fill' objectFit='contain' />
									</a>
								</div>
								<div className='w-[25px] h-[25px] md:mx-7 mx-10 relative overflow-hidden flex justify-center items-center'>
									<Image src={'/images/linkedin.svg'} layout='fill' objectFit='contain' />
								</div>
								<div className='w-[25px] h-[25px]  relative overflow-hidden flex justify-center items-center'>
									<Image src={'/images/facebook.svg'} layout='fill' objectFit='contain' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage

// bmireku@axxendcorp.com
