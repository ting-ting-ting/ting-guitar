import React from 'react';
import { Helmet } from 'react-helmet';

const DefaultMeta = ({
  title,
  description,
}) => {
  return (
    <Helmet>
      <html lang="zh-TW" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */ }
      <meta property="og:url" content="https://ting-ting-ting.github.io/ting-guitar/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ting-ting-ting.github.io" />
      <meta property="twitter:url" content="https://ting-ting-ting.github.io/ting-guitar/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="" />
    </Helmet>
  );
};

DefaultMeta.defaultProps = {
  title: 'Ting Guitar',
  description: '丁丁的吉他譜網站',
};

export default React.memo(DefaultMeta);
