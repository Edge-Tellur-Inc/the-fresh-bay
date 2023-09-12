import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

function Header({ active }) {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const Router = useRouter();
	
	React.useEffect(() => {
		AOS.init();
	}, [menuOpen]);

	return (
		<div className='w-full h-20 bg-[#00977C] z-20 shadow fixed flex justify-center max-w-[2020px] mx-auto'>
			<div className='w-full md:w-10/12 h-full flex justify-between items-center'>
				<Link href='/'>
					<div className='relative ml-3 overflow-hidden cursor-pointer'>
						<Image
							src='/images/logo.png'
							alt='logo'
							width={80}
							height={80}
							objectFit='contain'
						/>
					</div>
				</Link>
				<div className=' md:flex hidden space-x-10 items-center cursor-pointer text-base '>
					<Link href='/#howitworks'>
						<p className={`text-white tracking-wider`}>How It Works</p>
					</Link>
					<Link href='/#contact'>
						<p className={`text-white tracking-wider`}>Contact</p>
					</Link>
					<Link href='https://6qnu0zx477s.typeform.com/c/yqmp7o0D'>
						<p
							className={`text-white tracking-wider py-3 px-4 border border-white rounded-lg`}
						>
							Join Our Waitlist
						</p>
					</Link>
				</div>
				<div
					className='mr-3 md:hidden z-50 absolute right-0  flex transition cursor-pointer  w-14 h-14 rounded-lg  items-center justify-center'
					onClick={e => {
						e.preventDefault();
						setMenuOpen(!menuOpen);
					}}
				>
					{menuOpen ? (
						<Image
							src={'/images/close.png'}
							width={20}
							height={20}
							alt='menu'
						/>
					) : (
						<Image src={'/images/menu.svg'} width={30} height={20} alt='menu' />
					)}
				</div>
				<div
					data-aos='fade-down'
					className={`w-full z-50  h-80 ${
						menuOpen ? 'block' : 'hidden'
					} menubar bg-[#00977C] text-white shadow absolute left-0 top-[5rem] pt-6`}
				>
					<ul className='flex flex-col ml-14 gap-6 cursor-pointer'>
						<li
							onClick={e => {
								e.preventDefault();
								Router.push('/#howitworks');
								setMenuOpen(false);
							}}
						>
							How It Works
						</li>
						<li
							onClick={e => {
								e.preventDefault();
								Router.push('/#contact');
								setMenuOpen(false);
							}}
						>
							Contact
						</li>
						<li
							onClick={e => {
								e.preventDefault();
								Router.push('https://6qnu0zx477s.typeform.com/c/yqmp7o0D');
								setMenuOpen(false);
							}}
						>
							Join Our Waitlist
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
