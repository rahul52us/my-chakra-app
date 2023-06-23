import { FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";

interface CustomInputProps {
  type: string;
  label: string;
  placeholder? : string;
  required?: boolean
}

const CustomInput = ({ type, label, placeholder, ...rest }: CustomInputProps) => {
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
            {...rest}
          />
        );
      case "number":
        return <Input type="number" placeholder={placeholder} {...rest}/>;
      case "text":
        return <Input type="text" placeholder={placeholder} {...rest} />;
      case "switch":
        return <Switch {...rest} />;
      default:
        return <Input type="text" placeholder={placeholder}{...rest} />;
    }
  };

  return (
    <FormControl id="email">
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
            {showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
          </div>
        )}
      </div>
    </FormControl>
  );
};

export default CustomInput;
