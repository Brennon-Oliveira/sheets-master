import styles from './ToolBarStyle.module.scss';

export interface ToolBarRootProps {
	children: React.ReactNode;
}

export default function ToolBarRoot(props: ToolBarRootProps) {
	return <section className={styles.toolbar}>{props.children}</section>;
}
