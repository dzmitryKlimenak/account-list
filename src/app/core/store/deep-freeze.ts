export function deepFreeze<T>(inObj: T): T {
  Object.freeze(inObj);

  Object.getOwnPropertyNames(inObj).forEach(function (prop: string) {
    if (
      // eslint-disable-next-line no-prototype-builtins
      (inObj as any).hasOwnProperty(prop) &&
      (inObj as any)[prop] != null &&
      typeof (inObj as any)[prop] === 'object' &&
      !Object.isFrozen((inObj as any)[prop])
    ) {
      deepFreeze((inObj as any)[prop]);
    }
  });
  return inObj;
}
