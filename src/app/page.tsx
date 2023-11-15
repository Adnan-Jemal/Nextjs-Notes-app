import AddBtn from "./components/AddBtn"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import SignInPopup from "./components/SignInPopup"





export default function Home() {
  
  
  return (
    <main className="">
      <SignInPopup/>
      
      <Navbar/>
      <Notes/>
      <AddBtn/>
      
    

    </main>
  )
}
