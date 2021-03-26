import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

function ShippingScreen({ history }) {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const dispatch = useDispatch();

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalcode, setPostalCode] = useState(shippingAddress.postalcode);
	const [country, setCountry] = useState(shippingAddress.country);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalcode, country }));
		history.push('/payment');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Address'
						value={address ? address : ''}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter City'
						value={city ? city : ''}
						onChange={(e) => setCity(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='postalcode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Postalcode'
						value={postalcode ? postalcode : ''}
						onChange={(e) => setPostalCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Country'
						value={country ? country : ''}
						onChange={(e) => setCountry(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
}

export default ShippingScreen;
