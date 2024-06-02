import {
  LogoDiscord,
  LogoGithub,
  LogoMastodon,
  LogoLinkedin,
} from '@carbon/icons-react'

import { Link, NavLink, routes } from '@redwoodjs/router'

import ResearchEqualsLogoSymbol from 'src/components/ResearchEqualsLogoSymbol/ResearchEqualsLogoSymbol'

import FooterColumn from '../FooterColumn/FooterColumn'

const Footer = () => {
  const date = new Date()

  return (
    <footer className="mx-auto grid w-5/6 pb-[7rem] font-serif md:flex lg:w-2/3">
      <FooterColumn flexGrow={false}>
        <Link
          to={routes.home()}
          role="link"
          className="focus:outline-none focus:outline-2 focus:ring focus:ring-violet-950"
        >
          <ResearchEqualsLogoSymbol />
          <p>ResearchEquals</p>
        </Link>
        <span className="flex gap-1 text-sm focus:outline-none focus:outline-2 focus:ring focus:ring-violet-950 lg:justify-start">
          {date.getFullYear()}
          <a
            href="https://creativecommons.org/publicdomain/zero/1.0/legalcode"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-violet-950"
            >
              <path d="M25.6443 16.2393C25.1429 16.0753 24.593 16 24 16C21.062 16 19 18.2494 19 24C19 25.7934 19.2005 27.2462 19.5656 28.3966L25.6443 16.2393ZM28.4704 19.5313L22.3722 31.7276C22.8746 31.9124 23.4203 32 24 32C27.0825 32 29 29.9663 29 24C29 22.1519 28.816 20.6811 28.4704 19.5313ZM24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM24 12C29.346 12 33 15.8754 33 24C33 32.1246 29.346 36 24 36C18.7714 36 15 31.8858 15 24C15 16.1142 18.7714 12 24 12Z" />
            </svg>
          </a>
          CC0
        </span>
      </FooterColumn>
      <FooterColumn flexGrow={false}>
        <NavLink to={routes.home()} activeClassName="underline">
          Home
        </NavLink>
        <NavLink to={routes.terms()} activeClassName="underline">
          Terms
        </NavLink>
        <NavLink to={routes.privacy()} activeClassName="underline">
          Privacy Policy
        </NavLink>
      </FooterColumn>
      <FooterColumn flexGrow={true}>
        <NavLink to={routes.codeOfConduct()} activeClassName="underline">
          Code of Conduct
        </NavLink>
        <NavLink
          to={routes.dataProcessingAgreement()}
          activeClassName="underline"
        >
          Data Processing Agreement
        </NavLink>
        <NavLink to={routes.poisonPill()} activeClassName="underline">
          Poison Pill
        </NavLink>
        <NavLink to={routes.rightOfWithdrawal()} activeClassName="underline">
          Right of Withdrawal
        </NavLink>
        <NavLink to={routes.security()} activeClassName="underline">
          Security Policy
        </NavLink>
      </FooterColumn>
      <FooterColumn flexGrow={false}>
        <div className="flex">
          <a
            href="https://discord.gg/SefsGJWWSw"
            className="mx-1"
            target="_blank"
            rel="noreferrer"
          >
            <LogoDiscord size={32} />
          </a>
          <a
            href="https://github.com/libscie/dev.researchequals.com"
            className="mx-1"
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/showcase/researchequals"
            className="mx-1"
            target="_blank"
            rel="noreferrer"
          >
            <LogoLinkedin size={32} />
          </a>
          <a
            href="https://akademienl.social/@ResearchEquals"
            className="mx-1 focus:underline focus:outline-none"
            target="_blank"
            rel="noreferrer"
          >
            <LogoMastodon size={32} />
          </a>
        </div>
        <div>
          <NavLink to={routes.imprint()} activeClassName="underline">
            Imprint
          </NavLink>
        </div>
      </FooterColumn>
    </footer>
  )
}

export default Footer
