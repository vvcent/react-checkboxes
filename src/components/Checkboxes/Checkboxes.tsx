import { useState, useEffect } from 'react'
import ICheckboxesProps from './ICheckboxesProps'
import Checkbox from './Checkbox/Checkbox'
import ColumnsSetting from './ColumnsSetting/ColumnsSetting'

const Checkboxes = (props: ICheckboxesProps) => {
	const [columns, setColumns] = useState(props.settings?.columns || 3)
	const [selectedValues, setSelectedValues] = useState<Set<string>>(
		new Set(props.defaultSelected)
	)

	const handleSelectAll = (checked: boolean) => {
		if (checked) {
			setSelectedValues(
				new Set(props.options.map((option) => option.value))
			)
		} else {
			setSelectedValues(new Set())
		}
	}

	const handleCheckboxChange = (value: string, checked: boolean) => {
		const newSelected = new Set(selectedValues)
		if (checked) {
			newSelected.add(value)
		} else {
			newSelected.delete(value)
		}
		setSelectedValues(newSelected)
	}

	useEffect(() => {
		if (!props.onChange) return
		props.onChange(Array.from(selectedValues))
	}, [selectedValues, props.onChange])

	return (
		<div className="border-gray-200 border rounded-md p-5">
			{props.options.length > 0 && (
				<div className="flex justify-between items-center mb-2">
					<Checkbox
						label="Select All"
						value="select-all"
						checked={selectedValues.size === props.options.length}
						isPartialChecked={
							selectedValues.size > 0 &&
							selectedValues.size < props.options.length
						}
						onChange={handleSelectAll}
					/>

					<ColumnsSetting value={columns} onChange={setColumns} />
				</div>
			)}

			<div
				className="grid"
				style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
			>
				{props.options.map((option) => (
					<Checkbox
						key={option.value}
						label={option.label}
						value={option.value}
						checked={selectedValues.has(option.value)}
						onChange={(checked) =>
							handleCheckboxChange(option.value, checked)
						}
					/>
				))}
			</div>
		</div>
	)
}

export default Checkboxes
