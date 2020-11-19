import React, { useState, useEffect } from 'react';

import { User } from '../js/request';

export const UserList = (props) => {

  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('name');

  const getUsers = async () => {
    const allUsers = await User.getAll();
    allUsers.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA.localeCompare(textB);
    });
    setUsers(allUsers);
  };

  const handleType = (event) => {
    setSearchType(event.target.value);
  };

  const handleFilter = (event) => {
    setSearchValue(event.target.value);
    filterUsers();
  };

  const filterUsers = () => {
    const result = [];
    users.forEach(user => {
      if (user[searchType].toLowerCase().includes(`${searchValue.toLowerCase()}`) || searchValue.length === 0) {
        result.push(user);
      };
    });

    return result.map((user) => {
      return (
        <div key={user.id} className="user-div">
          <div className='user-picture' />
          <div className="info"  >
            <p className='name' onClick={() => {
              props.history.push(`/users/${user.id}`)
            }}>{user.name}</p>
            <p className="username" onClick={() => {
              props.history.push(`/users/${user.id}`)
            }}>{user.username}</p>
            <a href={`mailto:${user.email}`} className="email">{user.email}</a>
          </div>
        </div>
      );
    });
  };

  const usersList = filterUsers();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    filterUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <div className="UserList">

      <div className="nav">
        <h2 className="header"> Users</h2>
        
        <label htmlFor="search" className="input-label">Search</label>
        <input type="text" id="search" className="input-field" onChange={handleFilter} />

        <label htmlFor="search" className="input-label">Sort By</label>
        <select htmlFor='sortBy' className="input-field" onChange={handleType} >
          <option value='name' defaultValue>Name</option>
          <option value='username' defaultValue>Username</option>
          <option value='email' defaultValue>Email</option>
        </select>
        
      </div>

      <div className='user-list'>
        {usersList}
      </div>

    </div>
  );
};
