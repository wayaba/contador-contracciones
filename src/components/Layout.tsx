import { Footer } from './ui/Footer'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col bg-gray-800 items-center justify-center h-screen">
      <main className="">{children}</main>
      <Footer author="Pablo Pedraza" github="wayaba" />
    </div>
  )
}
