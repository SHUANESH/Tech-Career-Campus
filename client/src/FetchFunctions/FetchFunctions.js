import fetcher from "../utils/fetcher";

const api=process.env.REACT_APP_NEWS_API
const api_key=process.env.REACT_APP_NEWS_API_KEY

const token = localStorage.getItem("jwtToken");
export const defaultHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
}

export const fetchNewApi = () => {
    return fetch(`${api}${api_key}`)
        .then((res) => res.json())
        .then((response) => response)
        .catch(err => {
            console.error(err);
        });
}

export const fetchSyllabus = () => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    return fetch('http://localhost:8080/api/course', { headers: defaultHeaders})
        .then((res) => res.json())
        .then((response) => response.data)
        .catch(err => {
            console.error(err);
        });
}

export const fetchDailySchedule = async() => {
    return await fetch('http://localhost:8080/api/classSchedule')
   .then((res) =>  res.json())
   .then((response) => response.data)
   .catch(err => console.log(err));
};
