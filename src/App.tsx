import './App.css'
import Checkboxes from './components/Checkboxes/Checkboxes'

function App() {
	const options = [
		{
			label: 'Option 1',
			value: 'option1',
		},
	]

	return (
		<>
			<Checkboxes options={options} />
		</>
	)
}

export default App
