export type SVGType = {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
};

export type HeaderType = {
  nav: null | "program details" | "application form" | "workflow" | "preview";
  changeNav: React.Dispatch<
    React.SetStateAction<
      "program details" | "application form" | "workflow" | "preview" | null
    >
  >;
};

export interface NavType extends HeaderType {
  navName: "program details" | "application form" | "workflow" | "preview";
}

type personalInfoAttributes =
  | "firstName"
  | "lastName"
  | "emailId"
  | "phoneNumber"
  | "nationality"
  | "currentResidence"
  | "idNumber"
  | "dateOfBirth"
  | "gender";

type profileInfoAttributes = "education" | "experience" | "resume";

export type PersonalInfoType = {
  name: string;
  flags: boolean;
  attributeName: personalInfoAttributes;
};

export type ProfileInfoType = {
  name: string;
  flags: boolean;
  attributeName: profileInfoAttributes;
};

export interface PersonalInfoPropsType extends PersonalInfoType {
  information: {
    internalUse: boolean;
    show: boolean;
  };
}

export interface ProfileInfoPropsType extends ProfileInfoType {
  information: {
    mandatory: boolean;
    show: boolean;
  };
}

export type TogglePropsType = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export type CheckboxPropsType = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export type TextInputPropsType = {
  value: string;
  onChange: (value: string) => void;
};

export type NumberInputPropsType = {
  value: number;
  onChange: (value: number) => void;
};

export type DropdownPropTypes<T> = {
  value: T;
  onChange: (value: T) => void;
  options: T[];
};

export type OptionPropsType<T> = {
  value: T;
  selected: T;
  onSelect: (value: T) => void;
};

export type PersonalInformationType = {
  firstName: {
    internalUse: boolean;
    show: boolean;
  };
  lastName: {
    internalUse: boolean;
    show: boolean;
  };
  emailId: {
    internalUse: boolean;
    show: boolean;
  };
  phoneNumber: {
    internalUse: boolean;
    show: boolean;
  };
  nationality: {
    internalUse: boolean;
    show: boolean;
  };
  currentResidence: {
    internalUse: boolean;
    show: boolean;
  };
  idNumber: {
    internalUse: boolean;
    show: boolean;
  };
  dateOfBirth: {
    internalUse: boolean;
    show: boolean;
  };
  gender: {
    internalUse: boolean;
    show: boolean;
  };
  personalQuestions: QuestionType[];
};

export type QuestionTypes =
  | "Paragraph"
  | "Yes/No"
  | "Multiple choice"
  | "Dropdown";

export type QuestionType = {
  id: string;
  type: QuestionTypes;
  question?: string;
  choices?: string[];
  maxChoice?: number;
  disqualify?: boolean;
  other?: boolean;
};

export type QuestionAttributesTypes =
  | "personalInformation"
  | "customisedQuestions"
  | "profile";

export type QuestionFieldTypes =
  | "id"
  | "type"
  | "question"
  | "choices"
  | "maxChoice"
  | "disqualify"
  | "other";

export interface addQuestionType extends QuestionType {
  attributeName: QuestionAttributesTypes;
}

export type ApplicationFormDataType = {
  id: null | string;
  type: string;
  attributes: {
    coverImage: string;
    personalInformation: PersonalInformationType;
    profile: {
      education: {
        mandatory: boolean;
        show: boolean;
      };
      experience: {
        mandatory: boolean;
        show: boolean;
      };
      resume: {
        mandatory: boolean;
        show: boolean;
      };
      profileQuestions: QuestionType[];
    };
    customisedQuestions: QuestionType[];
  };
};

type ActionType =
  | "update_cover_image"
  | "update_personal_info"
  | "update_profile_info"
  | "add_question"
  | "edit_question"
  | "delete_question"
  | "save_data";

export type Action<T extends ActionType> = {
  type: T;
  payload?: T extends "update_cover_image"
    ? {
        value: string;
      }
    : T extends "update_personal_info"
    ? {
        personal_info_attribute: personalInfoAttributes;
        personal_info_flag_attribute: "internalUse" | "show";
        value: boolean;
      }
    : T extends "update_profile_info"
    ? {
        profile_info_attribute: profileInfoAttributes;
        profile_info_flag_attribute: "mandatory" | "show";
        value: boolean;
      }
    : T extends "add_question"
    ? {
        attributeName: QuestionAttributesTypes;
        value: QuestionType;
      }
    : T extends "edit_question"
    ? {
        id: string;
        attributeName: QuestionAttributesTypes;
        value: QuestionType;
      }
    : T extends "delete_question"
    ? {
        id: string;
        attributeName: QuestionAttributesTypes;
      }
    : T extends "save_data"
    ? {
        value: ApplicationFormDataType;
      }
    : unknown;
};

export type ApplicationContextType = {
  data: ApplicationFormDataType;
  dispatch?: React.Dispatch<
    | Action<"update_cover_image">
    | Action<"update_personal_info">
    | Action<"update_profile_info">
    | Action<"add_question">
    | Action<"edit_question">
    | Action<"delete_question">
    | Action<"save_data">
  >;
};
