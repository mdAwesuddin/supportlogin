import React,{useState} from 'react'
import { Container, Row, Col, Form, Button,FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as formik from 'formik';
import * as yup from 'yup';
const Login = ({onLogin}) => {
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
    const {Formik}=formik;

    const schema=yup.object().shape({
      email:yup.string().email('Email is Invalid').required('This Field is Required'),
      password:yup.string().required('This Field is Required'),
    })

    const handleSubmit=()=>{
      if (email === 'user@gmail.com' && pass === 'User@123') {
      onLogin();
      }
    }

    
  return (
      <Formik 
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        email:'',
        password:''
      }}
      >
        {({handleSubmit,isSubmitting,values,touched,errors,setFieldValue})=>{
          const handleChange = ( fieldName) => (event) => {
            const { value } = event.target;

            if (fieldName === 'email') {
              setEmail(value);
            } else if (fieldName === 'password') {
              setPass(value);
            }
            // console.log(email,pass)
            setFieldValue(fieldName, value);
      
               };
               return(
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center w-75">
          <Col md={6} className="text-center">
            <img
              className="mb-5 "
              src="icon.png" 
              alt="Logo"
              height="150"
              width="170"
            />
             <h6 className='mb-4 mt-3'>Please sign in to your account</h6>
             <Form noValidate onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form
          .Control type="email" name="email" value={values.email} onChange={handleChange('email')}  isInvalid={touched.email && !!errors.email} placeholder="Email" className='form-control-lg'/>
          {touched.email && errors.email && <Form.Control.Feedback type='invalid' className='d-flex'>{errors.email}</Form.Control.Feedback>}
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" >
          <Form
          .Control  type="password" name='password' value={values.password} onChange={handleChange('password')} isInvalid={touched.password && !!errors.password} placeholder="Password" className='form-control-lg '/>
          {touched.password && errors.password && <Form.Control.Feedback type='invalid' className='d-flex'>{errors.password}</Form.Control.Feedback>}
        </FloatingLabel>
            <Button variant="primary" data-testid={"login"} type="submit" className="w-100 mt-3" disabled={isSubmitting}>
                Login
              </Button>
              </Form>
          </Col>
        </Row>
      </Container>
               )
        }}
      </Formik>
              )
}

export default Login