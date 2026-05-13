import { useState } from "react";

import InputField from "../components/InputField";

export default function LoginPage(){
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
    return(
        <form onSubmit={handleSubmit}>
            <InputField label='Endereço de e-mail' placeholder='user@email.com' type="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></InputField>
            <InputField label='Senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)}><a href="esqueceu.html">Esqueceu?</a></InputField>

            {erro && <p>{erro}</p>}
            <button type="submit">Enviar</button>
        </form>
    )
}