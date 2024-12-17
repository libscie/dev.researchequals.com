import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="mx-auto min-h-36 pb-24 font-medium tracking-wide text-violet-950 dark:text-violet-50">
      <div className="mx-auto w-max">
        <h2 className="mx-auto mb-3 text-center text-xl">
          {t('Footer.title')}
        </h2>
        <hr className="mb-4" />
        <ol className="flex h-12 items-center justify-between gap-x-4 pb-4">
          <li>
            <a
              href="#about"
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {t('Footer.about')}
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {t('Footer.terms')}
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {t('Footer.privacy')}
            </a>
          </li>
          <li>
            <a
              href="#copyright"
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {t('Footer.copyright')}
            </a>
          </li>
        </ol>
      </div>
    </footer>
  )
}

export default Footer
