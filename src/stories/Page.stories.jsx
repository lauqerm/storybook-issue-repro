import React, { useState } from 'react';
import { Page } from './Page';

export default {
  title: 'Example Error',
  component: Page,
};

const Template = (args) => {
  const [, setState] = useState(false);

  return <div>
    <button onClick={() => setState(true)}>Irrelevant State</button>
    <p>
      This demo is working fine and smoothly.<br />
      Now go to the source code of this page (src/stories/Page.stories.jsx) and uncomment the code inside Template component, the following thing might happens:
      <ul>
        <li>The page become unresponsive instantly, you cannot interact with it, or it take a very long time between each interaction</li>
        <li>The page could not be closed or refreshed manually, I usually need to kill it with Chrome's Task Manager</li>
        <li>Even if the inital render seems fine, clicking the button (with does nothing but change an unused state) will cause the problems above to occur</li>
      </ul>
    </p>
    <Page
      irrelevantProps={{
        irrelevantKey: <div>Irrelevant Content</div>,
      }}
    />
  </div>
};

export const LoggedOut = Template.bind({});