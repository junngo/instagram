import Reactotron from "reactotron-react-js";
import { reactotronRedux} from "reactotron-redux";

Reactotron.configure({ name: "instagram" })
  .use(reactotronRedux())
  .connect();

export default Reactotron;
