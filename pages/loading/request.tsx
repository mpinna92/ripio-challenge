import React from 'react';
import Link from "next/link";
import { Container, Layout } from 'components/layout';
import { useRouter } from 'next/router'


import { Paginator } from 'components/paginator';
import { PATHS } from 'config';
import { Shimmer } from 'components/shimmer';


const Loading = ({ }: any) => {
    const router = useRouter();
    const { data } = router.query;

    React.useEffect(() => {
        router.replace(`/request/${data}`);
    }, [])

    return (
        <>
            <Container>
                <Shimmer variant='text h1' theme='dark'></Shimmer>
                <Shimmer variant='text caption' theme='dark'></Shimmer>
                <Shimmer variant='img' theme='dark'></Shimmer>
            </Container>


        </>
    )
};

export default Loading;