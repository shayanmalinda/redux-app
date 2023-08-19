import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

store.dispatch(bugAdded("Bug2"));

store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(2));

unsubscribe();
