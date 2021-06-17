import React, { useContext } from "react"
import { Button } from "mini.css-react"
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { AppState } from './app_state'

export const NewGame = (props) => {
  const {campaignName, setCampaignName} = useContext(AppState)
  
  return <React.Fragment>
    <h2>New Game</h2>
    <Formik
      initialValues={{'campaignName': ''}}
      onSubmit={({campaignName}, {setSubmitting}) => {
        setCampaignName(campaignName)
        setSubmitting(false)
      }}>
      {({isSubmitting}) => (
        <Form>
          <Field type="text" name="campaignName" placeholder="campaign name" />
          <ErrorMessage name="campaignName"/>
          <Button className="primary" type="submit" disabled={isSubmitting}>
          create game
          </Button>
        </Form>
      )}
    </Formik>
  </React.Fragment>
}
