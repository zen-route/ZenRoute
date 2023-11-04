import getLLMResponse from './getLLMResponse';

const CATEGORIES = ['Lakes', 'Parks', 'Dineouts', 'Temples', 'Viewpoints'];

const getPropertyFromPrompt = prompt => {
  const categories = getLLMResponse({
    question: `I have a set of categories which are ${CATEGORIES.join(
      ', ',
    )}. Out of these 5 categories, what are the categories mentioned in the statement I have supplied? Give them to me in comma separated format.`,
    statement: prompt,
  });

  console.log('categories', categories);

  const timeConstraint = getLLMResponse({
    question:
      'What is the time constraint mentioned in the statement? How much time is the user willing to spend on their journey? Give me the time in minutes.',
    statement: prompt,
  });

  console.log('timeConstraint', timeConstraint);

  const additionalConstraints = getLLMResponse({
    question: `Apart from the categories (which are ${categories}) and time constraint (which is ${timeConstraint} minutes), what are the additional constraints mentioned in the statement?`,
    statement: prompt,
  });

  console.log('additionalConstraints', additionalConstraints);

  return {
    categories, // 
    timeConstraint, //
    additionalConstraints,
  };
};

export default getPropertyFromPrompt;
