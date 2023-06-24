import { observer } from "mobx-react-lite";
import RouterIndex from "./config/RoutesIndex";
import Notification from "./config/component/Notification/Notification";

const App = observer(() => {
  return (
    <>
      <Notification />
      <RouterIndex />
    </>
  );
});

export default App;