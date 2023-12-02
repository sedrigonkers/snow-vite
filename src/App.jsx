import { useEffect, useState } from 'react'
import Snowflake from './Snowflake'
import blue from './assets/blue.png'
import pink from './assets/pink.png'
import white from './assets/white.png'
import './App.css'

function App() {

  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })

  const snowflakes = [blue, pink, white]
  const animations = ['fall-1', 'fall-2', 'fall-3']

  function selectRandom(list) {
    const randomElement = Math.round(Math.random() * (list.length - 1));
    return list[randomElement];
  }

  const [elements, setElements] = useState([])

  const onRemove = (id) => {
    setElements(elements.filter(el => el.id !== id))
  }

  useEffect(() => {
    window.onmousemove = e => {
      console.log(elements.length)
      const { x, y } = e
  
      const distance = Math.sqrt(Math.pow(x - lastPosition.x, 2) + Math.pow(y - lastPosition.y, 2));
      if (distance < 50) return;
  
      console.log('snowflake')
      setElements(a => [...a, {
        id: `${x + y}`,
        x,
        y,
        snowflake: selectRandom(snowflakes),
        animation: selectRandom(animations)
      }])
  
      setLastPosition({ x, y, })
  
    }
  }, [])

  return (
    <div id='wrapper'>
      <button className="button">press me!</button>
      {elements.map(({ x, y, animation, snowflake, id }, index) => {
        return <Snowflake key={id} id={id} onRemove={onRemove} animation={animation} snowflake={snowflake} x={x} y={y} />
      })}
    </div>
  )
}

export default App
