import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)


const handler = async (event) => {
  try {
    const response = await openai.createEdit({
          model: "text-davinci-edit-001",
          input: event.body,
          instruction: "Correct spelling mistakes, punctuation, grammar and capitalizing",
      })
    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.data
      }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
