import {
  FormControl,
  FormLabel,
  Input,
  Switch,
  FormErrorMessage,
} from "@chakra-ui/react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";

interface CustomInputProps {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: any;
  name: string;
  onChange: any;
  value: string;
}

const CustomInput = ({
  type,
  label,
  placeholder,
  error,
  name,
  value,
  onChange,
  ...rest
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputComponent = () => {
    switch (type) {
      case "password":
        return (
          <Input
            type={showPassword ? "text" : "password"}
            pr="4.5rem"
            position="relative"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            {...rest}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            {...rest}
          />
        );
      case "text":
        return (
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            {...rest}
          />
        );
      case "switch":
        return <Switch name={name} {...rest} />;
      default:
        return (
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            {...rest}
          />
        );
    }
  };

  return (
    <FormControl id="email" isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <div style={{ position: "relative" }}>
        {renderInputComponent()}
        {type === "password" && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "0.75rem",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <RiEyeOffLine size={18} />
            ) : (
              <RiEyeLine size={18} />
            )}
          </div>
        )}
      </div>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
