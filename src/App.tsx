import { Panel } from './components/Panel'
import { Layout } from './components/Layout'
import { Footer } from './components/ui/Footer'

function App (): JSX.Element {
  return (
    <Layout>
      <Panel />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </Layout>
  )
}

export default App
