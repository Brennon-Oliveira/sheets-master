import styles from './ToolBarStyle.module.scss';

export interface ToolBarIconButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
}

export default function ToolBarIconButton(props: ToolBarIconButtonProps) {
	return (
		<button className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}
