export type {StoreGeoInfo} from '~/GeoLocation/modules/types';

type GeoLocationIcon = 'globe' | 'helpNotice';

type GeoLocationStatus = 'success' | 'warning';

interface GeoLocationProps {
	icon: GeoLocationIcon;
	indicatorText: string;
	status: GeoLocationStatus;
}

export type {GeoLocationIcon, GeoLocationProps, GeoLocationStatus};
