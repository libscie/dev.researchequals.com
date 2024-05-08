import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import NavigationBar from 'src/components/NavigationBar/NavigationBar'

const WorksPage = () => {
  return (
    <>
      <Metadata title="Works" description="Works page" />
      <NavigationBar />

      <article className="h-full w-full lg:flex ">
        <div className="flex text-right lg:block lg:w-2/5 lg:p-2 lg:px-4">
          <span className="sticky top-2">
            <h1 className="mt-0 text-4xl">
              Title of the work is fairly long: But longer is always possible
            </h1>
            <p>
              Chris Hartgerink, Nami Sunami, Whoever Else, Example Name, Max
              Mustermann
            </p>
            <p className="">
              <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
                2020-02-01
              </span>
              <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
                Preprint
              </span>
              <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/20">
                English
              </span>
              <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/20">
                CC BY
              </span>
              <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
                10.53962/xxxx-xxxx
              </span>
            </p>
            {/* <p>2020-02-01</p>
            <p>10.53962/xxxx-xxxx</p>
            <p>CC BY</p>
            <p>Preprint</p>
            <p>English</p> */}
            <hr />
          </span>
        </div>
        <div className="w-full p-0">
          <div className="max-w-2xl lg:p-2 print:max-w-full ">
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <hr />
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <div className="m-2">
              Id magna cillum in aute velit. Do nisi officia ex dolor ex officia
              culpa incididunt est. Et minim officia cupidatat ad incididunt
              eiusmod. Cillum duis incididunt sit dolor officia veniam ut irure
              velit fugiat mollit commodo incididunt. Ut minim ea incididunt
              officia voluptate ipsum laboris laboris.
            </div>
            <div className="m-2">
              Eu in commodo cillum consectetur magna elit sit nulla. Eiusmod
              pariatur ea labore cupidatat duis mollit sit deserunt. Amet
              proident reprehenderit occaecat excepteur labore consequat labore
              nisi voluptate fugiat nisi velit irure. Ea nostrud qui qui
              reprehenderit. Incididunt in duis cillum aliquip excepteur sint
              voluptate ullamco.
            </div>
            <hr />
            <div className="w-full">
              <div className="sticky right-0 top-0 max-w-md">
                <h2 className="text-lg ">Reference list</h2>
                <ol className="text-normal my-4 list-outside list-decimal pl-6">
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                  <li className="my-2">
                    Brown, Josh; Jones, Phill; Meadows, Alice; [...] (2022).{' '}
                    <span className="font-semibold">
                      Incentives to invest in identifiers: A cost-benefit
                      analysis of persistent identifiers in Australian research
                      systems
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.5281/zenodo.7100578"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.5281/zenodo.7100578
                      </span>
                    </a>
                    . <span className="italic">Zenodo</span>.
                  </li>
                  <li className="my-2">
                    Kramer, Bianca; de Jonge, Hans (2022).{' '}
                    <span className="font-semibold">
                      The availability and completeness of open funder metadata:
                      Case study for publications funded by the Dutch Research
                      Council
                    </span>{' '}
                    <a
                      target="_blank"
                      href="https://doi.org/10.1162/qss_a_00210"
                      rel="noreferrer"
                    >
                      <span className="underline">
                        https://doi.org/10.1162/qss_a_00210
                      </span>
                    </a>
                    .{' '}
                    <span className="italic">Quantitative Science Studies</span>
                    .
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr />
      <Footer />
    </>
  )
}

export default WorksPage
