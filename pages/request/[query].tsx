import React from 'react';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getBlock, getTsxList } from 'services';

export interface TsxListProps {
    options: [];
    error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {

    return (
        <Layout>
            <>
                {(results?.status === '0' && results?.message === 'NOTOK') && <>{`Direcccion invalida :(`}</>}
                {(results?.status === '0' && results?.message !== 'NOTOK') && <>{`No se encontraron transaccciones`}</>}

                {results?.message === 'OK' &&
                    results?.result.map((i: any, k: number) => {
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

                {`${results?.result?.length}`}
            </>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    let props: any = {}
    const { params, res, query } = context;
    const address = params?.query;
    const offset = (query?.offset === undefined) || (query?.offset.toString().match(/^[0-9]+$/) != null) || (Number(query?.offset) > 30) ? '5' : query?.offset;
    const page = query?.page === undefined ?? '1';
    res.setHeader('Set-Cookie', ['name=stast'])

    try {
        const res = await getTsxList({
            params: {
                module: 'account',
                action: 'txlist',
                address: `${address}`,
                startblock: '0',
                page: '1',
                offset: '5',
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