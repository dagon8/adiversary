import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import painting from "../../assets/painting.jpg";
import brownie from "../../assets/brownie.jpg";
import fruit from "../../assets/fruit.jpeg";
import cuddle from "../../assets/cuddle.png"
import dinos from "../../assets/dinos.webp"

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
          <ResizablePanel defaultSize={50}>
            <img src={dinos} alt="" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
                <img src={cuddle} alt="" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
