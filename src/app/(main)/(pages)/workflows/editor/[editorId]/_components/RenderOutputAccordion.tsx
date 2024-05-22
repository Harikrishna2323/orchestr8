import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useOrchestr8tore } from "@/store";
import React from "react";
import ContentBasedOnTitle from "./ContentBasedOnTitle";

type Props = {
  state: EditorState;
  nodeConnection: ConnectionProviderProps;
};

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
  const {
    googleFile,
    setGoogleFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
  } = useOrchestr8tore();
  return (
    <ContentBasedOnTitle
      nodeConnection={nodeConnection}
      newState={state}
      file={googleFile}
      setFile={setGoogleFile}
      selectedSlackChannels={selectedSlackChannels}
      setSelectedSlackChannels={setSelectedSlackChannels}
    />
  );
};

export default RenderOutputAccordion;
