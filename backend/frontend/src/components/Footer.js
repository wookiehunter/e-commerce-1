import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
	return (
		<div>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						Copyright 2021 &copy; Market Place
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
