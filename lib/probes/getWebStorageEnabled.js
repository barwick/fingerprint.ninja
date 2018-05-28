/*
  `storageAvailable` method from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
*/

const storageAvailable = storageType => {
  let storage;
  try {
    storage = window[storageType];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
};

const getWebStorageEnabled = () => ({
  localStorage: storageAvailable('localStorage'),
  sessionStorage: storageAvailable('sessionStorage'),
});

export default getWebStorageEnabled;
