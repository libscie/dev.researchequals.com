import { LogoDiscord, LogoGithub, LogoMastodon, LogoLinkedin } from '@carbon/icons-react'
import { Link, routes } from '@redwoodjs/router'
import ResearchEqualsLogoSymbol from 'src/components/ResearchEqualsLogoSymbol/ResearchEqualsLogoSymbol'

const Footer = () => {
  return (
    <footer className='grid md:flex bg-violet-900 text-white p-2'>
        <div className='grid mx-2 mr-4 my-2 md:my-0 pt-2'>
          <ResearchEqualsLogoSymbol />
          <p>ResearchEquals</p>
        </div>
        <div className='grid mx-2 mr-4 my-2 md:my-0 pt-2'>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.terms()}>Terms</Link>
          <Link to={routes.privacy()}>Privacy Policy</Link>
        </div>
        <div className='flex-grow grid mx-2 my-2 md:my-0'>
          <Link to={routes.codeOfConduct()}>Code of Conduct</Link>
          <Link to={routes.dataProcessingAgreement()}>
            Data Processing Agreement
          </Link>
          <Link to={routes.poisonPill()}>Poison Pill</Link>
          <Link to={routes.rightOfWithdrawal()}>Right of Withdrawal</Link>
          <Link to={routes.security()}>Security Policy</Link>
        </div>
        <div className='grid mx-2 my-2 md:my-0'>
          <div>

          <a href="https://discord.gg/SefsGJWWSw" className='mx-1'  target="_blank" rel='noreferrer'>
            <LogoDiscord size={32} />
          </a>
          <a href="https://github.com/libscie/dev.researchequals.com" className='mx-1'  target="_blank" rel='noreferrer'>
            <LogoGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/showcase/researchequals" className='mx-1'  target="_blank" rel='noreferrer'>
            <LogoLinkedin size={32} />
          </a>
          <a href="https://akademienl.social/@ResearchEquals" className='mx-1'  target="_blank" rel='noreferrer'>
            <LogoMastodon size={32} />
          </a>

          </div>
          <div>
            <Link to={routes.imprint()}>Imprint</Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer
