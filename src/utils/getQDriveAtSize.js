import shipItems from "../data/ship-items.js";

export default function getQDriveAtSize(size) {
  let _result = [];
  shipItems.forEach((item) => {
    if (item.type == "QuantumDrive" && item.size == size) _result.push(item);
  });
  return _result;
}
