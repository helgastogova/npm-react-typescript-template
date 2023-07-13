declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
