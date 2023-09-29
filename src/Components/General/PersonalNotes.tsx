export default function ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="p-8 rounded-3xl bg-[white] min-w-full [&>p]:mb-4 text-sm">
      <p>
        Hello. My name is Kingsley Okafor. Welcome to my task. So I believe it's
        important to talk about some decisions I made while I worked on this.
      </p>
      <p>
        First of all, I decided to build the entire application without any
        extra dependencies like it was suggested.
      </p>
      <p>
        Secondly since there doesn't seem to be a way to make any API requests
        (put or post) I decided to add the functionality to cache the form data
        of the application in localStorage.
      </p>
      <p>
        Thirdly, I didn't add the component for video based questions in the
        app, because after checking the schema, I noticed that there are
        properties such as 'additional_info', 'duration' and 'time_format' that
        are not included (but should be) in the schema. I do not think the
        purpose of this test is to edit the schema.
      </p>
      <p>
        Finally, I used context and reducers to manage the data for the form in
        the entire application. I only used useState within certain components.
      </p>
      <p>
        Please go through my code and if possible I would love to hear your
        thoughts about how well I did on this project. It took me about 8 hours
        to complete. You can email me on{" "}
        <a className="underline" href="mailto:nonsokingsley61@gmail.com">
          nonsokingsley61@gmail.com
        </a>
        . Thank you.
      </p>
      <button
        className="bg-primary-green text-[white] p-2 px-3 rounded-full flex justify-center w-full mt-5"
        onClick={() => setShowModal(false)}
      >
        Dismiss
      </button>
    </div>
  );
}
