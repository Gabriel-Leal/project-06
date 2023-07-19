import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";
import * as Accordion from "@radix-ui/react-accordion";
// import { useAppDispatch, useAppSelector } from "../../store";
// import { useDispatch } from "react-redux";
// import { play } from "../../store/slices/player";
import { useStore } from "../zustand-store";

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

  /***********************
   * Using Redux
  const dispatch = useAppDispatch();

  const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;
    return { currentModuleIndex, currentLessonIndex };
  });

  const lessons = useAppSelector((state) => {
    return state.player.course?.modules[moduleIndex].lessons;
  });
  */

  const { currentLessonIndex, currentModuleIndex, play, lessons } = useStore(
    (store) => {
      return {
        lessons: store.course?.modules[moduleIndex].lessons,
        currentLessonIndex: store.currentLessonIndex,
        currentModuleIndex: store.currentModuleIndex,
        play: store.play,
      };
    }
  );

  return (
    <Accordion.Item
      className="AccordionItem group "
      defaultChecked={moduleIndex === 0}
      value={accordionItemId}
    >
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
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                  // Using Redux
                  // onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Accordion.Content>
    </Accordion.Item>
  );
}
