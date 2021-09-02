import React from 'react';
import {
  Link,
} from "react-router-dom";
import { groupBy } from 'lodash';
import { tablist, tabData } from '../constants/tabs';

const HomePage = () => {
  const tabsAfterGroup = groupBy(tablist.map(id => tabData[id]), 'singer');

  console.log('tabs', tabsAfterGroup)

  return (
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
};

export default React.memo(HomePage);
