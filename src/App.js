import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import cat from './assets/cat.gif';
import moon from './assets/moon.png';
import land from './assets/land.png';

function App() {
  const ref = React.useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.4, end: 3.5 }}>
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05} onClick={() => ref.current.scrollTo(3)}>
          <h2>Welcome to my imagination</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2} /* onClick={() => ref.current.scrollTo(0)} */>
          <h2>Hi there, world</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
