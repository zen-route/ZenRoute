import getLLMResponse from './getLLMResponse';
const getRecommenedPaths = async (paths, additionalConstraints) => {
  let strigifiedPaths = '';
  for (let i = 0; i < paths.length; i++) {
    strigifiedPaths +=
      'Path ' +
      (i + 1) +
      ': ' +
      paths[i][2].map(node => node[0]).join(' -> ') +
      '\n';
  }

  const source = paths[0][2][0][0];
  const destination = paths[0][2][paths[0][2].length - 1][0];

  // call the getLLMResponse function here with the prompt which takes these stringified paths, source, destination and priortize the paths according to the additionalConstraints
  const recommendedPath = await getLLMResponse({
    statement: `I have a set of paths which are ${strigifiedPaths}.`,
    question: `Out of these paths, can you give me the top 3 paths for the user to take according to the following constraints: ${additionalConstraints}?`,
  });

  console.log('recommendedPath', recommendedPath);
};

export default getRecommenedPaths;
