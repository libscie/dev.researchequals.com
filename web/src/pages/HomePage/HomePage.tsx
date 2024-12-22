import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

import QuickSearch from 'src/components/QuickSearch/QuickSearch'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        title={t('HomePage.title')}
        description={t('HomePage.description')}
      />
      <h1 className="mx-auto mt-8 text-center">{t('HomePage.hero')}</h1>
      <div className="mx-auto max-w-4xl">
        <QuickSearch />
      </div>
    </>
  )
}

export default HomePage
