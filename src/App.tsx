import Header from './Components/Header'
import Sidenav from './Components/Sidenav'
import Resumo from './Pages/Resumo'
import './Style.css'

const App = () => {
  return (
    <div>
      <Sidenav/>
      <Header/>
      <Resumo />
    </div>
  )
}

export default App