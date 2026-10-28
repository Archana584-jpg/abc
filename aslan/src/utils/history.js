import { createBrowserHistory } from "history";

const history = createBrowserHistory({
   basename: "",
   getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

export default history;
