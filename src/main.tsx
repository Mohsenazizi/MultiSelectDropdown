import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import MultiSelectProvider from '@stores/MultiSelect/MultiSelectProvider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MultiSelectProvider>
			<App />
		</MultiSelectProvider>
	</StrictMode>
);
