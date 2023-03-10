import React from "react"
import Head from "next/head"
import movie from "/assets/movie_medical.mp4"
import styles from "../styles/Home.module.css"

import Temoignages from "../components/Temoignages"
import BlockPicture from "../components/BlockPicture"
import Header from "../components/Header"
import Contact from "../components/Contact"
import DataSocial from "../components/DataSocial"


const Home = () => {

	return (
		<>
			<Head>
				<title>MedicalPro</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					type="image/png"
					sizes="32x32"
					href="../images/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Header ></Header>
			<section className={styles.sectionVideo}>
				<div className={styles.videoDiv}></div>
				<video
					preload="auto"
					playsInline
					autoplay="autoplay"
					muted
					loop
					className={styles.videoBg}
				>
					<source src={movie} type="video/mp4" />
				</video>
				<div class={styles.middle}>
					<h1 className="text-4xl" data-aos="fade-down" data-aos-delay="100">
						Beauty art clinic
					</h1>

					<button
						data-aos="fade-up"
						data-aos-delay="50"
						className="shadow-[0_9px_0_#e9d4f4] hover:shadow-[0_4px_0px_rgb(147,112,219)]  ease-out hover:translate-y-1 transition-all rounded"
					>
						Paris
					</button>
				</div>
			</section>

			<section className="h-full overflow-hidden pt-0 xl:pt-20 min-h-screen bg-[url('../images/clinic.jpg')] bg-no-repeat bg-cover bg-center bg-opacity-50">
				<BlockPicture></BlockPicture>
			</section>

			<section className=" mb-0 md:mb-10 overflow-hidden mt-20 md:mt-40 relative  grid place-items-center max-w-6xl mx-auto h-full">
				<div
					data-aos="slide-up"
					data-aos-delay="100"
					className="naturel-w flex overflow-hidden  font-Shadows opacity-70 italic text-blue-200"
				>
					<span className="txt t1 whitespace-nowrap text-4xl ">
						New York - Paris - Tokyo - Espagne - &nbsp;
					</span>

					<span className="txt t2 whitespace-nowrap text-4xl ">
						New York - Paris - Tokyo - Espagne - &nbsp;
					</span>
					<span className="txt t2 whitespace-nowrap text-4xl ">
						New York - Paris - Tokyo - Espagne - &nbsp;
					</span>
					<span className="txt t2 whitespace-nowrap text-4xl ">
						New York - Paris - Tokyo - Espagne - &nbsp;
					</span>
				</div>
				<h1
					data-aos="slide-up"
					data-aos-delay="100"
					class="font-bold relative -top-10 pb-4  px-8 md:text-8xl text-[43px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-lg"
				>
					T??moignages
				</h1>
			</section>
			<Temoignages></Temoignages>

			<section>
				<Contact></Contact>
			</section>
			<section>
				<DataSocial></DataSocial>
			</section>
		</>
	)
}
export default Home
