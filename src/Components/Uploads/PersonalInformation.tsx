import {
  PersonalInfoPropsType,
  PersonalInfoType,
  addQuestionType,
} from "../../@types";
import { PlusIcon } from "../../assets/svgs";
import Checkbox from "../General/Checkbox";
import ToggleButton from "../General/ToggleButton";
import { useContext } from "react";
import Question from "../Questions";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";

export default function () {
  const {
    data: {
      attributes: { personalInformation },
    },
    dispatch,
  } = useContext(ApplicationFormDataContext);

  const personalQuestions = personalInformation.personalQuestions;

  const personalInfo: PersonalInfoType[] = [
    {
      name: "first name",
      flags: false,
      attributeName: "firstName",
    },
    {
      name: "last name",
      flags: false,
      attributeName: "lastName",
    },
    {
      name: "email",
      flags: false,
      attributeName: "emailId",
    },
    {
      name: "phone",
      flags: true,
      attributeName: "phoneNumber",
    },
    {
      name: "nationality",
      flags: true,
      attributeName: "nationality",
    },
    {
      name: "current residence",
      flags: true,
      attributeName: "currentResidence",
    },
    {
      name: "ID number",
      flags: true,
      attributeName: "idNumber",
    },
    {
      name: "date of birth",
      flags: true,
      attributeName: "dateOfBirth",
    },
    {
      name: "gender",
      flags: true,
      attributeName: "gender",
    },
  ];

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
        <h1 className="text-2xl font-semibold">Personal Information</h1>
      </div>
      <div className="p-7">
        <div className="mb-10">
          {personalInfo.map(({ name, attributeName, flags }) => {
            return (
              <Info
                key={name}
                name={name}
                attributeName={attributeName}
                flags={flags}
                information={personalInformation[attributeName]}
              />
            );
          })}
        </div>

        <div className="mb-16">
          {personalQuestions.map((question) => {
            return (
              <Question
                key={question.id}
                questionObject={question}
                attributeName="personalInformation"
              />
            );
          })}
        </div>

        <div
          className="flex gap-4 font-semibold cursor-pointer"
          onClick={() =>
            addQuestion({
              id: String(personalQuestions.length),
              attributeName: "personalInformation",
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

const Info = ({
  name,
  flags,
  attributeName,
  information,
}: PersonalInfoPropsType) => {
  const { dispatch } = useContext(ApplicationFormDataContext);

  return flags ? (
    <div className="flex justify-between pb-4 mb-4 border-b border-[#c4c4c4]">
      <h1 className="capitalize text-xl font-semibold">{name}</h1>
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <Checkbox
            checked={information.internalUse}
            onChange={(value) =>
              dispatch &&
              dispatch({
                type: "update_personal_info",
                payload: {
                  personal_info_attribute: attributeName,
                  personal_info_flag_attribute: "internalUse",
                  value: value,
                },
              })
            }
          />
          <span>Internal</span>
        </div>
        <div className="flex gap-3 items-center">
          <ToggleButton
            value={information.show}
            onChange={(value) =>
              dispatch &&
              dispatch({
                type: "update_personal_info",
                payload: {
                  personal_info_attribute: attributeName,
                  personal_info_flag_attribute: "show",
                  value: value,
                },
              })
            }
          />
          {information.show ? <span>Show</span> : <span>Hide</span>}
        </div>
      </div>
    </div>
  ) : (
    <h1 className="capitalize border-b pb-4 mb-4 border-[#c4c4c4] text-xl font-semibold">
      {name}
    </h1>
  );
};
