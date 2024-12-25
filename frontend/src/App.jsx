import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SignUp } from '../components/signup'
import { SignIn } from '../components/signin'
import { DashBoard } from '../components/dashboard'
import { SendMoney } from '../components/sendmoney'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/Send' element={<SendMoney />} />

        </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
      {/* <SendMoney /> */}
      {/* <SignIn /> */}
      {/* <DashBoard /> */}
    </>
  )
}

export default App
