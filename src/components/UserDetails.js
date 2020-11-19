import React, { useState, useEffect } from 'react';
import { User, Post } from '../js/request';

export const UserDetails = (props) => {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  const getUserInfo = async () => {
    const userInfo = await User.getOne(props.match.params.id);
    setUser(userInfo);
    const postInfo = await Post.getOne(props.match.params.id);
    setPosts(postInfo);
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user) {
    return (
      <div className="UserDetails">
        <h3 className="header user-header"><span className="back-link" onClick={() => { props.history.push('/users') }}> Users</span>  &gt; {user.name}</h3>
        <div className="info-div">

          <div className='details-div'>
            <h4 className="secondary-header"> Contact Info </h4>
            <p> Username: {user.username}</p>
            <p>Email: <a href={`mailto:${user.email}`} className="email">  {user.email}</a></p>
            <p>Phone: <a href={`tel:+${user.phone}`}>  {user.phone}</a></p>
            <p>Website: <a href={user.website} target="_blank" rel="noreferrer"> {user.website}</a> </p>
          </div>

          <div className='details-div'>
            <h4 className="secondary-header"> Address </h4>
            <p>  {user.address.suite} {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          </div>

          <div className='details-div'>
            <h4 className="secondary-header"> Company </h4>
            <p> {user.company.name}</p>
            <p> {user.company.bs}</p>
            <p className="italic"> "{user.company.catchPhrase}"</p>
          </div>

        </div>

        <h3 className="header user-header"> Posts by {user.name}</h3>
        <div className="posts-div">
          {posts.map(post => (
            <div key={post.id} className="post">
              <p className="secondary-header">{post.title} </p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>

      </div>
    )
  } else {
    return <p> Loading Page</p>
  };
};