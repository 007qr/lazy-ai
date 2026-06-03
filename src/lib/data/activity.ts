export interface Activity {
	city: string;
	venture: string;
}

/** Live feed of founders spinning up businesses, shown in the hero ticker. */
export const activity: Activity[] = [
	{ city: 'Austin', venture: 'fitness coaching brand' },
	{ city: 'Brooklyn', venture: 'candle subscription' },
	{ city: 'Toronto', venture: 'real estate side hustle' },
	{ city: 'Denver', venture: 'pet grooming service' },
	{ city: 'Manchester', venture: 'freelance writing biz' },
	{ city: 'Phoenix', venture: 'online course business' },
	{ city: 'Seattle', venture: 'meal prep service' },
	{ city: 'Miami', venture: 'e-commerce store' }
];
