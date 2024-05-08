import Footer from 'src/components/Footer/Footer'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

type ContentLayoutProps = {
  children?: React.ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <NavigationBar />
      {children}
      <hr />
      <Footer />
    </>
  )
}

export default ContentLayout
