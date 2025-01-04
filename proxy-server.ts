import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const youtubeProxy = createProxyMiddleware({
  target: 'https://www.youtube.com',
  changeOrigin: true,
  pathRewrite: {
    '^/youtube/': '/' // remove /youtube/ path
  },
});

app.use('/youtube', youtubeProxy);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

