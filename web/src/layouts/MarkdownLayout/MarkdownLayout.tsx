import Footer from "src/components/Footer/Footer"

type MarkdownLayoutProps = {
  children?: React.ReactNode
}

const MarkdownLayout = ({ children }: MarkdownLayoutProps) => {
  return <>
    {children}
    <hr />
    <Footer />
    </>
}

export default MarkdownLayout
