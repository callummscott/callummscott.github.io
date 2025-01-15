## Changes
- Added priority `main` `height` setting to `100svh` below `100vh` for mobile devices
- Added scaling settings to try to prevent button presses messing with the zoom
    - Added `user-scalable=0` to meta viewport tag
    - Added `maximum-scale=1.0` too
- Added black `color` css setting to `button` element and `a` to fix blue colouring on iOS.