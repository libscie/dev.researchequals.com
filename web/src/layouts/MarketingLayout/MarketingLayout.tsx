import Footer from 'src/components/Footer/Footer'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

type MarketingLayoutProps = {
  children?: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <>
    <NavigationBar />
    {children}
    <Footer />
  </>
}

export default MarketingLayout
