import Link from 'next/link';

import { ColorSubtitle } from '@/components/ColorSubtitle/ColorSubtitle';
import styles from '@/components/ServiceCards/ServiceCards.module.scss';
import { IconName, SvgInline } from '@/components/SvgInline/SvgInline';

interface ICard {
  title: string;
  icon: IconName;
  description: string;
  link: string;
}

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
];

export const ServiceCards = () => (
  <section className="container">
    <ColorSubtitle title="cross-team at the core" />

    <h2 className={`${styles.title} headline1`}>
      We provide services with industry highest expertise and best practices
    </h2>

    <div className={styles.cards}>
      {cards.map((card: ICard, index) => (
        <div className={styles.card} key={index}>
          <SvgInline name={card.icon} width="145" height="125" />

          <h4 className={`${styles['card-title']} subheadline1`}>{card.title}</h4>

          <p className={`${styles.description} paragraph1`}>{card.description}</p>

          <Link href={card.link}>
            <a className={`${styles.link} subheadline2`}>
              <span className={styles['left-arrow']}>&#60;</span> <span>Read more</span>{' '}
              <span className={styles['right-arrow']}>/ &#62;</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </section>
);
