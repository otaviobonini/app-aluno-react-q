import { useState } from "react";

import InputField from "../components/InputField";

export default function LoginPage({page, setPage}){
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [erro,setErro] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        if (!email || !senha){
            setErro('Preencha todos os campos')
            return;
        }
        setErro('')
        console.log(`Login: ${email} ${senha}`)
    }
    return (page === 'login' &&  ( <div className="formulario">
                <div>
    
                    <h1>Bem-vindo de volta</h1>
                    <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>
    
                     <form onSubmit={handleSubmit}>
            <InputField label='Endereço de e-mail' placeholder='user@email.com' type="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></InputField>
            <InputField label='Senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)}><a href="esqueceu.html">Esqueceu?</a></InputField>

            {erro && <p>{erro}</p>}
            <button type="submit">Enviar</button>
        </form>
                    
                    <p className="registre-se">Não tem uma conta? <a onClick={() => setPage('register')}>Registre-se agora.</a></p>
    
                </div>
            </div>))
       

}