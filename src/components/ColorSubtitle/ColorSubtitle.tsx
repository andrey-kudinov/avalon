import styles from '@/components/ColorSubtitle/ColorSubtitle.module.scss';

interface IProps {
  title: string;
}

export const ColorSubtitle = ({ title }: IProps) => <h3 className={styles.title}>{title}</h3>;
