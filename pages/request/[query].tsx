import React from 'react';
import Link from "next/link";
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getBlock, getTsxList } from 'services';

import { Paginator } from 'components/paginator';
import { PATHS } from 'config';
import { ButtonAlt } from 'components/buttonAlt';

import {
    NoTsxWrapper,
    NoTsxText
} from 'components/pages/results.styles';

export interface TsxListProps {
    options: [];
    error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {

    // Pagination Logic
    const totalTsx = results?.result?.length;
    const [tsxPerPage, setTsxPerPage] = React.useState(15);
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(totalTsx / tsxPerPage);

    const indexOfLastTsx = currentPage * tsxPerPage;
    const indexOfFirstTsx = indexOfLastTsx - tsxPerPage;
    const currentTsxs = results?.result?.slice(indexOfFirstTsx, indexOfLastTsx);

    React.useEffect(() => {
        if (currentPage > totalPages || currentPage <= 0) setCurrentPage(1)
    }, [currentPage, totalPages]);

    return (
        <Layout >
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

            <div style={{ color: 'white' }}>

                {results?.message === 'OK' &&
                    <>
                        <Paginator
                            defaultRowsPerPage={tsxPerPage}
                            rowsName="Items"
                            totalItems={totalTsx}
                            onNextPage={(page) => setCurrentPage(page)}
                            onPreviousPage={(page) => setCurrentPage(page)}
                        />
                        < br />
                        <Link href={PATHS.ROOT} ><a>Volver al home!</a></Link>
                        < br />
                        < br />
                    </>

                }
                <>

                    {results?.message === 'OK' &&
                        currentTsxs.map((i: any, k: number) => {
                            return (
                                <>
                                    <div key={k}>
                                        <p>Hash: {i?.hash}</p>
                                        <p>From: {i?.from}</p>
                                        <p>To: {i?.to}</p>
                                        <p>Age: {new Date(i?.timeStamp * 1000).toLocaleString()}</p>
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </>
                            )
                        })

                    }

                </>
            </div>


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
                offset: '8000',
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