
import logo from './logo.svg'
import './App.css'

import { AddMessage } from './Components/Admin/Messages/AddMessage'
import { GetMessage } from './Components/Admin/Messages/GetMessage'
import { MessageInput } from "./Components/Admin/Messages/MessageInput"
import { Dashboard } from './Components/Admin/Dashboard/Dashboard'

function App() {
 

  return (
    <div className="App">
      {/* <AddMessage/> */}
      {/* <GetMessage/> */}
      {/* <MessageInput/> */}
      <Dashboard/>
     
    </div>
  )
}

export default App


//Messages- Admin
//<AddMessage/>
// <GetMessage/>

