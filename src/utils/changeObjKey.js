export default function changeObjKeys(data, oldKey, newKey) {
  const newObject = {};
  delete Object.assign(newObject, data, { [newKey]: data[oldKey] })[oldKey];
  return newObject;
}
