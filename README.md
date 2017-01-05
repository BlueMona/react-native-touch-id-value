react-native-touch-id-value
======

Saving and retrieving Apple TouchID protected values. Useful for storing essential authentication information.

Usage (iOS)

Install npm package:
```
npm install react-native-touch-id-value --save
```
Add links to the library:
```
react-native link react-native-touch-id-value
```
Make sure RNTouchIDValue.xcodeproj appeared in "Libraries" in your application XCode project and that libRNTouchIDValue.a is present in "Project properties" - "Targets" - "<project name>" - "Build Phases" - "Link Binary With Libraries".

## Example
```javascript
import { observable, action } from 'mobx';
import TouchID from 'react-native-touch-id-value';

const touchid = observable({
    available: false,

    @action async load() {
        this.available = await TouchID.isFeatureAvailable();
    },

    @action save(key, value) {
        return TouchID.save(value, key);
    },

    @action get(key) {
        return TouchID.get(key);
    }
});

export default touchid;

TouchID.isFeatureAvailable()
    .then(result => {
        console.log(`touchid-bridge.js: ${result}`);
    });
```
