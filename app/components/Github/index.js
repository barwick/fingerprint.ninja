import React from 'react';

import GithubCorner from './github-corners.html';

// dangerouslySetInnerHTML used to import pre-written html widget
// Github Corners: https://github.com/tholman/github-corners
/* eslint-disable-next-line react/no-danger */
const Github = () => <div dangerouslySetInnerHTML={{ __html: GithubCorner }} />;

export default Github;
