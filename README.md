# BabyChat Backend

Node.js + Express backend for the emotional AI assistant "Baby". Uses OpenAI GPT API to respond to user messages in an emotional, romantic, human-like tone.

## Setup

1. Clone repo
2. Run `npm install`
3. Create `.env` file with your OpenAI key:
    ```
    OPENAI_API_KEY=your_key_here
    PORT=5000
    ```
4. Start server with `node index.js` or `pm2 start index.js`

Frontend should connect via `/api/message`

