import { SvgMapping } from '@/components/SvgInline/SvgMapping';

export type IconName = keyof typeof SvgMapping;

interface Props {
  name: IconName;
  width?: string;
  height?: string;
}

export const SvgInline = ({ name, width, height }: Props) => {
  const Icon = SvgMapping[name];

  return <Icon name={name} width={width} height={height} />;
};
