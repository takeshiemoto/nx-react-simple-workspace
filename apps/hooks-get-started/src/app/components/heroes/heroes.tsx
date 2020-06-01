import React from 'react';

import './heroes.scss';

export interface Hero {
  id: number;
  name: string;
}

/* eslint-disable-next-line */
export interface HeroesProps {}

export const Heroes = (props: HeroesProps) => {
  const hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  return (
    <>
      <h2>{hero.name} Details</h2>
      <div>
        <span>id:</span>
        {hero.id}{' '}
      </div>
      <div>
        <label>
          name:
          <input type="text" placeholder={'name'} />
        </label>
      </div>
    </>
  );
};

export default Heroes;
