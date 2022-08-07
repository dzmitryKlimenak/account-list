import { BehaviorSubject } from 'rxjs';
import { deepFreeze } from './deep-freeze';
import { naiveObjectComparison } from './naive-object-comparison';

export class Store<T> extends BehaviorSubject<T> {
  constructor(initialData: T) {
    super(deepFreeze(initialData));
  }

  // @ts-ignore
  next(newData: T): void {
    const frozenData = deepFreeze(newData);
    const store = this.getValue();
    if (!naiveObjectComparison(frozenData, store)) {
      super.next(frozenData);
    }
  }
}
