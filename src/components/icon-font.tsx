import { createFromIconfontCN } from '@ant-design/icons';

interface IconProps {
  type: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const IconFont = (props: IconProps) => {
  const { type, size = 14, color = 'currentColor', className, onClick } = props;
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4060387_2kfwi4e4ksm.js',
  });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <IconFont
      type={type}
      style={{ fontSize: size, color }}
      className={className}
      onClick={handleClick}
    />
  );
};

export default IconFont;
