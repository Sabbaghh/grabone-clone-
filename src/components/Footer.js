import React from 'react';
import '../styles/Footer.css';
import Subscribe from './Subscribe';

const Footer = () => {
	return (
		<footer className='p-1 mt-1 footer'>
			<h3 className='color-secondary'>Newsletter Signup</h3>
			<h4 className='mt-2 color-secondary'>
				Sign up for our daily emails and we'll send you all the best deals,
				tailored for you.
			</h4>
			<Subscribe />
			<hr className='mt-2 opacity-1-2' />
			<div className='flex p-1 mt-2 footer-info'>
				<div className='follow-us'>
					<h3 className='color-secondary'>Follow us on</h3>
					<div className='flex justify-center mt-1 align-center'>
						<a href='#!' className='bg-secondary '>
							<i className='fab fa-facebook-f' />
						</a>
						<a href='#!' className=' bg-secondary'>
							<i className='fab fa-twitter' />
						</a>
						<a href='#!' className=' bg-secondary'>
							<i className='fab fa-instagram' />
						</a>
						<a href='#!' className=' bg-secondary'>
							<i className='fab fa-youtube' />
						</a>
					</div>
					<h3 className='mt-1 color-secondary'>Get app exclusive deals</h3>
				</div>
				<div className='footer-item'>
					<h3 className='color-secondary'>GrabOne</h3>
					<div className='flex mt-2 flex-direction-column'>
						<a href='#!' className='color-secondary'>
							GrabOne Guarantee
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							Contact Us
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							About Us
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							Terms & Returns
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							Blog
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							Gift Card
						</a>
					</div>
				</div>
				<div className='footer-item'>
					<h3 className='color-secondary'>My Account</h3>
					<div className='flex mt-2 flex-direction-column'>
						<a href='#!' className='color-secondary'>
							My Account
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							My Cart
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							My Coupons
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							FAQ
						</a>
					</div>
				</div>
				<div className='footer-item'>
					<h3 className='color-secondary'>Merchants</h3>
					<div className='flex mt-2 flex-direction-column'>
						<a href='#!' className='color-secondary'>
							Run a Deal
						</a>
						<a href='#!' className='mt-1 color-secondary'>
							Merchants Centre
						</a>
					</div>
				</div>
			</div>
			<hr />
			<div className='p-1 text-center'>
				<p className='color-secondary'>
					<a href='#!' className='color-primary'>
						Privacy Policy
					</a>{' '}
					| {` `}
					CREATED BY SABBAGH
				</p>
			</div>
		</footer>
	);
};

export default Footer;
