import './App.css'
import Delete from './component/Delete'
import Register from './component/Register'
import Update from './component/Update'
import View from './component/View '
function App() {
   return (
   <div style={{border:'5px solid red', padding:'20px',backgroundColor:'pink' }}>
    <h1  style={{backgroundColor:'black' ,color:'white', width:'100%'}}>CRUD FUNCTION APP</h1>
    <Register/><br/>
   <Update/><br/>
   <Delete/><br/>
    <View/>
   
  

   </div>
  )
}

export default App