import { getBaseUrl } from "../config";

const baseUrl = getBaseUrl();

export default {
    loginUrl: `${baseUrl}/#/auth/login`,
    homeUrl: `${baseUrl}/applications`,
};

