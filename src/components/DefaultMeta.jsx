import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultMeta = ({

}) => {
  return (
    <Helmet>
      <html lang="zh-TW" />
      <title>Ting Guitar 456</title>
      <meta name="description" content="ting-ting's guitar tab 123" />

      {/* Facebook Meta Tags */ }
      <meta property="og:url" content="https://ting-ting-ting.github.io/ting-guitar/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ting Guitar" />
      <meta property="og:description" content="ting-ting's guitar tab" />
      <meta property="og:image" content="" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ting-ting-ting.github.io" />
      <meta property="twitter:url" content="https://ting-ting-ting.github.io/ting-guitar/" />
      <meta name="twitter:title" content="Ting Guitar" />
      <meta name="twitter:description" content="ting-ting's guitar tab" />
      <meta name="twitter:image" content="" />
    </Helmet>
  );
};

export default React.memo(DefaultMeta);
