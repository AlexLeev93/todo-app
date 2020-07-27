import React from 'react';
import MediaQuery from 'react-responsive';

const DesktopOnly = ({ children }: any) => (
  <MediaQuery minWidth={768}>{children}</MediaQuery>
);

export default DesktopOnly;
