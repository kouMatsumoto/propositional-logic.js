export interface Predicate<A> {
  (a: A): boolean;
}

export interface Refinement<A, B extends A> extends Predicate<A> {
  (a: A): a is B;
}

export function not<P extends Predicate<any>>(predicate: P): P extends Refinement<infer A, infer B> ? Refinement<A, Exclude<A, B>> : P;
export function not<P extends Predicate<any>>(predicate: P) {
  return (value: any) => !predicate(value);
}
