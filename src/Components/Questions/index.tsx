import {
  QuestionAttributesTypes,
  QuestionType,
  QuestionTypes,
} from "../../@types";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";
import Dropdown from "../Inputs/Dropdown";
import { useContext, useState } from "react";
import Paragraph from "./Paragraph";
import QuestionDropdown from "./Dropdown";
import MultipleChoice from "./MultipleChoice";
import YesOrNo from "./YesOrNo";

const Question = ({
  questionObject,
  attributeName,
}: {
  questionObject: QuestionType;
  attributeName: QuestionAttributesTypes;
}) => {
  const hasBeenSavedBefore = !questionObject.question ? false : true;
  const questionTypes: QuestionTypes[] = [
    "Paragraph",
    "Yes/No",
    "Dropdown",
    "Multiple choice",
  ];
  const [editingMode, setEditingMode] = useState(!hasBeenSavedBefore);

  const { dispatch } = useContext(ApplicationFormDataContext);

  return (
    <div className="mb-16 last:mb-0 ">
      {editingMode && !hasBeenSavedBefore && (
        <div className="mb-8">
          <h1 className="text-2xl mb-4 font-semibold">Type</h1>
          <Dropdown
            value={questionObject.type}
            onChange={(value) =>
              dispatch &&
              dispatch({
                type: "edit_question",
                payload: {
                  id: questionObject.id,
                  attributeName,
                  value: {
                    ...questionObject,
                    type: value,
                  },
                },
              })
            }
            options={questionTypes}
          />
        </div>
      )}

      {questionObject.type === "Paragraph" && (
        <Paragraph
          questionObject={questionObject}
          editingMode={editingMode}
          onEditChange={(value) => setEditingMode(value)}
          hasBeenSavedBefore={hasBeenSavedBefore}
          attributeName={attributeName}
        />
      )}

      {questionObject.type === "Dropdown" && (
        <QuestionDropdown
          questionObject={questionObject}
          editingMode={editingMode}
          onEditChange={(value) => setEditingMode(value)}
          hasBeenSavedBefore={hasBeenSavedBefore}
          attributeName={attributeName}
        />
      )}

      {questionObject.type === "Multiple choice" && (
        <MultipleChoice
          questionObject={questionObject}
          editingMode={editingMode}
          onEditChange={(value) => setEditingMode(value)}
          hasBeenSavedBefore={hasBeenSavedBefore}
          attributeName={attributeName}
        />
      )}

      {questionObject.type === "Yes/No" && (
        <YesOrNo
          questionObject={questionObject}
          editingMode={editingMode}
          onEditChange={(value) => setEditingMode(value)}
          hasBeenSavedBefore={hasBeenSavedBefore}
          attributeName={attributeName}
        />
      )}

      {/* I decided not to include video based questions
       because there are properties such as additional_info, duration and time_format 
       that are not included in the schema. I do not think the purpose of this test is to edit the schema.
       */}
    </div>
  );
};

export default Question;
