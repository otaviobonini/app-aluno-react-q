import Welcome from "./Welcome.jsx"
import Counter from "./Counter.jsx"

function App() {

  const frutas = ['Maçã', 'Laranja', 'Uva'];

  return (
    <>

      <ul>
        {frutas.map((fruta) => 
          <li key={fruta}>{fruta}</li>
        )}
      </ul>

      <Welcome name="João" />
      <hr />
      <Welcome name="Paulo"/>
      <hr />
      <Welcome name="Maria"/>
      <hr />
      <Counter />
      <hr />
      <Counter />
      <hr />
      <Counter />
      
    </>
  )
}

export default App
