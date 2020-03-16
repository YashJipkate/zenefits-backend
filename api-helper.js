const request = require('request');

module.exports = {
    makeApiCall : function(url, startingAfter) {
        const queryString = ((startingAfter==='null' || typeof startingAfter==='undefined') ? '' : '?startingAfter=' + startingAfter);
        return new Promise((resolve, reject) => {
            request({
                url: url + queryString,
                headers: {Authorization: 'Bearer ' + process.env.AUTH_TOKEN}},
                (err, res, body) => {
                    if (err) { reject(err); }
                    resolve(body);
                }
            );
        });
    }
};
