import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Panel } from './components/Panel'

function App (): JSX.Element {
  return (
    <main className="bg-gray-800 grid h-screen items-center justify-center">
      <Header />
      <Panel />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
