import { createContext, useReducer } from "react";
import {
  Action,
  ApplicationContextType,
  ApplicationFormDataType,
} from "../@types";

const INITIAL_STATE: ApplicationFormDataType = {
  id: null,
  type: "applicationForm",
  attributes: {
    coverImage: "http://example.com",
    personalInformation: {
      firstName: {
        internalUse: false,
        show: true,
      },
      lastName: {
        internalUse: false,
        show: true,
      },
      emailId: {
        internalUse: false,
        show: true,
      },
      phoneNumber: {
        internalUse: false,
        show: true,
      },
      nationality: {
        internalUse: false,
        show: true,
      },
      currentResidence: {
        internalUse: false,
        show: true,
      },
      idNumber: {
        internalUse: false,
        show: true,
      },
      dateOfBirth: {
        internalUse: false,
        show: true,
      },
      gender: {
        internalUse: false,
        show: true,
      },
      personalQuestions: [],
    },
    profile: {
      education: {
        mandatory: true,
        show: true,
      },
      experience: {
        mandatory: true,
        show: true,
      },
      resume: {
        mandatory: true,
        show: true,
      },
      profileQuestions: [],
    },
    customisedQuestions: [],
  },
};

export const ApplicationFormDataContext = createContext<ApplicationContextType>(
  {
    data: INITIAL_STATE,
  }
);

export const cacheFormData = (state: ApplicationFormDataType) => {
  localStorage.setItem("application_form_data", JSON.stringify(state));
};

const reducer = (
  state: ApplicationFormDataType,
  action:
    | Action<"update_personal_info">
    | Action<"update_profile_info">
    | Action<"add_question">
    | Action<"edit_question">
    | Action<"delete_question">
    | Action<"save_data">
    | Action<"update_cover_image">
) => {
  if (action.type === "save_data" && action.payload) {
    return action.payload.value;
  }

  if (action.type === "update_cover_image" && action.payload) {
    const newState = {
      ...state,
      attributes: {
        ...state.attributes,
        coverImage: action.payload.value,
      },
    };
    cacheFormData(newState);
    return newState;
  }

  if (action.type === "update_personal_info" && action.payload) {
    const newState = {
      ...state,
      attributes: {
        ...state.attributes,
        personalInformation: {
          ...state.attributes.personalInformation,
          [action?.payload.personal_info_attribute]: {
            ...state.attributes.personalInformation[
              action.payload.personal_info_attribute
            ],
            [action?.payload.personal_info_flag_attribute]:
              action.payload.value,
          },
        },
      },
    };

    cacheFormData(newState);
    return newState;
  }

  if (action.type === "update_profile_info" && action.payload) {
    const newState = {
      ...state,
      attributes: {
        ...state.attributes,
        profile: {
          ...state.attributes.profile,
          [action?.payload.profile_info_attribute]: {
            ...state.attributes.profile[action.payload.profile_info_attribute],
            [action?.payload.profile_info_flag_attribute]: action.payload.value,
          },
        },
      },
    };

    cacheFormData(newState);
    return newState;
  }

  if (action.type === "add_question" && action.payload) {
    if (action.payload.attributeName === "personalInformation") {
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          personalInformation: {
            ...state.attributes.personalInformation,
            personalQuestions: [
              ...state.attributes.personalInformation.personalQuestions,
              action.payload.value,
            ],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "profile") {
      console.log("here");
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          profile: {
            ...state.attributes.profile,
            profileQuestions: [
              ...state.attributes.profile.profileQuestions,
              action.payload.value,
            ],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "customisedQuestions") {
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          customisedQuestions: [
            ...state.attributes.customisedQuestions,
            action.payload.value,
          ],
        },
      };
      cacheFormData(newState);
      return newState;
    }
  }

  if (action.type === "edit_question" && action.payload) {
    const payload = action.payload;
    if (action.payload.attributeName === "personalInformation") {
      const personalQuestions =
        state.attributes.personalInformation.personalQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = personalQuestions.map((question) => {
        if (questionId === question.id) {
          return payload.value;
        } else return question;
      });

      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          personalInformation: {
            ...state.attributes.personalInformation,
            personalQuestions: [...updatedQuestionArray],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "profile") {
      const personalQuestions = state.attributes.profile.profileQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = personalQuestions.map((question) => {
        if (questionId === question.id) {
          return payload.value;
        } else return question;
      });

      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          profile: {
            ...state.attributes.profile,
            profileQuestions: [...updatedQuestionArray],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "customisedQuestions") {
      const customisedQuestions = state.attributes.customisedQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = customisedQuestions.map((question) => {
        if (questionId === question.id) {
          return payload.value;
        } else return question;
      });

      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          customisedQuestions: [...updatedQuestionArray],
        },
      };
      cacheFormData(newState);
      return newState;
    }
  }

  if (action.type === "delete_question" && action.payload) {
    if (action.payload.attributeName === "personalInformation") {
      const personalQuestions =
        state.attributes.personalInformation.personalQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = personalQuestions.filter((question) => {
        if (questionId === question.id) {
          return null;
        } else return question;
      });
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          personalInformation: {
            ...state.attributes.personalInformation,
            personalQuestions: [...updatedQuestionArray],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "profile") {
      const profileQuestions = state.attributes.profile.profileQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = profileQuestions.filter((question) => {
        if (questionId === question.id) {
          return null;
        } else return question;
      });
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          profile: {
            ...state.attributes.profile,
            profileQuestions: [...updatedQuestionArray],
          },
        },
      };
      cacheFormData(newState);
      return newState;
    }

    if (action.payload.attributeName === "customisedQuestions") {
      const customisedQuestions = state.attributes.customisedQuestions;
      const questionId = action.payload.id;
      const updatedQuestionArray = customisedQuestions.filter((question) => {
        if (questionId === question.id) {
          return null;
        } else return question;
      });
      const newState = {
        ...state,
        attributes: {
          ...state.attributes,
          customisedQuestions: [...updatedQuestionArray],
        },
      };
      cacheFormData(newState);
      return newState;
    }
  }

  return state;
};

export const ApplicationFormDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const d = localStorage.getItem("application_form_data");

  const parsedData = d ? JSON.parse(d) : INITIAL_STATE;

  const formData: ApplicationFormDataType =
    parsedData as ApplicationFormDataType;
  const [data, dispatch] = useReducer(reducer, formData);

  return (
    <ApplicationFormDataContext.Provider value={{ data, dispatch }}>
      {children}
    </ApplicationFormDataContext.Provider>
  );
};
