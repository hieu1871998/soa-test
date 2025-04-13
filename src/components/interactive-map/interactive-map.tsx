'use client';

import { CompassOutlinedIcon } from '@/icons/compass-outlined';
import { CrosshairOutlinedIcon } from '@/icons/crosshair-outlined';
import { FishingOutlinedIcon } from '@/icons/fishing-outlined';
import { MountainsOutlinedIcon } from '@/icons/mountains-outlined';
import { TentOutlinedIcon } from '@/icons/tent-outlined';
import { CartePoint } from '@/lib/types';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { CSSProperties, useRef, useState } from 'react';
import { Button } from 'react-aria-components';
import Map from '../../../public/map.png';

export const icons = [
	<MountainsOutlinedIcon />,
	<TentOutlinedIcon />,
	<CompassOutlinedIcon />,
	<FishingOutlinedIcon />,
	<CrosshairOutlinedIcon />,
];

interface Position {
	top: string;
	left: string;
}

const getMarkerPosition = (index: number) => {
	const positions: Position[] = [
		{ top: '40%', left: '30%' },
		{ top: '35%', left: '55%' },
		{ top: '60%', left: '30%' },
		{ top: '50%', left: '70%' },
		{ top: '40%', left: '60%' },
		{ top: '70%', left: '40%' },
		{ top: '60%', left: '60%' },
		{ top: '40%', left: '45%' },
		{ top: '55%', left: '65%' },
	];

	return positions[index % positions.length];
};

const getMarkerIcon = (index: number) => {
	return icons[index % icons.length];
};

export interface Marker extends CartePoint {
	icon: React.ReactNode;
	position: Position;
}

export interface InteractiveMapProps {
	data: CartePoint[];
	onChange?: (marker: Marker | undefined) => void;
}

export const InteractiveMap = ({ data, onChange }: InteractiveMapProps) => {
	const [activeMarker, setActiveMarker] = useState<Marker>();

	const containerRef = useRef<HTMLDivElement>(null);

	const markers: Marker[] = data.map((item, index) => ({
		...item,
		position: getMarkerPosition(index),
		icon: getMarkerIcon(index),
	}));

	const handleMarkerClick = (marker?: Marker) => {
		setActiveMarker(marker);
		onChange?.(marker);
	};

	const handleReset = () => {
		setActiveMarker(undefined);
		onChange?.(undefined);
	};

	const getTransformStyles = (): CSSProperties => {
		if (!activeMarker || !containerRef.current) {
			return { '--x': '0px', '--y': '0px' } as CSSProperties;
		}

		// Convert percentage positions to viewport-relative coordinates
		const containerWidth = containerRef.current.offsetWidth;
		const containerHeight = containerRef.current.offsetHeight;

		// Parse the percentage values
		const markerLeft = parseFloat(activeMarker.position.left) / 100;
		const markerTop = parseFloat(activeMarker.position.top) / 100;

		// Calculate the center point offset (accounting for scale factor of 2)
		const translateX = -(markerLeft * containerWidth - containerWidth / 2) * 2;
		const translateY = -(markerTop * containerHeight - containerHeight / 2) * 2;

		return {
			'--x': `${translateX}px`,
			'--y': `${translateY}px`,
		} as CSSProperties;
	};

	return (
		<div
			ref={containerRef}
			className='relative h-full w-full overflow-hidden rounded-[1.25rem]'
		>
			<div
				className='relative h-full w-full origin-center translate-x-[var(--x)] translate-y-[var(--y)] transform transition-all duration-500 data-[zoom=true]:scale-200'
				style={getTransformStyles()}
				onClick={handleReset}
				data-zoom={!!activeMarker}
			>
				<Image
					className='h-full w-full object-cover object-center'
					src={Map}
					alt='Map'
				/>
				{markers.map(marker => (
					<Button
						key={marker.address}
						className='absolute top-[var(--top)] left-[var(--left)] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer transition-transform duration-300'
						onClick={() => {
							const _marker = activeMarker?.address !== marker.address ? marker : undefined;

							handleMarkerClick(_marker);
						}}
						{...{
							style: {
								'--top': marker.position.top,
								'--left': marker.position.left,
							} as CSSProperties,
						}}
					>
						<div className='text-secondary-foreground rounded-full bg-white p-1'>{marker.icon}</div>
					</Button>
				))}
			</div>
			<AnimatePresence>{activeMarker ? <MarkerPopover marker={activeMarker} /> : null}</AnimatePresence>
		</div>
	);
};

const MarkerPopover = ({ marker }: { marker: Marker | null }) => {
	return (
		<motion.div
			onClick={e => e.stopPropagation()}
			className='absolute bottom-5 left-5 z-10 max-w-md rounded-lg bg-white p-4 shadow-lg'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout
		>
			<h3 className='mb-2 text-lg font-bold'>{marker?.name}</h3>
			{marker?.website && (
				<p className='mb-1'>
					<strong>Website: </strong>
					<a
						href={`http://${marker.website}`}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 underline'
					>
						{marker.website}
					</a>
				</p>
			)}
			{marker?.address && (
				<p className='mb-1'>
					<strong>Address: </strong>
					{marker.address}
				</p>
			)}
			{marker?.phone && (
				<p className='mb-1'>
					<strong>Phone: </strong>
					{Array.isArray(marker.phone) ? marker.phone.join(', ') : marker.phone}
				</p>
			)}
			{marker?.activities && (
				<p className='mb-1'>
					<strong>Activities: </strong>
					{marker.activities.join(', ')}
				</p>
			)}
			{marker?.marker_information && (
				<p className='mb-1'>
					<strong>More Info: </strong>
					{marker.marker_information.join(', ')}
				</p>
			)}
		</motion.div>
	);
};
