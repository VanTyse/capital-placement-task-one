import UploadIcon from "../../assets/images/upload-icon.png";
import { useRef, useState, useContext } from "react";
import { XIcon } from "../../assets/svgs";
import { ApplicationFormDataContext } from "../../context/ApplicationFormContext";

export default function () {
  const { dispatch } = useContext(ApplicationFormDataContext);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const handleSelectImage = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const deleteImage = () => {
    setFile(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];

    if (!f) return;

    if (!f.type.startsWith("image/")) {
      return setError("File must be an image");
    }

    console.log(f.size);
    if (f.size >= 1024 * 1024) {
      return setError("Image size must be less than 1mb");
    }

    if (dispatch) {
      setFile(f);
    }
  };

  return (
    <div>
      <div className="rounded-2xl max-w-[595px] shadow-uploads">
        <div className="bg-primary-sky-blue rounded-t-2xl p-7">
          <h1 className="text-2xl font-semibold">Upload cover image</h1>
        </div>
        {file && file.type.startsWith("image/") ? (
          <div className="rounded-b-2xl">
            <img src={URL.createObjectURL(file)} alt="" />
            <div
              className="flex gap-3 items-center w-full bg-white rounded-b-2xl cursor-pointer text-primary-red p-3 border-t"
              onClick={deleteImage}
            >
              <XIcon />
              <span>Delete & re-upload</span>
            </div>
          </div>
        ) : (
          <div className="pt-16 p-12">
            <div
              className="border border-dashed border-[black] py-16 cursor-pointer"
              onClick={handleSelectImage}
            >
              <div className="flex justify-center mb-2">
                <img src={UploadIcon} alt="upload-icon" />
              </div>
              <p className="text-sm font-semibold text-center mb-[6px]">
                Upload cover image
              </p>
              <p className="text-light-text-color font-medium text-center ">
                16:9 ratio is recommended. Max image size 1mb
              </p>
            </div>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <p className="text-primary-red mt-3">{error}</p>
    </div>
  );
}
