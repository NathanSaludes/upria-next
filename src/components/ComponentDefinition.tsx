import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PropsWithChildren } from "react";

const ComponentRoot: React.FC<PropsWithChildren> = ({ children }) => {
   return <div className="space-y-3">{children}</div>;
};

const ComponentTitle: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <h1 className="text-5xl font-bold tracking-tight text-slate-800">
         {children}
      </h1>
   );
};

const ComponentDescription: React.FC<PropsWithChildren> = ({ children }) => {
   return <div className="space-y-3 pb-2 text-slate-500">{children}</div>;
};

const ComponentPreview: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className="rounded-lg border">
         <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>{children}</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={1} minSize={1}></ResizablePanel>
         </ResizablePanelGroup>
      </div>
   );
};

// React Display Names
ComponentRoot.displayName = "ComponentDefinition.Root";
ComponentTitle.displayName = "ComponentDefinition.Title";
ComponentDescription.displayName = "ComponentDefinition.Description";
ComponentPreview.displayName = "ComponentDefinition.Preview";

const ComponentDefinition = {
   Root: ComponentRoot,
   Title: ComponentTitle,
   Description: ComponentDescription,
   Preview: ComponentPreview,
};

export default ComponentDefinition;
