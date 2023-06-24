import { Heading } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()
  const fontSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl":"2xl"
  });
  return (
    <Heading fontSize={fontSize}>
      <p>rahul</p>
      <p>rahul</p>
      <p>rahul</p>
      <p>rahul</p>
      <p>rahul</p>
      <p>rahul</p>
      <h1>{t('greeting')}</h1>
    </Heading>
  );
};

export default Contact;
