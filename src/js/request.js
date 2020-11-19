const BASE_URL = 'http://jsonplaceholder.typicode.com';

export const User = {
  async getAll() {
    try {
      const res = await fetch(`${BASE_URL}/users`);
      return res.json();
    } catch (error) {
      return error;
    }
  },
  async getOne(id) {
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`);
      return res.json();
    } catch (error) {
      return error;
    }
  },
};

// http://jsonplaceholder.typicode.com/posts?userId=1

export const Post = {
  async getOne(userId) {
    try {
      const res = await fetch(`${BASE_URL}/posts?userId=${userId}`)
      return res.json()
    } catch (error) {
      return error
    }
  }
}


