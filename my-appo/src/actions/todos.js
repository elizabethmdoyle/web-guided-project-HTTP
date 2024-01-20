import axios from 'axios';

const baseURL = `http://localhost:3001`;
const todoURL = baseURL + `/todos`;

export const getTodos = () => {


    return axios.get(todoURL)
                .then(res => res.data)
                .catch(err => {console.log(err)})
}

export const postTodo = (description) => {
    const todo = {
        description: description,
        isDone: false
    }

    return axios.post(todoURL, todo);
    
}

export const putTodo = todo => {
    return axios.put(todoURL + '/' + todo.id, todo)
  }
  
  export const deleteTodo = id => {
    return axios.delete(todoURL + '/' + id)
  }
