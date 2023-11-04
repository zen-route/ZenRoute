import getLLMResponse from './getLLMResponse';

const CATEGORIES = ['Lakes', 'Parks', 'Dineouts', 'Temples', 'Viewpoints'];

const getJSONFromLLMResponse = response => {
  const json = response
    .replace(/'/g, '"')
    .replace(/True/g, 'true')
    .replace(/False/g, 'false');

  return JSON.parse(json);
};
const getPropertyFromPrompt = async prompt => {
  const categories = await getLLMResponse({
    question: `I have a set of categories which are ${CATEGORIES.join(
      ', ',
    )}. Out of these 5 categories, what are the categories mentioned in the statement I have supplied? Give them to me in comma separated format.`,
    statement: prompt,
  });

  console.log('categories', getJSONFromLLMResponse(categories).answer);

  const timeConstraint = await getLLMResponse({
    question:
      'What is the time constraint mentioned in the statement? How much time is the user willing to spend on their journey? Give me the time in minutes.',
    statement: prompt,
  });

  console.log('timeConstraint', getJSONFromLLMResponse(timeConstraint).answer);

  const additionalConstraints = await getLLMResponse({
    question: `Apart from the categories (which are ${categories}) and time constraint (which is ${timeConstraint} minutes), what are the additional constraints mentioned in the statement?`,
    statement: prompt,
  });

  console.log(
    'additionalConstraints',
    getJSONFromLLMResponse(additionalConstraints).answer,
  );

  return {
    categories: getJSONFromLLMResponse(categories).answer,
    timeContraint: getJSONFromLLMResponse(timeConstraint).answer,
    additionalConstraints: getJSONFromLLMResponse(additionalConstraints).answer,
  };
};

export default getPropertyFromPrompt;
