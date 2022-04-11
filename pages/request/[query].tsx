import React from 'react';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getTsxList } from 'services';
import { PATHS } from 'config';
import { AnimatePresence, motion } from 'framer-motion'


import { Paginator } from 'components/paginator';
import { ButtonAlt } from 'components/buttonAlt';

import {
	NoTsxWrapper,
	NoTsxText,
	ResultsWrapper,
	ResultList,
	ResultCard,
	CardItem,
	PaginatorWrapper,
	TotalResults,
	Status
} from 'components/pages/results.styles';
import { CopyButton } from 'components/copyButton';

export interface TsxListProps {
	options: [];
	error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {

	// Pagination Logic
	const totalTsx = results?.result?.length;
	const [tsxPerPage, setTsxPerPage] = React.useState(10);
	const [currentPage, setCurrentPage] = React.useState(1);
	const totalPages = Math.ceil(totalTsx / tsxPerPage);

	const indexOfLastTsx = currentPage * tsxPerPage;
	const indexOfFirstTsx = indexOfLastTsx - tsxPerPage;
	const currentTsxs = results?.result?.slice(indexOfFirstTsx, indexOfLastTsx);

	React.useEffect(() => {
		if (currentPage > totalPages || currentPage <= 0) setCurrentPage(1)
	}, [currentPage, totalPages]);


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
				duration: 0.8,
				ease: easing
			}
		}
	}

	const fadeInLeft = {
		initial: {
			x: -10,
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: easing
			}
		}
	}

	const stagger = {
		initial: {
			y: -50,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			}
		}
	}


	return (
		<AnimatePresence>
			<Layout >

				{results?.message === 'OK' &&
					<ResultsWrapper >
						<PaginatorWrapper
							as={motion.div}
							initial='initial'
							animate='animate'
							exit={{ opacity: 0 }}
						>
							<TotalResults as={motion.div} variants={fadeInUp} >
								Encontramos <span> {`${totalTsx}`} </span> transacciones
							</TotalResults>

							<motion.div variants={fadeInUp}>
								<Paginator
									className='paginator top'
									defaultRowsPerPage={tsxPerPage}
									rowsName="Página"
									totalItems={totalTsx}
									onNextPage={(page) => setCurrentPage(page)}
									onPreviousPage={(page) => setCurrentPage(page)}
								/>
							</motion.div>
						</PaginatorWrapper>

						<ResultList
							as={motion.div}
							initial='initial'
							animate='animate'
						>
							{currentTsxs.map((i: any, key: number) => {
								return (
									<ResultCard
										as={motion.div}
										key={key}
										variants={stagger}
									>
										<CardItem as={motion.div} variants={fadeInLeft}>
											<b>TsxHash:</b><span>🔗 {i?.hash}</span>
											<CopyButton value={i?.hash} />
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Bloque Nº:</b><span>⛏️ {i?.blockNumber}</span>
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Bloque hash:</b><span>🔗 {i?.blockHash}</span>
											<CopyButton value={i?.blockHash} />
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Gas:</b><span>⛽ {i?.gas} </span>
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Gas usado:</b><span>⚡ {i?.gasUsed} </span>
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Desde:</b><span>↗️ {i?.from} </span>
											<CopyButton value={i?.from} />
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Hacia:</b><span>↘️ {i?.to}</span>
											<CopyButton value={i?.to} />
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Edad:</b><span>⌛ {new Date(i?.timeStamp * 1000).toLocaleString()}</span>
										</CardItem>
										<CardItem as={motion.div} variants={fadeInLeft} >
											<b>Status:</b>
											<span>{i?.txreceipt_status === '1' ? <Status className='success'>IN</Status> : <Status className='success'>OUT</Status>}</span>
										</CardItem>
									</ResultCard>
								)
							})}
						</ResultList>

						<Paginator
							className='paginator bottom'
							defaultRowsPerPage={tsxPerPage}
							rowsName="Página"
							totalItems={totalTsx}
							onNextPage={(page) => setCurrentPage(page)}
							onPreviousPage={(page) => setCurrentPage(page)}
						/>

					</ResultsWrapper>
				}


				{(results?.status === '0' && results?.message === 'NOTOK') || (results === undefined) &&
					<NoTsxWrapper>
						<NoTsxText>Direccción inválida...</NoTsxText>
						<ButtonAlt text='Volver al home!' link={PATHS.ROOT} />
					</NoTsxWrapper>
				}

				{(results?.status === '0' && results?.message !== 'NOTOK') &&
					<NoTsxWrapper>
						<NoTsxText>No se encontraron transaccciones...</NoTsxText>
						<ButtonAlt text='Volver al home!' link={PATHS.ROOT} />
					</NoTsxWrapper>
				}
			</Layout>
		</AnimatePresence>
	)
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let props: any = {}
	const { params, res, query } = context;
	const address = params?.query;
	//const offset = query?.offset;
	//const page = query?.page === undefined ?? '1';
	res.setHeader('Set-Cookie', ['name=stast'])

	try {
		const res = await getTsxList({
			params: {
				module: 'account',
				action: 'txlist',
				address: `${address}`,
				startblock: '0',
				page: '1',
				offset: '100',
				sort: 'desc',
			}
		})
		const errorCode = res.ok ? false : res.status
		const json = await res.json()
		return { props: { errorCode, results: json }, }


	} catch { props = { statusCode: 'Error' } }

	return { props }
}

export default Tsx;