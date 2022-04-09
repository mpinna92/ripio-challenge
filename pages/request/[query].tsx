import React from 'react';
import Link from "next/link";
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getBlock, getTsxList } from 'services';

import { Paginator } from 'components/paginator';
import { PATHS } from 'config';

export interface TsxListProps {
    options: [];
    error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {

    // Pagination Logic
    const totalTsx = results?.result?.length;
    const [tsxPerPage, setTsxPerPage] = React.useState(5);
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(totalTsx / tsxPerPage);

    const indexOfLastTsx = currentPage * tsxPerPage;
    const indexOfFirstTsx = indexOfLastTsx - tsxPerPage;
    const currentTsxs = results?.result?.slice(indexOfFirstTsx, indexOfLastTsx);

    React.useEffect(() => {
        if (currentPage > totalPages || currentPage <= 0) setCurrentPage(1)
    }, [currentPage, totalPages]);

    return (
        <Layout>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis ratione illo eaque fugit a autem quasi vel quis enim error aliquid repudiandae iusto, dolor pariatur quo maxime officiis quidem.
            {results?.message === 'OK' &&
                <>
                    <Paginator
                        defaultRowsPerPage={tsxPerPage}
                        rowsName="Items"
                        totalItems={totalTsx}
                        onNextPage={(page) => setCurrentPage(page)}
                        onPreviousPage={(page) => setCurrentPage(page)}
                    />
                    < br/>
                    <Link href={PATHS.ROOT} ><a>Volver al home!</a></Link>
                    < br/>
                    < br/>
                </>

            }
            <>
                {(results?.status === '0' && results?.message === 'NOTOK') &&
                    <>{`Direcccion invalida :(`} <Link href={PATHS.ROOT} ><a>Volver al home!</a></Link></>
                }
                {(results?.status === '0' && results?.message !== 'NOTOK') &&
                    <>{`No se encontraron transaccciones`} <Link href={PATHS.ROOT} ><a>Volver al home!</a></Link></>
                }

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