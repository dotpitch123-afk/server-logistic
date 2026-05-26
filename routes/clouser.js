



const readline = require('readline-sync');
const OpenAI = require('openai');

require("dotenv").config();


const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY,

});

console.log("AI Chatbot is running! Type 'exit' to quit.");

async function chat() {
  while (true) {
    const input = readline.question("You: ");
    if (input.toLowerCase() === "exit") {
      console.log("Bot: Goodbye!");
      break;
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: input }],
        max_tokens: 150,
      });

      const answer = response.choices[0].message.content;
      console.log("Bot:", answer);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }
}

chat();
