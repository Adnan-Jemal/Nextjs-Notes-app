import AddBtn from "./components/AddBtn"
import AddNotePopup from "./components/AddNotePopup"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import SignInPopup from "./components/SignInPopup"





export default function Home() {
  
  
  return (
    <main className="">
      <SignInPopup/>
      <AddNotePopup/>
      
      <Navbar/>
      <Notes/>
      
      
    

    </main>
  )
}
