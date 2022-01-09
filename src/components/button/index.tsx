import "./button.scss";

interface Props {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { onClick, disabled, ...children } = props;
  return (
    <button onClick={onClick} disabled={disabled ?? false}>
      {children && children.children}
    </button>
  );
};

export default Button;
