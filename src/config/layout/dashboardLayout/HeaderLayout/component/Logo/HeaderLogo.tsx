import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import store from "../../../../../../store/store";

const HeaderLogo = observer(() => {
  const {
    layout: { fullScreenModeFun, fullScreenMode },
  } = store;
  return (
    <Box>
      {fullScreenMode ? (
        <BiRightArrowAlt fontSize="32px" cursor="pointer" onClick={() => fullScreenModeFun(!fullScreenMode)}/>
      ) : (
        <BiLeftArrowAlt fontSize="32px" cursor="pointer" onClick={() => fullScreenModeFun(!fullScreenMode)}/>
      )}
    </Box>
  );
});

export default HeaderLogo;
