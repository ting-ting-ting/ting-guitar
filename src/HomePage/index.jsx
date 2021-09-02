import React from 'react';
import {
  Link,
} from "react-router-dom";
import { groupBy } from 'lodash';
import { tablist, tabData } from '../constants/tabs';
import './index.scss';

const HomePage = () => {
  const tabsAfterGroup = groupBy(tablist.map(id => tabData[id]), 'singer');

  console.log('tabs', tabsAfterGroup)

  return (
    <div className="home-page">
      {Object.keys(tabsAfterGroup).map(singer => (
        <div>
          <h3>{singer}</h3>
          <ul>
            {tabsAfterGroup[singer].map(tab => (
              <li key={tab.id}>
                <Link to={`/tab/${tab.id}`}>{tab.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default React.memo(HomePage);
