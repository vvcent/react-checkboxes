import IColumnsSettingProps from './IColumnsSettingProps'

const ColumnsSetting = (props: IColumnsSettingProps) => {
	const handleDecreaseColumns = () => {
		if (props.value <= 1) return
		props.onChange(props.value - 1)
	}

	const handleIncreaseColumns = () => {
		props.onChange(props.value + 1)
	}
	return (
		<div className="flex items-center gap-2">
			<label className="label">Columns</label>
			<div className="flex">
				<div
					className="bg-gray-200 p-2 rounded-l-md cursor-pointer select-none w-6 h-6 flex items-center justify-center"
					onClick={handleDecreaseColumns}
				>
					-
				</div>
				<input
					className="w-12 h-6 text-center border-gray-200 border"
					type="number"
					value={props.value}
					onFocus={(e) => {
						e.target.select()
					}}
					onChange={(e) => props.onChange(Number(e.target.value))}
				/>
				<div
					className="bg-gray-200 p-2 rounded-r-md cursor-pointer select-none w-6 h-6 flex items-center justify-center"
					onClick={handleIncreaseColumns}
				>
					+
				</div>
			</div>
		</div>
	)
}

export default ColumnsSetting
