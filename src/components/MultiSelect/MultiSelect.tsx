import { MultiSelectItem } from '@models/MultiSelect';
import { FC, JSX } from 'react';
import useMultiSelect from '@hooks/useMultiSelect';
import classes from './multiSelect.module.scss';
import { Check, Clear, ExpandMore } from '@mui/icons-material';
import clsx from 'clsx';
import { getIcon } from './IconMap';
import useClickAway from '@hooks/useClickAway';

/*TODO:
.Adjust the place of dropdown based on place in window 
.Add animations
.Add a search bar
.Handle arrow keys functionalities
.Prevent duplicate addition
.improve item renderer
.improve the styling 
*/

export interface MultiSelectProps {
	defaultList?: MultiSelectItem[];
	onChange?: (selectedItems: MultiSelectItem[]) => void;
	itemRenderer?: (item: MultiSelectItem) => JSX.Element;
}

const MultiSelect: FC<MultiSelectProps> = ({ defaultList, onChange, itemRenderer }) => {
	const { multiSelectList, isOpen, toggleDropdown, toggleSelection, setIsOpen } =
		useMultiSelect(defaultList);

	const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false));

	const handleChange = (e: React.MouseEvent<HTMLLIElement | HTMLSpanElement>, id: string) => {
		e.stopPropagation();
		toggleSelection(id);
		if (onChange) {
			const selectedItems = multiSelectList?.filter((item) => item.selected);
			onChange(selectedItems || []);
		}
	};

	return (
		<div ref={ref} className={classes.multiSelectContainer} onClick={toggleDropdown}>
			<div className={classes.titleContainers}>
				{multiSelectList?.map(
					(item) =>
						item.selected && (
							<div
								onClick={(e) => handleChange(e, item.id)}
								key={item.id + item.title}
								className={classes.selectedItem}
							>
								{item.title}
								<Clear fontSize='small' />
							</div>
						)
				)}
			</div>
			<ul className={clsx(isOpen && classes.open)}>
				{multiSelectList?.map((item) => {
					const Icon = getIcon(item.icon);
					return (
						<li
							key={item.id}
							onClick={(e) => handleChange(e, item.id)}
							className={clsx(item.selected && classes.selected)}
						>
							{itemRenderer ? (
								itemRenderer(item)
							) : (
								<>
									<div className={classes.label}>
										{`${item.label || item.title}`} <Icon />
									</div>
									{item.selected && <Check />}
								</>
							)}
						</li>
					);
				})}
			</ul>
			<div className={clsx(classes.expand, isOpen && classes.expanded)}>
				<ExpandMore />
			</div>
		</div>
	);
};

export default MultiSelect;
