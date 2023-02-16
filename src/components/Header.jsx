import React, { useState } from "react"
import { GrClose } from "react-icons/gr"
import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/MedicalBeauty.svg"
import styles from "../styles/Home.module.css"

const Header = () => {

	const [isOpen, setIsOpen] = useState(false)

	


	return (
		<>
			<header className="absolute z-30 w-full top-0 bottom-0 right-0 left-0  ">
				<div className=" flex items-center  bg-transparent justify-between md:px-8 pl-6 py-7 md:py-2  max-w-6xl mx-auto gap-8 md:gap-0 ">
					<div className="flex items-center justify-between gap-8 sm:justify-start  ">
						<ul className="flex items-center justify-start gap-4  ">
							{!isOpen && (
								<li onClick={() => setIsOpen(true)} className="lg:hidden">
									<button className="cursor-pointer text-3xl  text-white">
										<AiOutlineMenu />
									</button>
								</li>
							)}
							{isOpen && (
								<li
									onClick={() => setIsOpen(false)}
									className="lg:hidden close "
								>
									<button className="cursor-pointer text-3xl text-white  ">
										<GrClose />
									</button>
								</li>
							)}
							<Link href="/">
								<Image
									src={logo}
									className="w-40 imageGlobal  "
									alt="Image Logo"
									priority="true"
								></Image>
							</Link>
						</ul>

						<nav className={isOpen && "open"}>
							<ul className={styles.liste}>
								<li>Nous</li>
								<li>Personnel</li>
								<li>En savoir+</li>
								<li>Témoignages</li>
							</ul>
						</nav>
					</div>
					<div>
						<ul className="flex items-center justify-start gap-2">
							<li className="hidden md:block">
								<button className=" text-white font-bold  rounded px-4 py-[5px] hover:bg-violet-300 hover:py-3">
									Se connecter
								</button>
							</li>

							<li className="hidden md:block">
								<button className={`${styles.buttonConnect} ${styles.btn3}`}>
									<span className={styles.spanBtn}>Ouvrir un compte</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
