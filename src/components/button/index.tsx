import "./button.scss";

interface Props {
  onClick: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { onClick, disabled, backgroundColor, color, ...children } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled ?? false}
      style={{ background: backgroundColor, color: color }}
    >
      {children && children.children}
    </button>
  );
};

export default Button;
