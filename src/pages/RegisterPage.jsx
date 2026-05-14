import { useState } from "react";

export default function RegisterPage({ page, setPage }) {

    const [passo, setPasso] = useState('1');

    return (
        page === 'register' && (

            <div className="container">

                <div className="formulario">

                    <div>

                        <h1>Cadastre-se</h1>

                        {passo === '1' && (
                            <>
                                <p>
                                    Passo 1 de 2. <br />
                                    Por favor insira seu CPF para prosseguir.
                                </p>

                                <label htmlFor="cpf">CPF</label>

                                <input
                                    name="cpf"
                                    id="cpf"
                                    type="text"
                                    placeholder="000.000.000-00"
                                />

                                <button onClick={() => setPasso('2')}>
                                    Prosseguir
                                </button>
                            </>
                        )}

                        {passo === '2' && (
                            <div>

                                <p>
                                    Passo 2 de 2. <br />
                                    Por favor insira seus dados para finalizar.
                                </p>

                                <form>

                                    <label htmlFor="nome">Nome</label>

                                    <input
                                        name="nome"
                                        id="nome"
                                        type="text"
                                        placeholder="Nome completo"
                                    />

                                    <br />

                                    <label htmlFor="telefone">Telefone</label>

                                    <input
                                        name="telefone"
                                        id="telefone"
                                        type="tel"
                                        placeholder="(99) 99999-9999"
                                    />

                                    <br />

                                    <label htmlFor="email">E-mail</label>

                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="email@email.com"
                                    />

                                    <br />

                                    <label htmlFor="senha">Senha</label>

                                    <input
                                        name="senha"
                                        id="senha"
                                        type="password"
                                    />

                                    <br />

                                    <button type="submit">
                                        Cadastrar
                                    </button>

                                </form>

                            </div>
                        )}

                    </div>

                </div>

            </div>
        )
    );
}