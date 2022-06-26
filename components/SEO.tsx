import { NextSeo } from 'next-seo';

export default function SEO() {
  return (
    <NextSeo
      title="TailwindCSS Text Gradient Generator"
      description="A simple text gradient generator for TailwindCSS"
      openGraph={{
        title: 'TailwindCSS Text Gradient Generator',
        description: 'A simple text gradient generator for TailwindCSS',
        url: '',
        type: 'website',
        images: [
          {
            url: 'https://tailwind-text-gradient-generator.vercel.app/social-image.jpg',
            width: 1200,
            height: 630,
            alt: 'TailwindCSS Text Gradient Generator',
          },
        ],
      }}
      twitter={{
        handle: '@kiyov09',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
      ]}
      additionalMetaTags={[
        {
          name: 'msapplication-TileColor',
          content: '#da532c',
        },
        {
          name: 'theme-color',
          content: '#171717',
        },
      ]}
    />
  );
}
