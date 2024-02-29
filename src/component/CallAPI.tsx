import { useState } from "react";
import styled from "styled-components";
import "./component.css";

// example of a styled component
const CMDiv = styled.div`
  margin-left: 50%;
  font-weight: bold;
`;

type ContainerMetadata = {
  pod: String;
  node: String;
  namespace: String;
  ip_addr: String;
  svc_account: String;
};

let containerMetadata: ContainerMetadata | undefined = undefined;

function createContainerMetadata() {
  // NOTE: this is just static data
  containerMetadata = {
    pod: "api-component-86d4cd67d7-q6fdt",
    node: "desktop",
    namespace: "default",
    ip_addr: "10.42.0.4",
    svc_account: "default",
  };
}

function CallAPI() {
  // initialize a variable loadData to false, set it to true if the button below is clicked
  // if loadData is true, display container metadata, otherwise show nothing
  const [loadData, setLoadData] = useState(false);
  return (
    <div>
      <button
        onClick={async () => {
          createContainerMetadata();
          setLoadData(true);
        }}
      >
        Call API Pod
      </button>
      {loadData ? (
        <CMDiv>
          <header>Container Metadata</header>
          <p>
            Pod id: {containerMetadata?.pod}
            <br />
            Node: {containerMetadata?.node}
            <br />
            Namespace: {containerMetadata?.namespace}
            <br />
            IP Address: {containerMetadata?.ip_addr}
            <br />
            Service Account: {containerMetadata?.svc_account}
            <br />
          </p>
        </CMDiv>
      ) : (
        ""
      )}
    </div>
  );
}

export default CallAPI;
