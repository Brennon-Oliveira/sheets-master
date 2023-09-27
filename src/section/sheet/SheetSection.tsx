import { useState } from 'react';
import styles from './SheetSection.module.scss';

export default function SheetSection() {
	const [sheet, setSheet] = useState(
		new Array(10).fill(
			new Array(10).fill({
				content: '0',
			})
		) as Array<{
			content: string;
		}>[]
	);

	const focus = (row: number, cell: number) => {
		console.log(row, cell);
	};

	return (
		<section className={styles.sheet_section}>
			{sheet.map((row, rowIndex) => (
				<div>
					{row.map((cell, cellIndex) => (
						<div onClick={() => focus(rowIndex, cellIndex)}>{cell.content}</div>
					))}
				</div>
			))}
		</section>
	);
}
