# React Checkboxes

A flexible and customizable checkbox component for React applications.

## Usage

### Basic Usage

The most basic usage with default settings:

```tsx
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
```

### Advanced Usage with Settings

You can customize the layout and behavior using settings:

```tsx
<Checkboxes
	settings={{
		columns: 5,
	}}
	options={[
		{
			label: 'Option 1',
			value: 'option1',
		},
		// ... more options
	]}
	defaultSelected={['option1', 'option2']}
	onChange={(selectedValues) => {
		console.log(selectedValues)
	}}
/>
```

### Large Datasets

The component can handle large datasets efficiently:

```tsx
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
	defaultSelected={['option1', 'option2', 'option5', 'option7']}
	onChange={(selectedValues) => {
		console.log(selectedValues)
	}}
/>
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| `options` | `Array<{ label: string, value: string }>` | Array of checkbox options |
| `settings` | `{ columns?: number }` | Optional settings for layout customization |
| `defaultSelected` | `string[]` | Array of pre-selected values |
| `onChange` | `(selectedValues: string[]) => void` | Callback function when selection changes |
