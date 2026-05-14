import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './assets/style.css'
import { useState } from 'react'
function App() {

  const [page, setPage] = useState('login')
  return (
    
    <>
     <div className="container">

        <div className="hero">
            <p>
                "Educação não é o aprendizado de fatos,
                mas treinamento da mente para pensar."
                <span>Albert Einstein</span>
            </p>
        </div>

        <LoginPage page={page} setPage={setPage}></LoginPage>
        <RegisterPage page={page} setPage={setPage}></RegisterPage>

    </div>
    
    </>
  )
}

export default App
