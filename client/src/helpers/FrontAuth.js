import Local from './Local';

class FrontAuth {


    //login user
    static async loginUser(username, password) {
        let url = 'login';
        let body = { username, password };
        let options = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `Error ${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = { ok: false, error: err.message };
        }

        return response;
    }

//get data by userid
static async getUser(userId) {
    let url = `/users/${userId}`;
    let options = { method: 'GET', headers: {} };

    let token = Local.getToken();
    if (token) {
        options.headers['authorization'] = 'Bearer ' + token;
    }
    let response;
    try {
        response = await fetch(url, options);
        if (response.ok) {
            response.data = await response.json();
        } else {
            response.error = `Error ${response.status}: ${response.statusText}`;
        }
    } catch (err) {
        response = { ok: false, error: err.message };
    }

    return response;
}

//get authorised content
static async getContent(route) {
    let url = route;
    let options = { method: 'GET', headers: {} };
    let token = Local.getToken();
    if (token) {
        options.headers['authorization'] = 'Bearer ' + token;
    }
    let response;
    try {
        response = await fetch(url, options);
        if (response.ok) {
            response.data = await response.json();
        } else {
            response.error = `Error ${response.status}: ${response.statusText}`;
        }
    } catch (err) {
        response = { ok: false, error: err.message };
    }

    return response;
}
};

export default FrontAuth;