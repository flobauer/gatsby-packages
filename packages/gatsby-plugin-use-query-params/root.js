import React, { useState } from "react";
import { Location, globalHistory } from "@reach/router";
import { navigate } from "gatsby";
import { QueryParamProvider } from "use-query-params";

export const GatsbyAdapter = ({ children }) => {
  const [adapter] = useState(() => ({
    get location() {
      return globalHistory.location;
    },
    push(location) {
      navigate(location.search || "?", { replace: false });
    },
    replace(location) {
      navigate(location.search || "?", { replace: true });
    },
  }));

  return children(adapter);
};

export default ({ children }) => (
  <Location>
    {({ location }) => (
      <QueryParamProvider location={location} reachHistory={globalHistory} adapter={GatsbyAdapter}>
        {children}
      </QueryParamProvider>
    )}
  </Location>
);
x;
