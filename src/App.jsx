import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
      <Home/>
      </div>
      <Footer />
    </>

  )
}

export default App