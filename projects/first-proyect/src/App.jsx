import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const format = (userName) => `@${userName}`

  return (
    <div className='App'>
      <TwitterFollowCard 
      formatUserName={format} 
      userName="midudev" 
      name="Miguel Ángel Durán"
      />
      <TwitterFollowCard 
      formatUserName={format} 
      userName="pheralb" 
      name="Pablo Hernandez"
      />
      <TwitterFollowCard 
      formatUserName={format} 
      userName="jose" 
      name="Jose Miguel Mamani"
      />

      <TwitterFollowCard formatUserName={format} userName="dead" name="Dead Pablo Neruda"/>
    </div>
  )
}

export default App
