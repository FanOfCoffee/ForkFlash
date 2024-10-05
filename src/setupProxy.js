const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/words',
        createProxyMiddleware({
            target: 'http://itgirlschool.justmakeit.ru',
            changeOrigin: true,
            pathRewrite: {
                '^/api/words': '/api/words',
            },
        })
    );
};