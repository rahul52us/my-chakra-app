import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import store from "../../../../../../store/store";
import CustomInput from "../../../../../component/CustomInput/CustomInput";

const HeaderLogo = observer(() => {
  const isLargerThanXl = useBreakpointValue({ lg: true });

  const {
    layout: { fullScreenModeFun, fullScreenMode },
  } = store;
  return (
    <Flex alignItems="center" display={"flex"} ml={2}>
      {isLargerThanXl &&
        (fullScreenMode ? (
          <BiRightArrowAlt
            fontSize="36px"
            cursor="pointer"
            style={{ marginRight: "1rem", marginTop: "10px" }}
            onClick={() => fullScreenModeFun(!fullScreenMode)}
          />
        ) : (
          <BiLeftArrowAlt
            fontSize="36px"
            cursor="pointer"
            style={{ marginRight: "1rem", marginTop: "10px" }}
            onClick={() => fullScreenModeFun(!fullScreenMode)}
          />
        ))}
      <CustomInput
        type="text"
        name="search"
        placeholder="Search here"
        w={isLargerThanXl ? '90%' : '95%'}
      />
    </Flex>
  );
});

export default HeaderLogo;
