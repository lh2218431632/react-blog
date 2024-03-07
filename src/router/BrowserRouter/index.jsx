import { useEffect, useState } from "react";
import RouterContext from "../../context/RouterContext";

function BrowserRouter({ children }) {
  const [url, setUrl] = useState("/home");
  useEffect(() => {
    window.addEventListener("pushState", (e) => {
      const { pathname } = e;
      setUrl(pathname);
    });
    window.addEventListener("popstate", (e) => {
      const { pathname } = window.location;
      setUrl(pathname);
    });
    window.addEventListener("replaceState", function (e) {
      console.info("replaceState", e.stateInfo);
    });
    return () => {
      window.removeEventListener("pushState", (e) => {
        console.log("removeEventListener", e);
      });
      window.removeEventListener("replaceState", function (e) {
        console.info("removeEventListener", e);
      });
      window.removeEventListener("popstate", function (event) {
        console.log("removeEventListener", event);
      });
    };
  }, []);
  //   const child = children.filter((item) => {
  //     return item.props.path === url;
  //   });
  //   console.log(child);
  return (
    <>
      <RouterContext.Provider value={url}>
        <>{children}</>
      </RouterContext.Provider>
    </>
  );
}

export default BrowserRouter;
