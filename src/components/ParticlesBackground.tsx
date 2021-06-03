import Particles from 'react-tsparticles';
import { theme } from '../theme';
import * as React from 'react';

export const ParticlesBackground: React.FC<{}> = () => {
  return (
    <Particles
      id="tsparticles"
      width="400px"
      height="400px"
      options={{
        fpsLimit: 30,

        background: {
          color: 'transparent', //theme.colors.gray[950],
        },
        backgroundMode: {
          enable: false,
        },
        particles: {
          color: {
            // value: ['#f67e7d', '#843b62', '#621940'],
            value: [theme.colors.gray[500], theme.colors.gray[500], theme.colors.gray[500]],
          },
          links: {
            // color: '#ffb997',
            color: theme.colors.gray[100],
            enable: true,
          },
          move: {
            enable: true,
            speed: 0.4,
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 1,
            },
            animation: {
              enable: true,
              speed: 2.5,
              minimumValue: 1,
            },
          },
          opacity: {
            value: 0.8,
            random: {
              enable: true,
              minimumValue: 0.4,
            },
          },
        },
      }}
    />
  );
};
