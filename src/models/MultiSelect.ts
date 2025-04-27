export interface MultiSelectItem {
	title: string;
	label?: string;
	icon: string;
	selected: boolean;
	id: string;
}

export interface MultiSelectContextModel {
	multiSelectList?: MultiSelectItem[];
	setMultiSelectList: (items: MultiSelectItem[]) => void;
	isOpen: boolean;
	toggleDropdown: () => void;
	toggleSelection: (id: string) => void;
	addItem: (value: string) => void;
	setIsOpen: (state: boolean) => void;
}
