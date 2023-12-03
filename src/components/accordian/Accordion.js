import React, { useState } from 'react'
import { Collapse } from 'reactstrap'

const Accordion = ({ className, variation, ...props }) => {
	const [isOpen, setIsOpen] = useState('1')

	const toggleCollapse = param => {
		if (param === isOpen) {
			setIsOpen('0')
		} else {
			setIsOpen(param)
		}
	}

	return (
		<div
			className={[
				`accordion${variation ? ' accordion-s' + variation : ''}${
					className ? ' ' + className : ''
				}`,
			]}
		>
			<div className='accordion-item'>
				<div
					className={[`accordion-head${isOpen !== '1' ? ' collapsed' : ''}`]}
					onClick={() => toggleCollapse('1')}
				>
					<h6 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing.?</h6>
					<span className='accordion-icon'></span>
				</div>
				<Collapse className='accordion-body' isOpen={isOpen === '1' ? true : false}>
					<div className='accordion-inner'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos, placeat quia
							beatae, atque repudiandae officia ipsum quam ratione alias dignissimos, illo
							inventore.
						</p>
					</div>
				</Collapse>
			</div>
			<div className='accordion-item'>
				<div
					className={[`accordion-head${isOpen !== '2' ? ' collapsed' : ''}`]}
					onClick={() => toggleCollapse('2')}
				>
					<h6 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing.?</h6>
					<span className='accordion-icon'></span>
				</div>
				<Collapse className='accordion-body' isOpen={isOpen === '2' ? true : false}>
					<div className='accordion-inner'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel laudantium
							obcaecati possimus eaque fugit consectetur! Vitae voluptatibus numquam soluta
							aspernatur, ab inventore.
						</p>
					</div>
				</Collapse>
			</div>
			<div className='accordion-item'>
				<div
					className={[`accordion-head${isOpen !== '3' ? ' collapsed' : ''}`]}
					onClick={() => toggleCollapse('3')}
				>
					<h6 className='title'>Lorem ipsum, dolor sit amet consectetur adipisicing.?</h6>
					<span className='accordion-icon'></span>
				</div>
				<Collapse className='accordion-body' isOpen={isOpen === '3' ? true : false}>
					<div className='accordion-inner'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, voluptates esse
							sapiente sunt aliquid sed maxime reprehenderit quo repellendus molestiae incidunt
							impedit nostrum.
						</p>
					</div>
				</Collapse>
			</div>
			<div className='accordion-item'>
				<div
					className={[`accordion-head${isOpen !== '4' ? ' collapsed' : ''}`]}
					onClick={() => toggleCollapse('4')}
				>
					<h6 className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing.?</h6>
					<span className='accordion-icon'></span>
				</div>
				<Collapse className='accordion-body' isOpen={isOpen === '4' ? true : false}>
					<div className='accordion-inner'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, mollitia officia.
							Praesentium id saepe iste eius molestias iure modi quasi beatae minus rerum.
						</p>
					</div>
				</Collapse>
			</div>
			<div className='accordion-item'>
				<div
					className={[`accordion-head${isOpen !== '5' ? ' collapsed' : ''}`]}
					onClick={() => toggleCollapse('5')}
				>
					<h6 className='title'>Lorem, ipsum dolor sit amet consectetur adipisicing.?</h6>
					<span className='accordion-icon'></span>
				</div>
				<Collapse className='accordion-body' isOpen={isOpen === '5' ? true : false}>
					<div className='accordion-inner'>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat inventore enim
							laborum iusto. Atque assumenda rerum cum qui quaerat ducimus minima voluptatum?
						</p>
					</div>
				</Collapse>
			</div>
		</div>
	)
}

export default Accordion
