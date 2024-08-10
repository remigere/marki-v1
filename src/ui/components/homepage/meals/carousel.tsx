"use client"

import {
	Props as MealCardProps,
	MealCard,
} from "@/ui/components/homepage/meals/meal-card"
import { Icon } from "@/design-system/icons"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Props = {
	meals: MealCardProps[]
}

export const Carousel = ({ meals }: Props) => {
	return (
		<div className="flex sm:space-x-8 items-center relative">
			<button className="button-prev max-sm:bottom-3 max-sm:absolute max-sm:z-10">
				<Icon name="circle-arrow-left" size={48} />
			</button>
			<Swiper
				className="max-sm:-order-1 max-sm:mb-6"
				spaceBetween={32}
				slidesPerView={1}
				modules={[Navigation, Pagination]}
				pagination={{
					dynamicBullets: true,
				}}
				loop
				navigation={{
					nextEl: ".button-next",
					prevEl: ".button-prev",
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 32,
					},
				}}
			>
				{meals.map((meal, i) => (
					<SwiperSlide key={i} className="max-sm:mb-16">
						<MealCard {...meal} />
					</SwiperSlide>
				))}
			</Swiper>
			<button className="button-next max-sm:bottom-3 max-sm:right-0 max-sm:absolute max-sm:z-10">
				<Icon name="circle-arrow-right" size={48} />
			</button>
		</div>
	)
}
