import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

import FileUpload from 'src/components/FileUpload/FileUpload'
import QuickSearch from 'src/components/QuickSearch/QuickSearch'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        title={t('HomePage.title')}
        description={t('HomePage.description')}
      />
      <h1 className="mx-auto my-16 text-center text-4xl md:text-6xl">
        {t('HomePage.hero')}
      </h1>
      <div className="mx-auto my-16 max-w-4xl">
        <QuickSearch />
      </div>
      <FileUpload
        onSuccess={(res) => {
          alert(res)
        }}
      />
    </>
  )
}

export default HomePage
