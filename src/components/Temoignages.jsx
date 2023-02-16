import React from 'react'
import Image from 'next/image'
import sara from "../images/pic1.webp"
import wendy from "../images/pic2.jpg"
import julia from "../images/pic3.jpg"

const Temoignages = () => {

	
  return (
		<div className="overflow-hidden h-full pb-0 md:pb-40">
			<section className="mt-10 grid place-items-center mx-auto">
				<div class="flex flex-col items-center">
					<div
						data-aos="slide-up"
						data-aos-delay="90"
						class="max-w-md mx-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
					>
						<div class="md:flex ">
							<div class="md:flex-shrink-0">
								<Image
									alt="model sara"
									width={400}
									height={500}
									class="md:h-60 w-full object-cover md:w-48"
									src={sara}
								/>
							</div>
							<div class="p-8">
								<div class="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									Sarah
								</div>
								<a
									href="#"
									class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
								>
									Morbi nec enim nunc.
								</a>
								<p class="mt-2 text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Maxime mollitia, molestiae quas vel sint commodi repudiandae
									consequuntur.
								</p>
							</div>
						</div>
					</div>

					<div
						data-aos="slide-up"
						data-aos-delay="50"
						class="max-w-md mx-8  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-8 duration-500 ease-in-out"
					>
						<div class="md:flex ">
							<div class="md:flex-shrink-0">
								<Image
									alt="model wendy"
									width={400}
									height={500}
									class="md:h-60  w-full object-cover md:w-48"
									src={wendy}
								/>
							</div>
							<div class="p-8">
								<div class="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									Wendy
								</div>
								<a
									href="#"
									class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
								>
									Morbi nec enim nunc.
								</a>
								<p class="mt-2 text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Maxime mollitia, molestiae quas vel sint commodi repudiandae
									consequuntur.
								</p>
							</div>
						</div>
					</div>

					<div
						data-aos="slide-up"
						data-aos-delay="30"
						class="max-w-md  mx-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-8 duration-500 ease-in-out"
					>
						<div class="md:flex">
							<div class="md:flex-shrink-0">
								<Image
									width={400}
									height={500}
									class="md:h-60 w-full object-cover  md:w-48"
									src={julia}
									alt="model julia"
								/>
							</div>
							<div class="p-8">
								<div class="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									Julia
								</div>
								<a
									href="#"
									class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
								>
									Morbi nec enim nunc.
								</a>
								<p class="mt-2 text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Maxime mollitia, molestiae quas vel sint commodi repudiandae
									consequuntur.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Temoignages
