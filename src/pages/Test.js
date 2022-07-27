
import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(4).required('Required')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  console.log(errors)
  return(
    <>
      <Form noValidate onSubmit={handleSubmit}> {/** INI PENTING */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" isInvalid={!!errors.email} />  {/** INI PENTING */}
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" isInvalid={!!errors.password} />  {/** INI PENTING */}
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">  {/** INI PENTING */}
          Submit
        </Button>
      </Form>  {/** INI PENTING */}
    </>
  )
}

function Test() {
  const onLoginRequest = (val) => {
    if(val.email === 'admin@mail.com' && val.password === '1234'){
      window.alert('Login success')
    }else{
      window.alert('Login Failed')
    }
  }
  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <Formik
        onSubmit={onLoginRequest}
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}>
        {(props)=><AuthForm {...props} />}
      </Formik>
    </Container>
  )
}

export default Test