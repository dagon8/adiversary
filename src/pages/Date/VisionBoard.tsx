import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import painting from "../../assets/painting.jpg";
import brownie from "../../assets/brownie.jpg";
import fruit from "../../assets/fruit.jpeg";
import picnic from "../../assets/picnic.webp";
import sandwich from "../../assets/sandwich.jpg";
import sushi from "../../assets/sushi.jpg";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-[70vw] max-h-[60vh] rounded-lg border"
    >
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60}>
            <img src={painting} alt="" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <img src={brownie} alt="" />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <img src={fruit} alt="" />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={40}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <img src={sushi} alt="" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <img src={picnic} alt="" />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={25}>
                <img src={sandwich} alt="" />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
