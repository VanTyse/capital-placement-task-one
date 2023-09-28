import { useContext, useEffect, useState } from "react";
import { QuestionAttributesTypes, QuestionType } from "../../@types";
import { XIcon } from "../../assets/svgs";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";
import PenEditIcon from "../../assets/images/pen-edit-iccon.png";
import TextInput from "../Inputs/TextInput";
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

  const [questionText, setquestionText] = useState(
    questionObject.question || ""
  );
  const [disqualify, setDisqualify] = useState(
    questionObject.disqualify || false
  );

  const [_editingMode, setEditingMode] = useState(editingMode);

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
            disqualify,
          },
        },
      });
      setEditingMode(false);
    }
  };
  return (
    <div>
      {hasBeenSavedBefore && (
        <>
          <span className="mb-5 text-sm text-[#979797]">
            {questionObject.type}
          </span>
          <div
            className={`flex justify-between items-center pb-10 ${
              !editingMode && "border-b"
            } border-[#c4c4c4]`}
          >
            <p className="text-xl font-semibold">{questionObject.question}</p>
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
            <h1 className="text-xl mb-4 font-semibold">Question</h1>
            <TextInput
              value={questionText}
              onChange={(value) => setquestionText(value)}
            />
          </div>
          <div className="flex gap-4 mb-8 items-center">
            <Checkbox
              checked={disqualify}
              onChange={(value) => setDisqualify(value)}
            />
            <span>Disqualify candidate if the answer is no</span>
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
