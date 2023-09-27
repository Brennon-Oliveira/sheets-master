import React from 'react';
import './App.css';
import 'path-browserify';
import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs';
import { AiFillAlert, AiFillAmazonCircle } from 'react-icons/ai';
import ToolBar from './components/tools-bar';
import ToolBarSection from './section/tools-bar/ToolBarSection';

function App() {
	return (
		<div className="App">
			<ToolBarSection />
		</div>
	);
}

export default App;
