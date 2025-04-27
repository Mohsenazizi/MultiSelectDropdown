import { MultiSelectContextModel } from '@models/MultiSelect';
import { createContext } from 'react';

const MultiSelectContext = createContext<MultiSelectContextModel | undefined>(undefined);

export default MultiSelectContext;
