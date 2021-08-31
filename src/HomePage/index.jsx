import React from 'react';
import {
  Link,
} from "react-router-dom";

const HomePage = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/tab/1">tab1</Link>
        </li>
        <li>
          <Link to="/tab/2">tab2</Link>
        </li>
        <li>
          <Link to="/tab/3">tab3</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default React.memo(HomePage);