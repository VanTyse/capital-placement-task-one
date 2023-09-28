import {
  ProfileInfoPropsType,
  ProfileInfoType,
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
      attributes: { profile },
    },
    dispatch,
  } = useContext(ApplicationFormDataContext);

  const profileQuestions = profile.profileQuestions;

  const profileInfo: ProfileInfoType[] = [
    {
      name: "first name",
      flags: true,
      attributeName: "education",
    },
    {
      name: "last name",
      flags: true,
      attributeName: "experience",
    },
    {
      name: "email",
      flags: true,
      attributeName: "resume",
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
        <h1 className="text-2xl font-semibold">Profile</h1>
      </div>
      <div className="p-7">
        <div className="mb-10">
          {profileInfo.map(({ name, attributeName, flags }) => {
            return (
              <Info
                key={name}
                name={name}
                attributeName={attributeName}
                flags={flags}
                information={profile[attributeName]}
              />
            );
          })}
        </div>

        <div className="mb-16">
          {profileQuestions.map((question) => {
            return (
              <Question
                key={question.id}
                questionObject={question}
                attributeName="profile"
              />
            );
          })}
        </div>

        <div
          className="flex gap-4 font-semibold cursor-pointer"
          onClick={() =>
            addQuestion({
              id: String(profileQuestions.length),
              attributeName: "profile",
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
}: ProfileInfoPropsType) => {
  const { dispatch } = useContext(ApplicationFormDataContext);

  return flags ? (
    <div className="flex justify-between pb-4 mb-4 border-b border-[#c4c4c4]">
      <h1 className="capitalize text-xl font-semibold">{name}</h1>
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <Checkbox
            checked={information.mandatory}
            onChange={(value) =>
              dispatch &&
              dispatch({
                type: "update_profile_info",
                payload: {
                  profile_info_attribute: attributeName,
                  profile_info_flag_attribute: "mandatory",
                  value: value,
                },
              })
            }
          />
          <span>Mandatory</span>
        </div>
        <div className="flex gap-3 items-center">
          <ToggleButton
            value={information.show}
            onChange={(value) =>
              dispatch &&
              dispatch({
                type: "update_profile_info",
                payload: {
                  profile_info_attribute: attributeName,
                  profile_info_flag_attribute: "show",
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
