// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as ComponentHelpers from '../../component_helpers/component_helpers.js';
import * as Components from '../../ui/components/components.js';

ComponentHelpers.ComponentServerSetup.setup().then(() => renderComponent());

const renderComponent = (): void => {
  const link = new Components.Linkifier.Linkifier();

  link.data = {
    url: 'example.com',
    lineNumber: 11,
    columnNumber: 1,
  };

  const container = document.getElementById('container');

  container?.addEventListener('linkifier-activated', function(event) {
    const data = JSON.stringify((event as unknown as {data: unknown}).data, null, 2);
    alert(`Linkifier click: ${data}`);
  });
  container?.appendChild(link);
};
