"use client";
import {
  Tldraw,
  DefaultColorThemePalette,
  Editor,
  createTLStore,
  loadSnapshot,
  throttle,
  getSnapshot,
} from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useLayoutEffect, useMemo, useState } from "react";

DefaultColorThemePalette.lightMode.background = "aqua";

export default function () {
  const [editor, setEditor] = useState<Editor | null>(null);
  const store = useMemo(() => createTLStore(), []);
  const [loadingState, setLoadingState] = useState<
    | { status: "loading" }
    | { status: "ready" }
    | { status: "error"; error: string }
  >({
    status: "loading",
  });
  useLayoutEffect(() => {
    setLoadingState({ status: "loading" });

    // Get persisted data from local storage
    const persistedSnapshot = localStorage.getItem("new");

    if (persistedSnapshot) {
      try {
        const snapshot = JSON.parse(persistedSnapshot);
        loadSnapshot(store, snapshot);
        setLoadingState({ status: "ready" });
      } catch (error: any) {
        setLoadingState({ status: "error", error: error.message }); // Something went wrong
      }
    } else {
      setLoadingState({ status: "ready" }); // Nothing persisted, continue with the empty store
    }

    // Each time the store changes, run the (debounced) persist function
    const cleanupFn = store.listen(
      throttle(() => {
        const snapshot = getSnapshot(store);
        localStorage.setItem("new", JSON.stringify(snapshot));
      }, 500)
    );

    return () => {
      cleanupFn();
    };
  }, [store]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Tldraw
        inferDarkMode
        options={{ maxPages: 1 }}
        onMount={(editor) => {
          editor.on("update", () => {});
        }}
        store={store}
      />
    </div>
  );
}
