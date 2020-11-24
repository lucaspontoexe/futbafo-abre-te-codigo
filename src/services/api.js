import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8010/proxy/api',
    withCredentials: true,
})

/**
 * 

using fetch:

const baseURL = "http://localhost:8010/proxy/api/";

const post = (url, data) =>
  fetch(`${baseURL}/${url}`, {
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify(data),
  }).then((r) => r.json());

const get = (url, data) =>
  fetch(`${baseURL}/${url}`, {
    method: "GET",
    credentials: "same-origin",
    body: data ? JSON.stringify(data) : null,
  }).then((r) => r.json());

 */
