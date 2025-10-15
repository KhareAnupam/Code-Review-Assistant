
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const Groq = require('groq-sdk');
const cors = require('cors');
require('dotenv').config();

const upload = multer({ dest: 'uploads/' });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const app = express();
const PORT = 3000;

app.use(cors());


app.get('/', (req, res) => {
  res.send('Code Review Assistant server is ready!');
});

app.post('/review', upload.single('codefile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Error: No file uploaded.');
  }

  try {
    const filePath = req.file.path;
    const codeContent = fs.readFileSync(filePath, 'utf8');

    const prompt = `Review this code for readability, modularity, and potential bugs. Provide improvement suggestions. Here is the code:\n\n${codeContent}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", 
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reviewText = response.choices[0].message.content;

    fs.unlinkSync(filePath); 

    res.json({ review: reviewText });

  } catch (error) {
    console.error('Error during Groq review:', error);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).send('Failed to generate code review.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});