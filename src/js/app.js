export default function orderByProps(obj, order = []) {
  const orderArr = [];
  const objArr = [];

  for (const item in obj) {
    if (order.includes(item)) {
      orderArr.push({ key: item, value: obj[item] });
    } else {
      objArr.push({ key: item, value: obj[item] });
    }
  }

  orderArr.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  objArr.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...orderArr, ...objArr];
}
