import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Section, SectionHead } from '../../layout/section/Section'
// import teamImg1 from '../../images/team/a.jpg'
import teamImg2 from '../../images/team/otch.png'
import teamImg3 from '../../images/team/jaay.png'
import teamImg4 from '../../images/team/avat.png'
// import teamImg4 from '../../images/team/d.jpg'
import { SocialIcon } from '../../components/icon/Icon'
import { TeamDataOne } from './TeamData'

const TeamOne = props => {
	return (
		<Section className={props.className && props.className} id={props.id && props.id}>
			<Container>
				<Row className='justify-content-center text-center'>
					<Col xl='7' lg='9'>
						<SectionHead>
							<h2 className='title px-1'>Meet The Team</h2>
							<p>
								We are a team of passionate people who are working to make a difference in the world
								through our innovative and creative product
							</p>
						</SectionHead>
					</Col>
				</Row>
				<Row className='g-gs justify-content-center'>
					{/* <Col lg='3' xs='6'>
						<div className='team team-s1'>
							<div className='team-portrait'>
								<img src={teamImg1} alt='' />
							</div>
							<div className='team-info'>
								<h6 className='team-name'>Marthe Dodier</h6>
								<div className='team-role'>Web Developer</div>
								<SocialIcon className='social-primary' data={TeamDataOne} />
							</div>
						</div>
					</Col> */}
					<Col lg='3' xs='8'>
						<div className='team team-s1'>
							<div className='team-portrait'>
								<img src={teamImg3} alt='' />
							</div>
							<div className='team-info'>
								<h6 className='team-name'>John Clever Anyormisi</h6>
								<div className='team-role'>CEO</div>
								<SocialIcon className='social-primary' data={TeamDataOne} />
							</div>
						</div>
					</Col>
					<Col lg='3' xs='8'>
						<div className='team team-s1'>
							<div className='team-portrait'>
								<img src={teamImg2} alt='' />
							</div>
							<div className='team-info'>
								<h6 className='team-name'>Uriah Otchere Darko</h6>
								<div className='team-role'>CTO</div>
								<SocialIcon className='social-primary' data={TeamDataOne} />
							</div>
						</div>
					</Col>
					<Col lg='3' xs='8'>
						<div className='team team-s1'>
							<div className='team-portrait'>
								<img src={teamImg4} alt='' />
							</div>
							<div className='team-info'>
								<h6 className='team-name'>Richmond Aryeh</h6>
								<div className='team-role'>CMO</div>
								<SocialIcon className='social-primary' data={TeamDataOne} />
							</div>
						</div>
					</Col>

					{/* <Col lg="3" xs="6">
                    <div className="team team-s1">
                       <div className="team-portrait">
                            <img src={teamImg4} alt="" />
                       </div>
                        <div className="team-info">
                            <h6 className="team-name">Loring Duperra</h6>
                            <div className="team-role">Web Developer</div>
                            <SocialIcon className="social-primary" data={TeamDataOne} />
                        </div>
                   </div>
                </Col> */}
				</Row>
			</Container>
		</Section>
	)
}

export default TeamOne
