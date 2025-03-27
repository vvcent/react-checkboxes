import Checkboxes from '@/components/Checkboxes/Checkboxes'

const App = () => {
	return (
		<div className="p-10 flex flex-col gap-5">
			<Checkboxes
				options={[
					{
						label: 'Option 1',
						value: 'option1',
					},
					{
						label: 'Option 2',
						value: 'option2',
					},
					{
						label: 'Option 3',
						value: 'option3',
					},
				]}
			/>

			<Checkboxes
				settings={{
					columns: 3,
				}}
				options={[
					{
						label: 'Option 1',
						value: 'option1',
					},
					{
						label: 'Option 2',
						value: 'option2',
					},
					{
						label: 'Option 3',
						value: 'option3',
					},
					{
						label: 'Option 4',
						value: 'option4',
					},
					{
						label: 'Option 5',
						value: 'option5',
					},
					{
						label: 'Option 6',
						value: 'option6',
					},
				]}
				defaultSelected={['option1', 'option2']}
				onChange={(selectedValues) => {
					console.log(selectedValues)
				}}
			/>

			<Checkboxes
				settings={{
					columns: 5,
				}}
				options={[
					...Array.from({ length: 500 }, (_, index) => ({
						label: `Option ${index + 1}`,
						value: `option${index + 1}`,
					})),
				]}
				defaultSelected={['option1', 'option2', 'option5', 'option7']}
				onChange={(selectedValues) => {
					console.log(selectedValues)
				}}
			/>
		</div>
	)
}

export default App
