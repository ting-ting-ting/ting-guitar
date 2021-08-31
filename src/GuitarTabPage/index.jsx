import React from 'react';
import {
  Link,
} from "react-router-dom";

const GuitarTabPage = () => (
  <div>
    <p>GuitarTabPage</p>
    <Link to="/">back</Link>
  </div>
);

export default React.memo(GuitarTabPage);
