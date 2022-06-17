import styles from '@/components/base/Button/Button.module.scss';

interface IProps {
  title: string;
}

export const Button = ({ title }: IProps) => <button className={`${styles.button} subheadline2`}>{title}</button>;
