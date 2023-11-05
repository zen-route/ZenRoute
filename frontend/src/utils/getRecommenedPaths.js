import getLLMResponse from './getLLMResponse';
import {getJSONFromLLMResponse} from './getPropertiesFromPrompt';
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
    question: `Out of these paths, can you give me the top 3 paths for the user to take according to the following constraints: ${additionalConstraints}?
    Make sure the output is like: 
    If the paths 1, 2, 4 are the ones to be recommended, then the output should be:
    1, 2, 4

    Make sure the output is comma separated and it inluces only the path number
    `,
  });

  console.log('recommendedPath', recommendedPath);
  const hehe = getJSONFromLLMResponse(recommendedPath).answer.split(', ');
  console.log('HEHE: ', hehe);
  // convert all in hehe to numbers
  const indices = hehe.map(index => parseInt(index, 10));
  // console.log('indices', indices);
  return indices;
};

export default getRecommenedPaths;
