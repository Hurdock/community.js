import React from 'react'
import Header from './Layouts/Header'
import { Alert, Container, Row, Col, Form, Button } from 'react-bootstrap';

export default () => {
	return (
		<React.Fragment>
			<Header title="Login"></Header>
			<Container>
				<Row>
					<Col lg={8}>
						<h1>Authentication</h1>
						<Alert variant="success">You have been successfully logged in.</Alert>
						<Form>
							<Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Button variant="primary" type="submit">Submit</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}