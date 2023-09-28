import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './SheetSection.module.scss';

interface Cell {
	content: string;
	width: string;
	height: string;
	focus: boolean;
}

type CellState = [Cell, Dispatch<SetStateAction<Cell>>];

export default function SheetSection() {
	const width = 50;
	const height = 100;

	const rowsHeight: Array<[string, Dispatch<SetStateAction<string>>]> =
		new Array(height).fill(undefined).map(() => useState('50px'));

	const columnsWidth: Array<[string, Dispatch<SetStateAction<string>>]> =
		new Array(width).fill(undefined).map(() => useState('120px'));

	const sheet: Array<Array<CellState>> = [];
	let indexCurrentToFill = 0;

	for (let i = 0; i < height; i++) {
		sheet.push([] as Array<CellState>);
		for (let j = 0; j < width; j++) {
			sheet[i].push(
				useState<Cell>({
					content: `${indexCurrentToFill++}`,
					width: 'auto',
					height: 'auto',
					focus: false,
				})
			);
		}
	}

	const numberToArrayOfLetters = (number: number): Array<string> => {
		const letters = Object.freeze([
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		]);
		const lastLetter = letters[letters.length - 1];
		const result: Array<string> = [];

		for (let i = 0; i < number; i++) {
			if (result.length < letters.length) {
				result.push(letters[i]);
				continue;
			}

			const last = result[result.length - 1];

			let phrase = '';
			let skip = false;

			for (let j = last.length - 1; j >= 0; j--) {
				if (skip) {
					phrase = last[j] + phrase;
					continue;
				}
				if (last[j] == lastLetter) {
					phrase = letters[0] + phrase;
					continue;
				}
				const validLetter = letters.findIndex((letter) => letter === last[j]);
				phrase = letters[validLetter + 1] + phrase;
				skip = true;
			}

			if (!skip) {
				phrase = letters[0] + phrase;
			}
			result.push(phrase);
		}
		return result;
	};

	const [currentFocus, setCurrentFocus] = useState({
		row: Infinity,
		column: Infinity,
	} as {
		row: number;
		column: number;
	});

	const lines = numberToArrayOfLetters(height);

	const isFocusCell = (row: number, column: number) => {
		return currentFocus.row === row && currentFocus.column === column;
	};

	const focusRef = useRef<HTMLDivElement>(null);

	const changeFocus = (row: number, column: number) => {
		if (currentFocus.row !== Infinity && currentFocus.column !== Infinity) {
			sheet[currentFocus.row][currentFocus.column][1]({
				...sheet[currentFocus.row][currentFocus.column][0],
				focus: false,
			});
		}

		setCurrentFocus({ row, column });

		sheet[row][column][1]({
			...sheet[row][column][0],
			focus: true,
		});
	};

	useEffect(() => {
		console.log('mudou');
	}, [currentFocus]);

	return (
		<section className={styles.sheet_section}>
			<div className={styles.row}>
				<div className={styles.header_cell}></div>
				{Array(width)
					.fill(undefined)
					.map((_, index) => (
						<div className={styles.row_header} key={index}>
							{lines[index]}
						</div>
					))}
			</div>
			{sheet.map((row, rowIndex) => (
				<div className={styles.row}>
					<div className={styles.column_header}>{rowIndex + 1}</div>
					{row.map((cell, collumnIndex) => (
						<div
							ref={isFocusCell(rowIndex, collumnIndex) ? focusRef : null}
							className={`
                ${cell[0].focus ? styles.sheet_cell_focus : ''} ${
									styles.sheet_cell
								}
                `}
							onClick={() => changeFocus(rowIndex, collumnIndex)}
						>
							{columnsWidth[collumnIndex][0]}
							{rowsHeight[rowIndex][0]}
							{JSON.stringify(cell[0].focus)}
							{cell[0].content}
						</div>
					))}
				</div>
			))}
		</section>
	);
}
