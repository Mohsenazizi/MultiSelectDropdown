import { useContext, useEffect } from 'react';
import MultiSelectContext from '@stores/MultiSelect/MultiSelectContext';
import { MultiSelectContextModel, MultiSelectItem } from '@models/MultiSelect';

const useMultiSelect = (defaultList: MultiSelectItem[] = []): MultiSelectContextModel => {
	const context = useContext(MultiSelectContext);

	if (!context) {
		throw new Error('useMultiSelect must be used within an MultiSelectProvider');
	}

	useEffect(() => {
		console.log(defaultList);
		context.setMultiSelectList(defaultList);
	}, []);

	return context;
};

export default useMultiSelect;
