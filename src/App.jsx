
import './App.css'
import Frame1 from './Components/Frame1'
import Frame2 from './Components/Frame2'
import Navbar from './Components/Navbar'
import ProfileForm from './Components/ProfileForm'

function App() {
  
  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start gap-[148px] tracking-[normal] mq450:gap-[148px] mq750:gap-[148px]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[117px] max-w-full mq450:gap-[117px] mq750:gap-[117px]">
        <Frame1/>
        <Frame2/>
      </main>
      <footer className="self-stretch h-[441px] relative [background:linear-gradient(180deg,_rgba(240,_118,_121,_0),_#f07679)] shrink-0" />
    </div>
  )
}

export default App
