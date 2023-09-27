import React from 'react';
import './App.css';
import 'path-browserify';
import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs';
import { AiFillAlert, AiFillAmazonCircle } from 'react-icons/ai';
import ToolBar from './components/tools-bar';

function App() {
	return (
		<div className="App">
			<button onClick={() => process.exit()}>aaa</button>
			<ToolBar.Root>
				<p>teste</p>
				<ToolBar.Divisor />
				<ToolBar.Section>
					<ToolBar.Button>
						<BsArrowReturnLeft />
					</ToolBar.Button>
					<ToolBar.Button>
						<BsArrowReturnRight />
					</ToolBar.Button>
				</ToolBar.Section>
				<ToolBar.Divisor />
				<ToolBar.Section>
					<ToolBar.Button>
						<AiFillAlert />
					</ToolBar.Button>
					<ToolBar.Button>
						<AiFillAmazonCircle />
					</ToolBar.Button>
				</ToolBar.Section>
			</ToolBar.Root>
		</div>
	);
}

export default App;
