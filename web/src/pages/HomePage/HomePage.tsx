import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        title={t('HomePage.title')}
        description={t('HomePage.description')}
      />
      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.description')}</p>
    </>
  )
}

export default HomePage
