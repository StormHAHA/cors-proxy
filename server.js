const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

app.use('/api', createProxyMiddleware({
  target: 'http://217.71.129.139:5542',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' },
  onProxyRes: (proxyRes) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server running');
});
