export type Theme = 'dark' | 'light';
export type UserTheme = Theme | 'system';

type BaseType = string | number | boolean;
type BrandType = string | symbol;

const Brand: unique symbol = Symbol('Brand');
export type WithBrand<TBaseType extends BaseType, TBrand extends BrandType> = TBaseType & {
  readonly [Brand]: TBrand;
};

export type TimestampMilliseconds = WithBrand<number, 'TimestampMilliseconds'>;
