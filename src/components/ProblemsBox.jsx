import React, { Children } from 'react';

function ProblemsBox({ header, body, priority }) {
  return (
    <>
      {header}
      <br></br>
      {priority}

      {body}
    </>
  );
}

export default ProblemsBox;
