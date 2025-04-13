import { ActivitiesSection } from '@/components/sections/activities-section';
import { AdventureSection } from '@/components/sections/adventure-section';
import { CalendarSection } from '@/components/sections/calendar-section';
import { ExperiencesSection } from '@/components/sections/experiences-section';
import { ExploreSection } from '@/components/sections/explore-section';
import { HeroSection } from '@/components/sections/hero-section';
import { getPages } from '@/lib/services';
import { getLocale } from 'next-intl/server';

const Home = async () => {
	const locale = await getLocale();

	const pages = await getPages(locale);
	const page = pages[0];

	console.log('page: ', page);

	return (
		<main className='max-w-screen overflow-x-hidden'>
			<HeroSection bannerMenu={page.banner_menu} />
			<AdventureSection data={page.bloc_1} />
			<ActivitiesSection
				data={page.bloc_2}
				cartePoints={page.carte_point}
			/>
			<CalendarSection data={page.bloc_2_2} />
			<ExploreSection data={page.bloc_3} />
			<ExperiencesSection data={page.bloc_4} />
		</main>
	);
};

export default Home;
