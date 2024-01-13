import { FormHelperText } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";

const FormErrorDisplay = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <FormHelperText display="flex" flexDirection="row-reverse" color="red">
      {children}
    </FormHelperText>
  );
};

export default FormErrorDisplay;
