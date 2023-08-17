import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
// test commit
console.log(mount);

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
