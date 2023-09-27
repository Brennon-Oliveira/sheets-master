import React from 'react';
import './App.css';
import 'path-browserify';
import ToolBarSection from './section/tools-bar/ToolBarSection';
import SheetSection from './section/sheet/SheetSection';

function App() {
	return (
		<div className="App">
			<ToolBarSection />
			<SheetSection />
		</div>
	);
}

export default App;
