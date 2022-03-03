export default function orderByProps(obj, order) {
  const result = [];
  const keys = Object.keys(obj).sort().filter((elem) => !order.includes(elem));
  [...order, ...keys].forEach((elem) => {
    result.push({
      key: elem,
      value: obj[elem],
    });
  });
  return result;
}
