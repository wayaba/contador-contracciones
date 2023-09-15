export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="grid bg-gray-800 items-center justify-center min-main-screen">
      {children}
    </main>
  )
}
