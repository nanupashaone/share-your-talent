interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span" | "article";
    children: React.ReactNode;
}

export const Typography = ({variant, component, children}: Props) => {
  return <div>{children}</div>;
};
