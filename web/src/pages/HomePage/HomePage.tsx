import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

import BentoBox from 'src/components/BentoBox/BentoBox'
import QuickSearch from 'src/components/QuickSearch/QuickSearch'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        title={t('HomePage.title')}
        description={t('HomePage.description')}
      />
      <h1 className="mx-auto mt-8 text-center text-2xl md:text-6xl">
        {t('HomePage.hero')}
      </h1>
      <div className="mx-auto max-w-4xl">
        <QuickSearch />
      </div>
      <BentoBox />
    </>
  )
}

export default HomePage
