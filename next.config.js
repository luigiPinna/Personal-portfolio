const isProd = process.env.NODE_ENV === 'production';
const repo = 'Personal-portfolio';
const basePath = isProd ? `/${repo}` : '';

module.exports = {
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};
