Hello. My name is Kingsley Okafor. Welcome to my task. So I believe it's important to talk about some decisions I made while I worked on this.

First of all, I decided to build the entire application without any extra dependencies like it was suggested.

Secondly since there doesn't seem to be a way to make any API requests (put or post) I decided to add the functionality to cache the form data of the application in localStorage.

Thirdly, I didn't add the component for video based questions in the app, because after checking the schema, I noticed that there are properties such as 'additional\_info', 'duration' and 'time\_format' that are not included (but should be) in the schema. I do not think the purpose of this test is to edit the schema.

Finally, I used context and reducers to manage the data for the form in the entire application. I only used useState within certain components.

Please go through my code and if possible I would love to hear your thoughts about how well I did on this project. It took me about 8 hours to complete. You can email me on{" "} [nonsokingsley61@gmail.com](mailto:nonsokingsley61@gmail.com) . Thank you.