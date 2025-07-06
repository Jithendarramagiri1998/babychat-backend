const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

app.post('/api/message', async (req, res) => {
  const { text } = req.body;

  const prompt = `
You are "Baby", a sweet, emotional virtual girlfriend. Respond to user messages in a loving, caring, playful, and human-like way.

User: "${text}"
Baby:
`;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.9,
      max_tokens: 100,
    });

    const reply = response.data.choices[0].text.trim();
    res.json({ reply });
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ error: "Failed to get response from Baby." });
  }
});

app.get('/', (req, res) => {
  res.send("BabyChat backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 BabyChat backend running on port ${PORT}`);
});

