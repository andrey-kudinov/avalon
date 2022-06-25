import { ColorSubtitle } from '@/components/ColorSubtitle/ColorSubtitle';
import { ServiceCard } from '@/components/ServiceCards/ServiceCard';
import styles from '@/components/ServiceCards/ServiceCards.module.scss';

import type { ICard } from './ServiceCard';

const cards: ICard[] = [
  {
    title: 'Front-end development',
    icon: 'frontend',
    description:
      'Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.',
    link: '/',
  },
  {
    title: 'Back-end development',
    icon: 'backend',
    description:
      'Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.',
    link: '/',
  },
  {
    title: 'Shopify plus integration',
    icon: 'shopify',
    description:
      'Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.',
    link: '/',
  },
  {
    title: 'React development',
    icon: 'react',
    description:
      'Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.',
    link: '/',
  },
  {
    title: 'Vue development',
    icon: 'vue',
    description:
      'Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.',
    link: '/',
  },
];

export const ServiceCards = () => (
  <section className="container">
    <ColorSubtitle title="cross-team at the core" />

    <h2 className={`${styles.title} headline1`}>
      We provide services with industry highest expertise and best practices
    </h2>

    <div className={styles.cards}>
      {cards.map((card: ICard, index) => (
        <ServiceCard card={card} key={index} />
      ))}
    </div>
  </section>
);
