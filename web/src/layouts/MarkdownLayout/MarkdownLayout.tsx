import Footer from "src/components/Footer/Footer"

type MarkdownLayoutProps = {
  children?: React.ReactNode
}

const MarkdownLayout = ({ children }: MarkdownLayoutProps) => {
  return <>
    {children}
    <Footer />
    </>
}

export default MarkdownLayout
