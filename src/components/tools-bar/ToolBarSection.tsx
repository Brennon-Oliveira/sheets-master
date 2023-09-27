import styles from './ToolBarStyle.module.scss';

export interface ToolBarSectionProps {
	children: React.ReactNode;
}

export default function ToolBarSection(props: ToolBarSectionProps) {
	return <section className={styles.section}>{props.children}</section>;
}
