## Describe the bug
- Running tests locally using multiple workers, they pass (almost always)
- Running tests remote using a single worker, they are flaky

## Explanation
- The problem happens when in between the mouse movement and the listening of events computing is happening
- In the test.html I faked such a behavior with a setTimeout
- In real live this could be a lot of things, a timeout, an async action, computational heavy method like multiple .getBoundingClientRect or a lot of other things that take time
- In this scenario not all mouse events are properly registered in the end

## Solution ideas
If there was a way to wait for any hanging processes to finish between two mouse interactions, this would solve the problem

## Context
- Playwright Version: 1.27.1
- Operating System: MacOs 13.0 (22A380)
- Node.js version: 14.18.2
- Browser: All
