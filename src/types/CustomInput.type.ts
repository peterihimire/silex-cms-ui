export type CustomInputProps = {
  innerLabel?: string;
  wrapperClass?: string;
  labelText?: string;
  optionalText?: string;
  children?: string;
  id: string;
  required?: boolean;
  clicked?: () => void;
  reveal?: () => void;
  iconSrc?: string;
  passIcon?: JSX.Element;
  password?: boolean;
  type: string;
  name: string;
  placeholder: string;
};
