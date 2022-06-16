import * as React from 'react';

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

// type TypographyProps<C extends React.ElementType> = AsProp<C> & {
//   color?: Rainbow | 'black';
// } & React.ComponentPropsWithoutRef<C>;
// type TypographyProps<C extends React.ElementType> = {
//   as?: C;
//   color?: Rainbow | 'black';
// } & React.ComponentPropsWithoutRef<C>;

// type Props<C extends React.ElementType> = React.PropsWithChildren<
//   TypographyProps<C>
// > &
//   TypographyProps<C> &
//   Omit<React.ComponentPropsWithoutRef<C>, keyof TypographyProps<C>>;
// // Omit<React.ComponentPropsWithoutRef<C>, 'color'>; // not just color but all the props

type PropsWithAs<C extends React.ElementType, Props> = Props & AsProp<C>;

type PropsToOmit<C extends React.ElementType, Props> = keyof (AsProp<C> &
  Props);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<PropsWithAs<C, Props>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

type TypographyProps = {
  color?: Rainbow | 'black';
};

type Props<C extends React.ElementType, Props> = PolymorphicComponentProps<
  C,
  Props
>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type TypoComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TypographyProps>
) => React.ReactElement | null;

const Typography: TypoComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, children, style, color, ...restProps }: Props<C, TypographyProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';
    const internalStyles = color ? { style: { ...style, color } } : {};
    return (
      <Component {...restProps} {...internalStyles} ref={ref}>
        {children}
      </Component>
    );
  }
);

/*
as can take in any HTML component or a custom Component
React.ComponentPropsWithoutRef<C> will allow all props related to HTML element C.

const Component = as || 'span'; 
The above code will render a span if no as is passed.

But will do you get typesafety on the <Typography {no-span-attributes allowed} dad={false} anyAttrPasses={true} ></Typography>

To get that type safety 
C extends React.ElementType = 'span'.
Add a default C type.

*/

export default Typography;
