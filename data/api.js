
const URL = "http://localhost:5000/";

export const get = async (endpoint) => {
    console.log("------------" + URL + endpoint + "----------------------");

    try {
        const res = await fetch(URL + endpoint);
        const json = await res.json();
        return json;
    }
    catch (error) {
        console.log(error);
    }
}

export const post = async (endpoint, body) => {
    console.log(`${URL}/${endpoint}`);
    console.log(body);
    try {
        const res = await fetch(`${URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then((res) => res.json());

        return res;

    } catch (error) {
        console.log(error);

    }
}
export const login = async (email) => {
    try {
        const res = await post('/login', { email: email });
        if (res != null) return "logged";
        else return "not logged";

    } catch (error) {
        return "not logged";

    }
}
export const register = async (email, name, profile_pic) => {
    try {
        
    }
}