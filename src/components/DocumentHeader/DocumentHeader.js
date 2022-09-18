import Head from 'next/head';
import React from 'react';

const DocumentHeader = ({
    title = 'loading...',
    description = '',
}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
    </>
);

export default DocumentHeader;
