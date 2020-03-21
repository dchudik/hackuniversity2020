import axios from 'axios';
import {URL} from './config';

export const GetCriticalFetch = () => {
    let data = null;
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => data = response.data);
    return data;
}
export const SetCriticalFetch = (param, min, max) => {
    let data = null;
    let request = {param, min, max};
    console.log(request);
    axios.post(URL+"/critical",
        JSON.stringify(request)
    )
      .then(response => console.log(response.data))
      .catch(error => console.log(error));

}