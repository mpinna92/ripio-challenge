import React from 'react';
import { Container, Layout } from 'components/layout';
import { useRouter } from 'next/router'


import { Shimmer } from 'components/shimmer';

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
        }, 2500);
    }, [])

    return (
        <Layout>
            <LoadingContainer>
                <Gradient />
                <LoadingContent>
                    <LoadingAnimation>
                        <EthImg src='/images/eth.svg' />
                        <CoinImg src='/images/coin.svg' />
                    </LoadingAnimation>
                    <LoadingText>Aguantá, estamos buscando...</LoadingText>
                </LoadingContent>
                <Blob />
            </ LoadingContainer >
        </Layout>
    )
};

export default Loading;