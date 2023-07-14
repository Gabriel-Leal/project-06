import { MessageCircle } from "lucide-react";
import { ModuleList } from "../../components/ModuleList";
import { Header } from "../../components/Header";
import { VideoPlayer } from "../../components/VideoPlayer";
import * as Accordion from "@radix-ui/react-accordion";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex item justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Accordion.Root
              className="divide-y-2 divide-zinc-950"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <ModuleList moduleIndex={0} title="Redux" amountOfLessons={13} />
              <ModuleList moduleIndex={1} title="Redux" amountOfLessons={13} />
              <ModuleList moduleIndex={2} title="Redux" amountOfLessons={13} />
            </Accordion.Root>
          </aside>
        </main>
      </div>
    </div>
  );
}
