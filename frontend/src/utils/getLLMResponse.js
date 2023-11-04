import {OpenAI} from 'langchain/llms/openai';

import {OPENAI_API_KEY} from 'react-native-dotenv';

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

const getLLMResponse = async ({question = '', statement = ''}) => {
  if (!question) return null;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Description: Your goal is to answer the questions in most appropriate ways and as precise as possible. 
          
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
    });

    return completion.choices;
  } catch (error) {
    console.log({error});
    console.log(error.response);
  }
};

export default getLLMResponse;