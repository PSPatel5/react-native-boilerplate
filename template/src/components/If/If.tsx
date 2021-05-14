interface Props {
  condition: boolean;
  children: any;
}
export const If = ({condition, children}: Props) =>
  condition ? children : null;
