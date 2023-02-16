import React from 'react'
import Link from "next/link"
import collage from "../images/bg-doctor.png"
import Image from 'next/image'
import TextSpan from './TextSpan'

const BlockPicture = () => {
    const sentence = "Beauty Center".split("")
  return (
		<div>
			<div className="flex place-items-center gap-3 px-6  max-w-7xl pt-6 mx-auto  bg-white bg-opacity-40  flex-col lg:flex-row pb-10 md:pb-20 md:py-8 md:px-8 ">
				<article className="px-4 pb-2 w-[360px] md:w-full mx-8 md:mx-0">
					<div
						data-aos="fade-right"
						data-aos-delay="100"
						className="flex md:max-w-7xl max-w-xs"
					>
						{sentence.map((letter, index) => {
							return (
								<TextSpan key={index}>
									{letter === " " ? "\u00A0" : letter}
								</TextSpan>
							)
						})}{" "}
					</div>

					<p
						data-aos="fade-right"
						data-aos-delay="200"
						className="pb-5 lg:pt-5 lg:text-2xl uppercase drop-shadow-lg text-sky-500 "
					>
						Sans chirurgie
					</p>
					<p
						data-aos="fade-right"
						data-aos-delay="300"
						className="italic pb-10 text-sm drop-shadow-lg text-sky-500 "
					>
						Le naturel révolution
					</p>

					<Link href="/">
						<button className="button button--aylen px-5 py-3 bg-blue-200  text-sky-500 hover:bg-sky-100 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center  font-semibold uppercase tracking-widest overflow-hidden">
							En savoir plus
						</button>
					</Link>
				</article>
				<Image
					alt="doctor"
					height={800}
					width={600}
					src={collage}
					className="object-fit lg:w-96 w-96 pt-8 lg:object-cover rounded-2xl opacity-90"
					quality={70}
				></Image>
			</div>
		</div>
	)
}

export default BlockPicture
