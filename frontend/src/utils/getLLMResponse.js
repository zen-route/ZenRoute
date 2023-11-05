import {OPENAI_API_KEY} from 'react-native-dotenv';

import axios from 'axios';
const getLLMResponse = async ({question = '', statement = ''}) => {
  const apiKey = OPENAI_API_KEY;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    messages: [
      {
        role: 'system',
        content: `Description: Your goal is to return a JSON object for the questions in most appropriate ways and as precise as possible.
        {
          "answer": "string",
        }
        Instruction: You will be given a statement and a question and you'll have to answer the question with one word or as directed and the answer should only be derived from that statement only and in case if the answer is not available in the statement please return "-" as answer.`,
      },
      {
        role: 'user',
        content: `Statement: ${statement}

        Question: ${question}
        `,
      },
    ],
    model: 'gpt-3.5-turbo',
  };

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      data,
      {headers},
    );
    // console.log('RESPONSE', response.data.choices[0].message);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API request failed:', error);
    return null;
  }
};

export default getLLMResponse;
