export interface MathInterface {
  sum(a: number, b: number): number;
  divide(a: number, b: number | 0): number | Infinity | NaN;
}

export const mathOLib: MathInterface;
