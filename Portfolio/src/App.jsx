
import './App.css'
import OptionCard from './Components/PageFive/OptionCard'
import PageFour from './Components/PageThree/PageFour/PageFour'
import PageThree from './Components/PageThree/PageThree'
import Left from "./Components/leftsection/Left"
import Signup from './Components/leftsection/Profile/SignUpPage/Signup'
import PageFive from './Components/PageFive/PageFive'
import VerifyEmail from './Components/VerifyEmail/VerifyEmail'

function App() {
 
  return (
    <>
    <Left/>
    <Signup/>
    <PageThree/>
<PageFour/>
<PageFive/>
<VerifyEmail/>

    </>
  )
}

export default App
