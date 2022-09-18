const isDev = process.env.NODE_ENV !== 'production';

export const APP_URL = isDev ? 'http://localhost:3000' : '';

const config = {
    API_BASE_URL: isDev ? 'http://localhost:8000/api' : '',
    ENVIRONMENT: process.env.NODE_ENV,
};

export default config;
