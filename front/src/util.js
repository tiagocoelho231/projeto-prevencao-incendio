export function px2rem(size, context = 16) {
  return size / context + 'rem';
}

export function px2vw(size, context = 1920) {
  return (size / context) * 100 + 'vw';
}

export function sm2ha(valueInSquareMeter){
  return (valueInSquareMeter / 10000);
}
