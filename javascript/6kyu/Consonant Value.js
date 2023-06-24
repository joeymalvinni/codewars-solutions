function solve(s) {
  return s.split(/[aeiou]/gm).filter(n=>n).reduce((prev, curr) => Math.max(prev, curr.split('').map((n => n.charCodeAt(0) - 96)).reduce((p,c)=>p+c), 0), 0);
};
