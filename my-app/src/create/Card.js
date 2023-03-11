import React from 'react';

const Card = (props) => {
  return (
    <div>
      <article>{props.children}</article>
    </div>
  );
}

export default Card;


