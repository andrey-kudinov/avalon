import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { LottieMapping } from '@/components/Lottie/LottieMapping';

export type AnimationName = keyof typeof LottieMapping;

interface Props {
  name: AnimationName;
  width?: string;
  height?: string;
  hover?: boolean;
}

export const Lottie = ({ name, width, height, hover }: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container?.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: LottieMapping[name],
        name,
      });

      return () => {
        lottie.destroy();
      };
    }
  }, [name]);

  useEffect(() => (hover ? lottie.play(name) : lottie.pause(name)), [hover, name]);

  return <div ref={container} style={{ width, height }} />;
};
