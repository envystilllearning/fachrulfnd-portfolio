import config from 'data/config';

const seoConfig = {
  title: config.defaultTitle,
  description: config.defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: config.url,
    siteName: `${config.defaultTitle} Portfolio`,
  },
  twitter: {
    handle: config.twitter,
    cardType: 'summary_large_image' as const,
  },
};

export default seoConfig;
