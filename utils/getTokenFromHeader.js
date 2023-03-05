const getTokenFromHeader = req => {
    // get token from header
    const headerObj = req.headers;
    const token = headerObj["authorization"].split(" ")[1];
    if (token !== undefined) {
        return token;
    } else {
        return {
            status: "failed",
            message: "There is not token attached to the header",
        };
    }
};

module.exports = getTokenFromHeader;