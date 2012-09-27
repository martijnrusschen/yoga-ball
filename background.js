// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            file: "replaceChick.js"
        });
    }
});

chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});

