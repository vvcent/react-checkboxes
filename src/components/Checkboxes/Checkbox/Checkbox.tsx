import ICheckboxProps from './ICheckboxProps'

const Checkbox = (props: ICheckboxProps) => {
	return (
		<div
			className={`flex items-center gap-2 cursor-pointer ${props.className}`}
			onClick={() => props.onChange(!props.checked)}
		>
			<div
				className={`w-4 h-4 border border-gray-300 rounded flex items-center justify-center ${
					props.isPartialChecked || props.checked
						? 'bg-gray-900 border-gray-900'
						: ''
				}`}
			>
				{props.isPartialChecked ? (
					// Show a line when partial checked
					<div className="w-2 h-[1px] bg-white" />
				) : (
					// Show a tick when checked
					props.checked && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-3 w-3"
							viewBox="0 0 20 20"
							fill="#fff"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					)
				)}
			</div>
			<span>{props.label}</span>
		</div>
	)
}

export default Checkbox
