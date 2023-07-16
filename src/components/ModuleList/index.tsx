import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppSelector } from "../../store";

interface ModuleList {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function ModuleList({
  moduleIndex,
  title,
  amountOfLessons,
}: ModuleList) {
  let accordionItemId = "item-" + (moduleIndex + 1);

  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons;
  });

  console.log(accordionItemId);
  return (
    <Accordion.Item className="AccordionItem group " value={accordionItemId}>
      <Accordion.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {" "}
            {amountOfLessons} classes
          </span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Accordion.Trigger>
      <Accordion.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
              />
            );
          })}
        </nav>
      </Accordion.Content>
    </Accordion.Item>
  );
}
