const getRecommenedPaths = ({paths, additionalConstraints}) => {
  const strigifiedPaths = '';
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
};

export default getRecommenedPaths;
