import styles from '@/components/SectionTitle/SectionTitle.module.scss';
interface IProps {
  title: string;
}
export const SectionTitle = ({ title }: IProps) => <h2 className={styles.title}>{title}</h2>;
