import { PlusIcon } from "../../assets/svgs";
import { useContext } from "react";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";
import Question from "../Questions";
import { addQuestionType } from "../../@types";

export default function () {
  const {
    data: {
      attributes: { customisedQuestions },
    },
    dispatch,
  } = useContext(ApplicationFormDataContext);

  const addQuestion = ({
    id,
    type,
    maxChoice = 0,
    disqualify = false,
    choices = [],
    other = false,
    question = "",
    attributeName,
  }: addQuestionType) => {
    dispatch &&
      dispatch({
        type: "add_question",
        payload: {
          attributeName,
          value: {
            id,
            type,
            question,
            choices,
            maxChoice,
            disqualify,
            other,
          },
        },
      });
  };
  return (
    <div className="rounded-2xl max-w-[595px] shadow-uploads">
      <div className="bg-primary-sky-blue rounded-t-2xl p-7">
        <h1 className="text-2xl font-semibold">Additional Questions</h1>
      </div>
      <div className="p-7">
        <div className="mb-16">
          {customisedQuestions.map((question) => {
            return (
              <Question
                key={question.id}
                questionObject={question}
                attributeName="customisedQuestions"
              />
            );
          })}
        </div>

        <div
          className="flex gap-4 font-semibold cursor-pointer"
          onClick={() =>
            addQuestion({
              id: String(customisedQuestions.length),
              attributeName: "customisedQuestions",
              type: "Paragraph",
            })
          }
        >
          <PlusIcon />
          <p>Add a question</p>
        </div>
      </div>
    </div>
  );
}
