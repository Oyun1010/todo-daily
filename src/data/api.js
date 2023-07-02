import jwtDecode from 'jwt-decode';
import jsCookie from 'js-cookie';
import axios from 'axios';

const URL = "http://localhost:5000/";

export const get = async (endpoint) => {
    const token = jsCookie.get("token");
    console.log("")
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }
    try {
        const response = await fetch(URL + endpoint, config);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }

}

export const post = async (endpoint, body) => {
    const token = jsCookie.get("token");

    try {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }
        const res = await axios.post(`${URL}${endpoint}`, { ...body }, config);
        console.log(res.data)
        return res.data;

    } catch (error) {
        console.log(error);

    }
}
export const login = async (jwtToken) => {
    try {
        let decoded = jwtDecode(jwtToken)
        console.log("---------------------------");
        console.log(decoded.email);
        const res = await post('login', { email: decoded.email });
        if (res != null) {
            jsCookie.set("token", res.token, { expires: 1, secure: true, sameSite: 'strict', path: '/' });
            return "logged";
        }
        else return "not logged";

    } catch (error) {
        return "not logged";

    }
}
export const register = async (jwtToken) => {
    try {
        let decoded = jwtDecode(jwtToken)
        const res = await post('register', {
            name: decoded.name,
            user_name: decoded.given_name,
            email: decoded.email,
            profile_pic: decoded.picture
        });
        if (res != null) {
            jsCookie.set("token", res.token, { expires: 1, secure: true, sameSite: 'strict', path: '/' });
            return "logged";
        }
        else return "not logged";
    }
    catch {

    }
}

export const logout = () => {
    jsCookie.remove("token");
}

export const getUserData = async () => {
    try {
        const res = await get('userdata');
        return res;
    } catch (error) {

    }
}
export const updateUserData = async (name, profile_pic, user_name) => {
    console.log(name, user_name, profile_pic);
    await post("update_user", {
        name: name,
        profile_pic: profile_pic,
        user_name: user_name,
    });
}

export const getTodolists = async () => {
    try {
        const res = await get('todolists');
        return res;
    }
    catch {
        return [];
    }
}
export const getDoingList = async () => {
    try {
        const res = await get('doinglist');
        return res;

    } catch (error) {
        return [];
    }
}

export const getDoneList = async () => {
    try {
        const res = await get('donelist');
        return res;

    } catch (error) {
        return [];
    }
}
export const createTodo = async (name, desc, startDate, endDate) => {
    try {
        const res = await post('create_todo', {
            name: name,
            desc: desc,
            start_date: startDate,
            end_date: endDate,
        });
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateTodo = async (todo) => {
    console.log(todo);
    await post('update_todo', todo);

}

export const deleteTodo = async (id) => {
    console.log(id);
    await post('delete_todo', {
        todo_id: id,
    })
}
