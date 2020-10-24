import React, { useState } from 'react';

import { Container } from './styles';

import colors from '~/lib/data';

function Home() {
  const [filter, setFilter] = useState('all');

  function setFilterValue({ target }) {
    setFilter(target.value === '' ? 'all' : target.value);
  }

  return (
    <Container>
      <div>
        <input onChange={setFilterValue} type="text" />
      </div>
      {colors
        .filter(({ color }) => [color, 'all'].includes(filter))
        .map(({ color, value }) => (
          <li key={value}>
            {color} coded as {value}
          </li>
        ))}
    </Container>
  );
}

export default Home;
