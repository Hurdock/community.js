import React, { useState } from 'react';
import { Alert, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { newsSchema } from '../../../utils/validations'; 
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from '../../Layouts/Header';
import Axios from '../../../utils/axios';

export default (props) => {	
	const [alert, updateAlert] = useState({ type: null, message: null });

	function setAlert(obj) {
		updateAlert(obj);
		setTimeout(() => updateAlert({ type: null, message: null }), 3000);
	}

	return (
		<React.Fragment>
			<Header title="Write news"></Header>
			<Container>
				<Row>
					<Col>
						<h3>New Article</h3>
						<hr />
						{alert.type !== null ? <Alert variant={alert.type}>{alert.message}</Alert> : null}
						
						<Formik
							validationSchema={newsSchema}
							initialValues={{ title: '', content: '' }}
							onSubmit={(values, actions) => {
								Axios.post('/news/create', { form: values })
								.then((res) => setAlert({ type: 'success', 	message: `Article '${values.title}' published to homepage.` }))
								.catch((err) => {
									setAlert({ type: 'danger', message: err.response.data.error });
									actions.setSubmitting(false);
								});
							}}
							render={({ values, errors, status, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
								<Form onSubmit={handleSubmit}>
									<Form.Group>
										<Form.Label>Title</Form.Label>
										<Form.Control
											type="text"
											name="title"
											placeholder="Title"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.title}
										/>
										{errors.title && touched.title && <Form.Text className="text-danger">{errors.title}</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Content</Form.Label>
										<CKEditor
											editor={ ClassicEditor }
											onChange={ ( event, editor ) => values.content = editor.getData()}
										/>
										{errors.content && touched.content && <Form.Text className="text-danger">{errors.content}</Form.Text>}
									</Form.Group>
									<Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button>
								</Form>
							)}
						/>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

