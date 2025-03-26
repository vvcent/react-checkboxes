interface ICheckboxProps {
	label: string
	value: string
	checked: boolean
	isPartialChecked?: boolean
	onChange: (checked: boolean) => void
	className?: string
}

export default ICheckboxProps
