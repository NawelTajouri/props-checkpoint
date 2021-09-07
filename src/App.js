import './App.css';
import Profile from './profile/Profile';


const App = () => {
  

  
  const hundleName =(x)=> {
    alert(`profile for:${x}`)
  }
  

  
  return (
          <div className="myApp">
            <div>
            <Profile head="Bio" bio="Hello, My name is Nawel. Now, I am a Full Stack Js developer working with react on variety of projects." headpro="Profession" profession="Futur developer" hundleName={hundleName}  />
            </div>

 </div>
  )

  

}


export default App