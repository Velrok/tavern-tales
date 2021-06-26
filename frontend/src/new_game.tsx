import React, { useContext } from "react"
import { Button } from "mini.css-react"
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { AppState } from './app_state'
import { useHistory } from "react-router-dom";

const creatGame = (data) => fetch('/v1/games', {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify(data)
})


export const NewGame = (props) => {
  const {campaignName, setCampaignName} = useContext(AppState)
  let history = useHistory()

  return <React.Fragment>
    <h2>New Game</h2>
    <Formik
      initialValues={{'campaignName': ''}}
      onSubmit={({campaignName}, {setSubmitting}) => {
        setCampaignName(campaignName)
        creatGame({name: campaignName})
          .then(resp => resp.json())
          .then(({id}) => {
            setSubmitting(false)
            history.push(`/game/${id}`)
          })
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
