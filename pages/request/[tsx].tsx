import React from 'react';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { getCryptos } from 'services';

export interface TsxListProps {
    options: [];
    error: { message: string, status: string }
}

const Tsx = ({ results }: any) => {

    console.log(results)

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
            </>
        </Layout>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
    let props: any = {}
    
    try {
        const res = await getCryptos({
            params: {
                module: 'account',
                action: 'txlist',
                address: `${params.tsx}`,
                startblock: '0',
                page: '1',
                offset: '10',
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