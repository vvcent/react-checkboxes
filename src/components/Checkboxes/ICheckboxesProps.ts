interface ICheckboxesProps {
	options: { label: string; value: string }[]
	defaultSelected?: string[]
	onChange?: (selectedValues: string[]) => void
	settings?: {
		columns: number
	}
}

export default ICheckboxesProps
