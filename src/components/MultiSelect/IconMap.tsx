import {
	Home,
	Search,
	Settings,
	Favorite,
	Person,
	ShoppingCart,
	Star,
	CheckCircle,
	Alarm,
	Email,
	Clear,
} from '@mui/icons-material';

// Icon mapping
export const iconMap = {
	Home,
	Search,
	Settings,
	Favorite,
	Person,
	ShoppingCart,
	Star,
	CheckCircle,
	Alarm,
	Email,
};

export const getIcon = (iconName: string) => {
	return iconMap[iconName as keyof typeof iconMap] || Clear;
};
