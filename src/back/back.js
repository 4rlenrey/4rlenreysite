import React from 'react';
import { withRouter } from 'react-router-dom';

import Arrow from '../Images/icons/arrow.svg';


const GoBack = ({ history }) => (
  <img src={ Arrow } onClick={() => history.goBack()} alt="Go back" />
);

export default withRouter(GoBack);
