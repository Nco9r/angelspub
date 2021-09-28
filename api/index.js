import express from 'express'
import Mailchimp from 'mailchimp-api-v3'
const API_KEY = '624893c3bdc3bf9dee6ee6d545b5aab9-us5'
const AUDIENCE_ID = '33d271ae7c'
const mailchimp = new Mailchimp(API_KEY)
const app = express()

app.use(express.json());

app.post('/subscribe', async(req, res) => {
  const {email: email_address} = req.body
    try{
      const response = await mailchimp.request({
        method: 'post',
        path: `/lists/${AUDIENCE_ID}/members`,
        body: {
          email_address,
          status: "subscribed"
        }
      })
      const { _links, ...result } = response
      res.status(result.statusCode).json(result)
    }catch(err){
      res.status(err.status).send(err.detail)
    }
})