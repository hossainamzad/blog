import React from 'react';
const Blogs = (props) => {
  return (
      <div>
        {props.post.map((item, index) => {
          {console.log(item)}
          return(
            <div key={index}>
              <div>Bolg: {item.title}</div><br />
              <div>Content: {item.content}</div><br />
            </div>
            )
            {console.log(item)}
        })}
      </div>
    )
}
export default Blogs;
