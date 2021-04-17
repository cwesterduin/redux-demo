import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadState } from "../../actions";

function useLocalState() {
  const dispatch = useDispatch();

  const appState = useSelector((state) => state);

  useEffect(() => {
    const storeState = localStorage.getItem("state");
    if (storeState.length > 2) {
      dispatch(loadState(JSON.parse(storeState)));
    } else {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(appState));
  }, [appState]);
}

export default useLocalState;
