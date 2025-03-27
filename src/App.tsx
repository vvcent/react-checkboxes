import Checkboxes from '@/components/Checkboxes/Checkboxes'

const App = () => {
	return (
		<div className="p-5 md:p-10 flex flex-col gap-5">
			<h1 className="text-2xl font-bold">React Checkboxes</h1>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-bold">Default</h2>
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
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-bold">With Settings</h2>
				<Checkboxes
					settings={{
						columns: 5,
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
						{
							label: 'Option 7',
							value: 'option7',
						},
						{
							label: 'Option 8',
							value: 'option8',
						},
						{
							label: 'Option 9',
							value: 'option9',
						},
						{
							label: 'Option 10',
							value: 'option10',
						},
					]}
					defaultSelected={['option1', 'option2']}
					onChange={(selectedValues) => {
						console.log(selectedValues)
					}}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-bold">With 500 options</h2>
				<Checkboxes
					settings={{
						columns: 10,
					}}
					options={[
						...Array.from({ length: 500 }, (_, index) => ({
							label: `Option ${index + 1}`,
							value: `option${index + 1}`,
						})),
					]}
					defaultSelected={[
						'option1',
						'option2',
						'option5',
						'option7',
					]}
					onChange={(selectedValues) => {
						console.log(selectedValues)
					}}
				/>
			</div>
		</div>
	)
}

export default App
