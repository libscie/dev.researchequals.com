import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const DataProcessingAgreementPage = () => {
  return (
    <>
      <Metadata
        title="DataProcessingAgreement"
        description="DataProcessingAgreement page"
      />

      <h1>DataProcessingAgreementPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/DataProcessingAgreementPage/DataProcessingAgreementPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>dataProcessingAgreement</code>, link to
        me with `
        <Link to={routes.dataProcessingAgreement()}>
          DataProcessingAgreement
        </Link>
        `
      </p>
    </>
  )
}

export default DataProcessingAgreementPage
