import React from 'react';
import { Layout } from 'components/layout';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

import {
	Gradient,
	LoadingContainer,
	LoadingContent,
	LoadingText,
	LoadingAnimation,
	EthImg,
	CoinImg,
	Blob
} from 'components/pages/loading.styles';

const Loading = ({ }: any) => {
	const router = useRouter();
	const { data } = router.query;

	React.useEffect(() => {
		setTimeout(() => {
			router.replace(`/request/${data}`);
		}, 2000);
	}, [])

	/*Handle animatios */
	const easing = [0.6, -0.05, 0.01, 0.99]
	const fadeInUp = {
		initial: {
			y: -60,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: easing
			}
		}
	}

	return (
		<AnimatePresence>
			<Layout>
				<Head>
					<title>Cargando...</title>
				</Head>
				<LoadingContainer>
					<Gradient />

					<LoadingContent
						as={motion.div}
						initial='initial'
						animate='animate'
						exit={{ opacity: 0 }}
					>
						<LoadingAnimation as={motion.div} variants={fadeInUp}>
							<EthImg src='/images/eth.svg' />
							<CoinImg src='/images/coin.svg' />
						</LoadingAnimation>
						<LoadingText as={motion.div} variants={fadeInUp}>Espera un momento por favor, estamos buscando...</LoadingText>
					</LoadingContent>

					<Blob />
				</ LoadingContainer >
			</Layout>
		</AnimatePresence>
	)
};

export default Loading;