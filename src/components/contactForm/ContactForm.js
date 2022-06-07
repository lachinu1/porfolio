/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

// Estilos
import './ContactForm.css'

const useStyles = makeStyles((theme) => ({

  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #e70b5c',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },

  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #e70b5c',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },

  submit: {
    '&': {
      backgroundColor: '#e70b5c',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#b80c4b',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const ContactForm = () => {

  const [status, setStatus] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const classes = useStyles()

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setEmailText('')
        setMessageText('')
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  const handleEmailChange = (event) => {
    const input = String(event.target.value)
    setEmailText(input)
  }

  const handleMessageChange = (event) => {
    const input = String(event.target.value)
    setMessageText(input)
  }

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action="https://formspree.io/mvolplar"
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={handleEmailChange}
          variant="filled"
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Mensaje"
          value={messageText}
          onChange={handleMessageChange}
          multiline
          rows="5"
          variant="filled"
        />
        {status === 'SUCCESS' ? (
          <p className="email-success">¡Gracias por escribirme!</p>
        ) : (
          <Button className={classes.submit} type="submit" variant="contained">
            Enviar
          </Button>
        )}
        {status === 'ERROR' && <p>Uy! Hubo un error 😬</p>}
      </form>
    </div>
  )
}

export default ContactForm
