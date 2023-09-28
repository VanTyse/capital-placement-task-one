import { useContext, useEffect, useState } from "react";
import { QuestionAttributesTypes, QuestionType } from "../../@types";
import { ListIcon, PlusIcon, XIcon } from "../../assets/svgs";
import TextInput from "../Inputs/TextInput";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";
import PenEditIcon from "../../assets/images/pen-edit-iccon.png";
// import NumberInput from "../Inputs/NumberInput";
import Checkbox from "../General/Checkbox";

export default function ({
  questionObject,
  editingMode,
  onEditChange,
  hasBeenSavedBefore,
  attributeName,
}: {
  questionObject: QuestionType;
  hasBeenSavedBefore: boolean;
  editingMode: boolean;
  onEditChange: (value: boolean) => void;
  attributeName: QuestionAttributesTypes;
}) {
  const { dispatch } = useContext(ApplicationFormDataContext);
  const [_editingMode, setEditingMode] = useState(editingMode);
  const [questionText, setQuestionText] = useState(
    questionObject.question || ""
  );

  //   const [maxChoice, setMaxChoice] = useState(questionObject.maxChoice || 0);
  const [choices, setChoices] = useState(questionObject.choices || [""]);

  const [enableOther, setEnableOther] = useState(questionObject.other || false);

  useEffect(() => {
    onEditChange(_editingMode);
  }, [_editingMode]);

  const handleDelete = () => {
    dispatch &&
      dispatch({
        type: "delete_question",
        payload: {
          id: questionObject.id,
          attributeName,
        },
      });
  };

  const handleSave = () => {
    if (questionText && dispatch && _editingMode === true) {
      dispatch({
        type: "edit_question",
        payload: {
          id: questionObject.id,
          attributeName,
          value: {
            ...questionObject,
            question: questionText,
            choices,
            other: enableOther,
          },
        },
      });
      setEditingMode(false);
    }
  };

  const changeChoice = (choice: string, index: number) => {
    const newChoices = choices.map((c, idx) => {
      if (idx === index) return choice;
      else return c;
    });

    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices((c) => [...c, ""]);
  };

  return (
    <div>
      {hasBeenSavedBefore && (
        <>
          <span className="mb-4 text-sm text-[#979797]">
            {questionObject.type}
          </span>
          <div
            className={`flex justify-between items-center pb-10 ${
              !editingMode && "border-b"
            } border-[#c4c4c4]`}
          >
            <p className="text-2xl font-semibold">{questionObject.question}</p>
            <div
              className="cursor-pointer"
              onClick={() => setEditingMode((x) => !x)}
            >
              <img src={PenEditIcon} alt="" /> {/* Edit Icon */}
            </div>
          </div>
        </>
      )}
      {editingMode && (
        <>
          <div className="mb-12 mt-7">
            <div className="mb-6">
              <h1 className="text-xl mb-4 font-semibold">Question</h1>
              <TextInput
                value={questionText}
                onChange={(value) => setQuestionText(value)}
              />
            </div>
            <div className="mb-12">
              <h1 className="mb-4 pl-10 text-xl font-medium">Choice</h1>
              {choices.map((choice, index) => {
                return (
                  <div className="flex gap-4 items-center mb-5 last:mb-0">
                    <ListIcon />
                    <TextInput
                      value={choice}
                      onChange={(value) => changeChoice(value, index)}
                    />
                    <div onClick={addChoice} className="cursor-pointer">
                      <PlusIcon width={13} height={13} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mb-8 items-center">
              <Checkbox
                checked={enableOther}
                onChange={(value) => setEnableOther(value)}
              />
              <span>Enable “Other” option </span>
            </div>
            {/* <div>
              <h1 className="text-xl mb-4 font-semibold">Max Choice Allowed</h1>
              <NumberInput
                value={maxChoice}
                onChange={(value) => setMaxChoice(value)}
              />
            </div> */}
          </div>
          <div className="flex justify-between items-center">
            <div
              className="flex gap-3 items-center cursor-pointer"
              onClick={handleDelete}
            >
              <XIcon color="#A80000" />
              <span className="text-primary-red">Delete</span>
            </div>
            <button
              className="flex justify-center items-center bg-primary-green p-3 px-5 rounded-md text-[white]"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}
