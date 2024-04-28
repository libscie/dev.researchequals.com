import Footer from 'src/components/Footer/Footer'

type MarketingLayoutProps = {
  children?: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <>
    {children}
    <Footer />
  </>
}

export default MarketingLayout
