import { useState } from 'react'

import Input from '../../form/input'
import { Link } from 'react-router-dom'
import styles from '../../form/Form.module.css'

/* contexts */
import {Context} from '../../../context/UserContext'

function Register(){
    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // enviar o usuario para o banco
        register(user)
    }

    return(
        <section className={styles.form_container}>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                text='Nome' 
                type='text' 
                name='name' 
                placeholder='Digite seu nome' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='Telefone' 
                type='text' 
                name='phone' 
                placeholder='Digite seu telefone' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                E-mail' 
                type='email' 
                name='email' 
                placeholder='Digite seu e-mail' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                Senha' 
                type='password' 
                name='password' 
                placeholder='Digite sua senha' 
                handleOnChanges={handleChange}
                />
                <Input 
                text='
                Confirmação de Senha' 
                type='password' 
                name='confirmpassword' 
                placeholder='Confirme sua senha' 
                handleOnChanges={handleChange}
                />
                <input type='submit' value='Cadastrar'/>
                    
                
                
                


            </form>
            <p>
              Já tem conta? <Link to="/login">Clique aqui.</Link>  
            </p>
        </section>
    )


}

export default Register