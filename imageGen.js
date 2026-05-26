require("dotenv").config();
const OpenAI = require("openai");
const fs = require("fs");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
// apiKey:apiKey
});  

async function generateImage() {
  try {
    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt: "A futuristic neon city with flying cars, digital art, ultra-detailed.",
      size: "1024x1024"
    });

    // Optionally log URL (if available)
    const imageUrl = response.data[0].url;
    console.log("Image URL:", imageUrl);
    let imageresponse = await client.images.generateImage({
      model:"gemini-1.5-iamge-10",
    
      prompt :" generate a hight resolution imiage of a futureristic neaon city with flying cars digital art ultra quality",
    size:"16:9 → 1344 × 768",

    })
    console.log( imageresponse [data][0].url)
    // Base64 image data
    const imageBase64 = response.data[0].b64_json;
 

    
    const buffer = Buffer.from(imageBase64, "base64");
    fs.writeFileSync("output.png", buffer);

    console.log("Image generated: output.png");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

generateImage();
