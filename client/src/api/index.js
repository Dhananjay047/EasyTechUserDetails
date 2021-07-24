import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(url);

export const createUser = (newUser) => axios.post(url,newUser).then(function (response) {
    console.log(response);
  });

export const updateUser = (id,updatedUser) => axios.patch(url+"/"+id, updatedUser).then(function (response) {
  console.log(response);
});

export const deleteUser = (id) => axios.delete(url+"/"+id).then(function (response) {
  console.log(response);
});
