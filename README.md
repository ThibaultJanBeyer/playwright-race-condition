## Describe the bug
- Running tests locally using multiple workers, they pass (almost always)
- Running tests remote using a single worker, they are flaky

## Explanation
- The problem happens when in between the mouse movement and the listening of events computing is happening
- In the test.html I faked such a behavior with a setTimeout
- In real live this could be a lot of things, a timeout, an async action, computational heavy method like multiple .getBoundingClientRect or a lot of other things that take time (see in the test.html the 3 examples that can cause flakyness)
- In this scenario not all mouse events are properly registered in the end

## Solution ideas
- Would waiting for any hanging processes to finish between mouse interactions solve the issue? (is this possible?)
- Would adding a delay between each mouse.move step solve the issue?

## Context
- Playwright Version: 1.27.1
- Operating System: MacOs 13.0 (22A380)
- Node.js version: 14.18.2
- Browser: All
