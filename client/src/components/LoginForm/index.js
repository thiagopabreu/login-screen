import { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserService from '../../services/user'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToRegister, setRedirectToRegister] = useState(false)

    if(redirectToRegister == true)
        return <Navigate to={{pathname: '/register'}} />


    const HandleSubmit = async(event) => {
        event.preventDefault()
        try {
            const user = await UserService.login({email: email, password: password})
            if(user.data != null) {
                alert(`Login Sucess\nBem vindo ${user.data.user.name}`)
                setRedirectToRegister(true)
            } else {
                alert('Login Failed')
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center itens-center'>
                <Form style={{width: '30rem'}}>
                    <h3 className='d-flex pb-3 text-white'>Bem-vindo ao Login</h3>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className="text-white">E-MAIL / CPF / PIS</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>PASSWORD</Form.Label>
                        <Form.Control type="passwrod" value={password} onChange={e => setPassword(e.target.value)} required className='bg-dark text-light' />
                        <a onClick={e => setRedirectToRegister(true)}>Registre-se</a>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" className='text-white'/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={e => HandleSubmit(e)}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginForm