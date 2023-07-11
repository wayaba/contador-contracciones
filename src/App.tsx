
import { Footer } from './components/Footer'
import { Panel } from './components/Panel'

function App (): JSX.Element {
  return (
    <main className="bg-gray-800 grid h-screen items-center justify-center">

      <Panel />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
