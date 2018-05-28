// TODO: Anti-anti-FP measures? https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open

const canOpenIndexedDB = () => {
  const db =
    window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!db) return false; // returned undefined which is falsey
  const response = db.open('__test_db__', 1.1); // Version is long, so floats are cast: 1.1 => 1
  return !!response;
};

// Want to inspect separately to see if we use these properties to infer 'lying' browsers
const getIndexedDBEnabled = () => ({
  indexedDB: !!window.indexedDB,
  mozIndexedDB: !!window.mozIndexedDB,
  webkitIndexedDB: !!window.webkitIndexedDB,
  msIndexedDB: !!window.msIndexedDB,

  IDBTransaction: !!window.IDBTransaction, // moz - no IDBTransaction prefix
  webkitIDBTransaction: !!window.webkitIDBTransaction,
  msIDBTransaction: !!window.msIDBTransaction,

  IDBKeyRange: !!window.IDBKeyRange, // moz - no IDBKeyRange prefix
  webkitIDBKeyRange: !!window.webkitIDBKeyRange,
  msIDBKeyRange: !!window.msIDBKeyRange,

  canOpenIndexedDB: canOpenIndexedDB(),
});

export default getIndexedDBEnabled;
