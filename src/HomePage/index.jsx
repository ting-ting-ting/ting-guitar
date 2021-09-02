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
        <div className="tab-section">
          <h3 className="singer">{singer}</h3>
          <div className="links-wrapper">
            {tabsAfterGroup[singer].map(tab => (
              <div key={tab.id} className="link-wrapper">
                <Link to={`/tab/${tab.id}`}>{tab.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(HomePage);
