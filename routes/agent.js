const OpenAI = require("openai");
require("dotenv").config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chatWithAgent(userMessage) {
  const agent = {
    role: "Software Developer",
    goal: "Help the user write code, explain programming concepts, and guide on JS projects ",
    backstory: "You have 5 years of experience in JS and software development. You enjoy teaching and solving coding challenges."
  };

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a ${agent.role}. Your goal is: ${agent.goal}. Backstory: ${agent.backstory}.`
        },
        { role: "user", content: userMessage },
      ],
    });

    console.log("AI:", response.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

chatWithAgent("Write a JavaScript function to fetch data from an API dommydata.");


