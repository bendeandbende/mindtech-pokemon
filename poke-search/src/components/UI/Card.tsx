import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pokemon-wrapper nes-container is-rounded">{children}</div>
  );
};

export default Card;
