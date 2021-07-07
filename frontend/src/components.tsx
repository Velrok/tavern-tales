import React, { useContext, useState } from "react"
import { AppState } from './app_state'
import { Link } from "react-router-dom"

export const Title = () => <Link to="/">
  <h1 id="app_title" fontSize={5} >Tavern Tales</h1>
</Link>

export const Buttons = () => <div>
</div>

export const CampaignName = () => {
  const { campaignName } = useContext(AppState)
  return <h2 id="campaign_name">Welcome to {campaignName}</h2>
}

const creatMessage = (gameId, data) => fetch(`/v1/games/${gameId}/messages`, {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  body: JSON.stringify(data)
})


export const Chat = ({ currentGame, messages, onMessageSent }) => {
  const characters = ["DM", "Grog", "Jasha", "Jester"]
  const [draft, setDraft] = useState('')
  const [character, setCharacter] = useState(characters[0])
  const [submitting, setSubmitting] = useState(false)

  const submitFn = () => {
    setSubmitting(true)
    creatMessage(currentGame.id, { content: draft, character }).then(() => {
      onMessageSent(draft)
      setDraft('')
      setSubmitting(false)    
})
  }

  return <div className="chat">
    <div className="messages">
      {messages
        .sort((a, b) => a.created_at < b.created_at ? -1 : 1)
        .map(({id, content, character}) => <p className="message" key={id}>
        <span class='message_character'>{character}: </span>
        {content}
        </p>)}
    </div>

    <div className="drafting input-group vertical">
      <select
        onChange={e => setCharacter(e.target.value)} >
        {characters.map(
          c => <option key={c} value={c}>{c}</option>
        )}
      </select>
      <textarea
        disabled={submitting}
        name="content"
        id="msg_content"
        value={draft}
        onKeyPress={e => {
          if (e.key === "Enter" && e.shiftKey) {
            submitFn()
          }
        }}
        onChange={e => setDraft(e.target.value)}
      />
      <button
        onClick={submitFn}
        className='primary'
        disabled={submitting}>
        send
      </button >
    </div>
  </div>
}

