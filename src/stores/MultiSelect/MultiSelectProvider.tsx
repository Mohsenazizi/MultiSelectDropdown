import { MultiSelectItem } from '@models/MultiSelect';
import { useState } from 'react';
import MultiSelectContext from './MultiSelectContext';
import { v4 as uuidv4 } from 'uuid';

const MultiSelectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [multiSelectList, setMultiSelectList] = useState<MultiSelectItem[]>([]);

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const toggleSelection = (id: string) => {
		setMultiSelectList((prevList) => [
			...prevList.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)),
		]);
	};

	const addItem = (value: string) => {
		const item = { title: value, id: uuidv4(), selected: false, icon: 'Home' };
		setMultiSelectList((prevList) => [...prevList, item]);
	};

	return (
		<MultiSelectContext.Provider
			value={{
				multiSelectList,
				setMultiSelectList,
				toggleDropdown,
				toggleSelection,
				isOpen,
				addItem,
				setIsOpen,
			}}
		>
			{children}
		</MultiSelectContext.Provider>
	);
};

export default MultiSelectProvider;
