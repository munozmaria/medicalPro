import React, { useEffect } from "react"
import "../styles/globals.css"
import "../styles/Home.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function App({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({
			duration: 1800,
			offset: 0,
		})
	}, [])

	return <Component {...pageProps} />
}
