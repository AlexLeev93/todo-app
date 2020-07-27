import React from 'react';
import MediaQuery from 'react-responsive';

const MobileOnly = ({ children }: any) => {
  return <MediaQuery maxWidth={767}>{children}</MediaQuery>;
};

export default MobileOnly;
