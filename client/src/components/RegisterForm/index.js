import { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserService from '../../services/user'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RegisterForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [county, setCounty] = useState("")
    const [cep, setCep] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [number, setNumber] = useState("")
    const [complement, setComplement] = useState("")
    const [cpf, setCpf] = useState("")
    const [pis, setPis] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false)

    if(redirectToLogin == true)
        return <Navigate to={{pathname: '/'}} />

    const HandleSubmit = async(event) => {
        event.preventDefault()
        const object = HandleObject()
        try {
            const user = await UserService.register(object)
            setRedirectToLogin(true)
        } catch (error) {
            console.log(error)
        }
    }

    const HandleObject = () => {
        return {
            name: name,
            email: email,
            address: {
                country: country,
                state: state,
                county: county,
                CEP: cep,
                streetAddress: streetAddress,
                number:number,
                complement: complement
            },
            CPF: cpf,
            PIS: pis,
            password: password
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center itens-center'>
                <Form style={{width: '30rem'}}>
                    <h3 className='d-flex pb-2 text-white'>Registro</h3>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className="text-white">E-MAIL</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className="text-white">Nome</Form.Label>
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>CPF</Form.Label>
                        <Form.Control type="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>PASSWORD</Form.Label>
                        <Form.Control type="passwrod" value={password} onChange={e => setPassword(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>PIS</Form.Label>
                        <Form.Control type="passwrod" value={pis} onChange={e => setPis(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Pais</Form.Label>
                        <Form.Control type="passwrod" value={country} onChange={e => setCountry(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Estado</Form.Label>
                        <Form.Control type="passwrod" value={state} onChange={e => setState(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Bairro</Form.Label>
                        <Form.Control type="passwrod" value={county} onChange={e => setCounty(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>CEP</Form.Label>
                        <Form.Control type="passwrod" value={cep} onChange={e => setCep(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Endereço</Form.Label>
                        <Form.Control type="passwrod" value={streetAddress} onChange={e => setStreetAddress(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Numero</Form.Label>
                        <Form.Control type="passwrod" value={number} onChange={e => setNumber(e.target.value)} required className='bg-dark text-light' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Complemento</Form.Label>
                        <Form.Control type="passwrod" value={complement} onChange={e => setComplement(e.target.value)} required className='bg-dark text-light' />
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

export default RegisterForm