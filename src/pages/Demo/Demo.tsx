import { MultiSelect } from '@components/MultiSelect';
import useMultiSelect from '@hooks/useMultiSelect';
import { useState } from 'react';
import classes from './demo.module.scss';

const Demo = () => {
	const [inputValue, setInputValue] = useState('');

	const { addItem } = useMultiSelect([
		{
			id: 'Favorite_1',
			title: 'Favorite',
			label: 'Favorite Item',
			selected: false,
			icon: 'Favorite',
		},
		{
			id: 'Person_2',
			title: 'Person',
			label: 'Person Item',
			selected: true,
			icon: 'Person',
		},
		{
			id: 'Star_3',
			title: 'Star',
			label: 'Star Item',
			selected: false,
			icon: 'Star',
		},
	]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		setInputValue(value);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputValue.trim() !== '') {
			addItem(inputValue);
			setInputValue('');
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<input
					type='text'
					placeholder='Press enter to add item'
					onChange={handleInputChange}
					value={inputValue}
					onKeyDown={handleKeyDown}
				/>

				<MultiSelect
					onChange={(selectedItems) => {
						console.log('Selected items:', selectedItems);
					}}
				/>
			</div>
		</div>
	);
};

export default Demo;
