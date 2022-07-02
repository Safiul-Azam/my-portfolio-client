import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
        className='hover:bg-primary p-2 rounded'
          style={{ backgroundColor: match ? "#eb4a4a" : "" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }


export default CustomLink;