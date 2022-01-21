import React from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.css';
import * as Yup from 'yup';

const schema = Yup.object().shape({
	firstName: Yup.string().required(),
	age: Yup.number().min(10).required(),
});

export default function App() {
	return (
		<div className="App">
			<h1>Formik</h1>
			<h2>Validação de formulários</h2>
			<Formik
			validationSchema={schema}
				initialValues={{
					firstName: '',
					age: ''
				}}
			>
				{( {errors }) => (
					<Form>
						<div className="form-control">
							<label htmlFor="firstName">Primeiro Nome</label>
							<Field id="firstName" name="firstName" type="text" />
							{errors.firstName && (
								<div>{errors.firstName}</div>
							)}
						</div>
						<div className="form-control">
							<label htmlFor="age">Idade</label>
							<Field id="age" name="age" type="number" />
							{errors.age && (
								<div>{errors.age}</div>
							)}
						</div>

					</Form>
				)}
			</Formik>
		</div>
	);
}

