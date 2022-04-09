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
} from 'components/pages/loading/loading.styles';

const Loading = ({ }: any) => {
    const router = useRouter();
    const { data } = router.query;

    React.useEffect(() => {
        router.replace(`/request/${data}`);
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
                    <LoadingText>Aguantá, estoy buscando...</LoadingText>
                </LoadingContent>
                <Blob />
            </ LoadingContainer >
        </Layout>
    )
};

export default Loading;