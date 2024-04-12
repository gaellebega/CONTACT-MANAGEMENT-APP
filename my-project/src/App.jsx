import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './components/contact'
import Body  from './components/body'
import Contactlist from './components/contactlist'
// import ContactManager from './components/delete2'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
          path= '/'
          element= { <Body/>}          
          />
          <Route 
          path= '/Contact'
          element= { <Contact/>}          
          />
           <Route 
          path= '/Contactlist'
          element= { <Contactlist/>}          
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
