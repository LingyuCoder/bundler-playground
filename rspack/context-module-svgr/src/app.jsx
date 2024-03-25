import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    async function load() {
      const name = 'react'
      const icon = await import(`./assets/${name}.svg?react`) // Cannot find module './assets/react.svg'
      console.log(icon)
    }
    load()
  }, [])
  return null
}

export default App