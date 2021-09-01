import React from 'react';
import {
  Link,
} from "react-router-dom";
import { tablist, tabData } from '../constants/tabs';

const HomePage = () => (
  <div>
    <nav>
      <ul>
        {tablist.map(id => (
          <li key={id}>
            <Link to={`/tab/${id}`}>{tabData[id].name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default React.memo(HomePage);
