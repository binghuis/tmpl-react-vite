import React, { SVGProps } from 'react';

type IconProps = {
  name: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

const Icon = ({ name, size = 24, onClick, ...rest }: IconProps) => {
  return (
    <svg {...rest} width={size} height={size}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
