import Link from 'next/link';
import { useState } from 'react';

import { AnimationName, Lottie } from '@/components/Lottie/Lottie';
import styles from '@/components/ServiceCards/ServiceCards.module.scss';

export interface ICard {
  title: string;
  icon: AnimationName;
  description: string;
  link: string;
}

interface IProps {
  card: ICard;
}

export const ServiceCard = (props: IProps) => {
  const { link, icon, title, description } = props.card;
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={link}>
      <a className={styles.card} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Lottie name={icon} width="145px" height="125px" hover={isHover} />

        <h4 className={`${styles['card-title']} subheadline1`}>{title}</h4>

        <p className={`${styles.description} paragraph1`}>{description}</p>

        <p className={`${styles.link} subheadline2`}>
          <span className={styles['left-arrow']}>&#60;</span> <span>Read more</span>{' '}
          <span className={styles['right-arrow']}>/ &#62;</span>
        </p>
      </a>
    </Link>
  );
};
