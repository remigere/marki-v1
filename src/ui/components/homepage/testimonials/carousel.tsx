"use client"

import {
	Testimonial,
	TestimonialCard,
} from "@/ui/components/homepage/testimonials/testimonial-card"
import { Icon } from "@/design-system/icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Props = {
	testimonials: Testimonial[]
}

export const Carousel = ({ testimonials }: Props) => {
	return (
		<div className="flex  items-center relative">
			<button className="button-prev max-sm:bottom-3 max-sm:absolute max-sm:z-10 sm:hidden">
				<Icon name="circle-arrow-left" size={48} />
			</button>
			<Swiper
				className="max-sm:-order-1 max-sm:mb-6 cursor-grab active:cursor-grabbing"
				spaceBetween={32}
				slidesPerView={1}
				autoplay
				modules={[Navigation, Pagination, Autoplay]}
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
				}}
			>
				{testimonials.map((testimonial, i) => (
					<SwiperSlide
						key={i}
						className="max-sm:mb-16"
						style={{ height: "auto" }}
					>
						<TestimonialCard {...testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
			<button className="button-next max-sm:bottom-3 max-sm:right-0 max-sm:absolute max-sm:z-10 sm:hidden">
				<Icon name="circle-arrow-right" size={48} />
			</button>
		</div>
	)
}
