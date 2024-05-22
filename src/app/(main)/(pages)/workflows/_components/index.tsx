import React from "react";
import Workflow from "./Workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="w2134567g45678"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
