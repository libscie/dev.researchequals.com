import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'
import { settingsNav } from 'src/components/SecondaryNavUtils/SecondaryNavUtils'

const SettingsSecurityPage = () => {
  const onSubmit = async () => {
    alert('Not yet implemented')
  }
  return (
    <>
      <Metadata title="SettingsSecurity" description="SettingsSecurity page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={settingsNav}
            header="Settings"
            current="Security"
          />
        </MetadataContainer>
        <div className="w-full">
          <div className="max-w-2xl text-left lg:my-8">
            <Form onSubmit={onSubmit} className="flex flex-col">
              <span className="">
                <Label
                  name="email"
                  className="settings-label"
                  errorClassName="settings-label-error"
                >
                  Email
                </Label>
                <TextField
                  name="email"
                  className="settings-input"
                  errorClassName="settings-input settings-input-error"
                  validation={{
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                  }}
                  placeholder="test@example.com"
                />
                <FieldError name="email" className="" />
              </span>
              <hr />
              <span className="">
                <Label
                  name="password"
                  className="settings-label"
                  errorClassName="settings-label-error"
                >
                  Current password
                </Label>
                <PasswordField
                  name="password"
                  className="settings-input"
                  errorClassName="settings-input settings-input-error"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                  placeholder="Enter a password"
                />
                <FieldError name="password" className="" />
              </span>
              <span className="">
                <Label
                  name="new-password"
                  className="settings-label"
                  errorClassName="settings-label-error"
                >
                  New Password
                </Label>
                <PasswordField
                  name="password"
                  className="settings-input"
                  errorClassName="settings-input settings-input-error"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                  placeholder="Enter a password"
                />
                <FieldError name="password" className="" />
              </span>
              <span className="">
                <Label
                  name="repeat-password"
                  className="settings-label"
                  errorClassName="settings-label-error"
                >
                  Repeat Password
                </Label>
                <PasswordField
                  name="password"
                  className="settings-input"
                  errorClassName="settings-input settings-input-error"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                  placeholder="Enter a password"
                />
                <FieldError name="password" className="" />
              </span>
              <hr />

              <div className="">
                <Submit className="">Save changes</Submit>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SettingsSecurityPage
