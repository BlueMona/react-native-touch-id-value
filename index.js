import { NativeModules } from 'react-native';

const TouchID  = {
    isFeatureAvailable() {
        if (!NativeModules.RNTouchIDValue) {
            console.warn('touchid-bridge.js: module not linked');
            return Promise.resolve(false);
        }
        return NativeModules.RNTouchIDValue.isFeatureAvailable();
    },

    save(key, value) {
        return NativeModules.RNTouchIDValue.saveValue(value, key);
    },

    get(key) {
        return NativeModules.RNTouchIDValue.getValue(key);
    }
};

module.exports = TouchID;
