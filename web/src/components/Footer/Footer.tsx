import { LogoDiscord, LogoGithub, LogoMastodon, LogoLinkedin } from '@carbon/icons-react'
import { Link, routes } from '@redwoodjs/router'
import ResearchEqualsLogoSymbol from 'src/components/ResearchEqualsLogoSymbol/ResearchEqualsLogoSymbol'
import FooterColumn from '../FooterColumn/FooterColumn'

const Footer = () => {
  const date = new Date()

  return (
    <footer className='grid md:flex bg-violet-900 text-white p-2'>
        <FooterColumn flexGrow={false}>
          <ResearchEqualsLogoSymbol />
          <p>ResearchEquals</p>
          <span className="flex items-center justify-center gap-1 text-sm text-violet-50 lg:justify-start ">
            {date.getFullYear()}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode" target="_blank" rel='noreferrer'>
              <svg
                width="14"
                height="14"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className='fill-violet-50'
                >
                <path
                  d="M25.6443 16.2393C25.1429 16.0753 24.593 16 24 16C21.062 16 19 18.2494 19 24C19 25.7934 19.2005 27.2462 19.5656 28.3966L25.6443 16.2393ZM28.4704 19.5313L22.3722 31.7276C22.8746 31.9124 23.4203 32 24 32C27.0825 32 29 29.9663 29 24C29 22.1519 28.816 20.6811 28.4704 19.5313ZM24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM24 12C29.346 12 33 15.8754 33 24C33 32.1246 29.346 36 24 36C18.7714 36 15 31.8858 15 24C15 16.1142 18.7714 12 24 12Z"
                  />
              </svg>
            </a>
            CC0
          </span>
        </FooterColumn>
        <FooterColumn flexGrow={false}>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.terms()}>Terms</Link>
          <Link to={routes.privacy()}>Privacy Policy</Link>
        </FooterColumn>
        <FooterColumn flexGrow={true}>
          <Link to={routes.codeOfConduct()}>Code of Conduct</Link>
          <Link to={routes.dataProcessingAgreement()}>
            Data Processing Agreement
          </Link>
          <Link to={routes.poisonPill()}>Poison Pill</Link>
          <Link to={routes.rightOfWithdrawal()}>Right of Withdrawal</Link>
          <Link to={routes.security()}>Security Policy</Link>
        </FooterColumn>
        <FooterColumn flexGrow={false}>
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
        </FooterColumn>
      </footer>
  )
}

export default Footer
