import React from 'react';
import {
  Link,
} from "react-router-dom";
import { groupBy } from 'lodash';
import { tablist, tabData } from '../constants/tabs';
import DefaultMeta from '../components/DefaultMeta';
import './index.scss';

const HomePage = () => {
  const tabsAfterGroup = groupBy(tablist.map(id => tabData[id]), 'singerId');

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <>
      <DefaultMeta />
      <div className="home-page">
        <div className="section-wrapper">
          {Object.keys(tabsAfterGroup).map(singerId => (
            <div key={singerId} id={singerId} className="tab-section">
              <h3 className="singer">{tabsAfterGroup[singerId][0].singer}</h3>
              <div className="links-wrapper">
                {tabsAfterGroup[singerId].map(tab => (
                  <div key={tab.id} className="link-wrapper">
                    <Link to={`/tab/${tab.id}`}>{tab.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="nav-wrapper">
          <div className="nav-section">
            {Object.keys(tabsAfterGroup).map(singerId => (
              <a key={singerId} href={`#${singerId}`}>{tabsAfterGroup[singerId][0].singer}</a>
            ))}
          </div>
        </div>
        <button type="button" className="top-btn" onClick={scrollTop}>Top</button>
      </div>
    </>
  );
};

export default React.memo(HomePage);
