import React from 'react';
import Link from "next/link";
import { Container, Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getBlock, getTsxList } from 'services';

import { PATHS } from 'config';
import { classes, useMergeState } from 'helpers';

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
    Status,
    Copy
} from 'components/pages/results.styles';
import { CopyIcon } from 'components/icons';

export interface TsxListProps {
    options: [];
    error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {
    console.log(results?.result)

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


    /*Handle copy button*/

    return (
        <Layout >

            {results?.message === 'OK' &&
                <ResultsWrapper>
                    <PaginatorWrapper>

                        <TotalResults>{`Encontramos ${totalTsx} transacciones:`}</TotalResults>

                        <Paginator
                            defaultRowsPerPage={tsxPerPage}
                            rowsName="Página"
                            totalItems={totalTsx}
                            onNextPage={(page) => setCurrentPage(page)}
                            onPreviousPage={(page) => setCurrentPage(page)}
                        />

                    </PaginatorWrapper>


                    <ResultList>
                        {currentTsxs.map((i: any, key: number) => {
                            return (
                                <ResultCard key={key}>
                                    <CardItem >
                                        <b>TsxHash:</b><span>{i?.hash}</span>
                                        <Copy
                                            data-tooltip={`Copiar`}>
                                            <CopyIcon />
                                        </Copy>
                                    </CardItem>
                                    <CardItem >
                                        <b>Bloque Nº:</b><span>{i?.blockNumber}</span>
                                    </CardItem>
                                    <CardItem >
                                        <b>Desde:</b><span>{i?.from}</span>
                                    </CardItem>
                                    <CardItem >
                                        <b>Hacia:</b><span>{i?.to}</span>
                                    </CardItem>
                                    <CardItem >
                                        <b>Edad:</b><span>{new Date(i?.timeStamp * 1000).toLocaleString()}</span>
                                    </CardItem>
                                    <CardItem >
                                        <b>Status:</b>
                                        <span>{i?.txreceipt_status === '1' ? <Status className='success'>IN</Status> : <Status className='success'>OUT</Status>}</span>
                                    </CardItem>
                                </ResultCard>
                            )
                        })}
                    </ResultList>

                </ResultsWrapper>
            }


            {(results?.status === '0' && results?.message === 'NOTOK') &&
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
                offset: '30',
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