import Footer from 'src/components/Footer/Footer'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

type MarkdownLayoutProps = {
  children?: React.ReactNode
}

const MarkdownLayout = ({ children }: MarkdownLayoutProps) => {
  return (
    <>
      <NavigationBar />
      {children}
      <hr />
      <Footer />
    </>
  )
}

export default MarkdownLayout
