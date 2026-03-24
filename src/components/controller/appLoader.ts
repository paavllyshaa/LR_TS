import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;
        if (!apiUrl || !apiKey) {
            throw new Error('API_URL and API_KEY must be defined in environment variables');
        }
        super(apiUrl, { apiKey });
    }
}

export default AppLoader;