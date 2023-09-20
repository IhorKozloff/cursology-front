# General Info
1. The project was created using "create-react-app"
2. State manager - ReduxToolkit, RTKQuery.
3. The database is written by hand and stored in - mongodb.com.
4. The server is written by hand and hosted at - https://first-server-there.onrender.com. Includes authorization, work with user activity, and work with the database. The server is open, it accepts requests via the following routes:
    - /user/register (POST)
    - /user/login (POST)
    - /user/save (POST)
    - /user/logout (POST)
    - /courses/all (GET)
    - /courses/:courseId (GET)
    - /courses/:courseId/like (POST)
    Example: https://first-server-there.onrender.com/courses/all
5. All data collected personally and real. The only exception is the text in the "Transcription" section - a specific lesson of the course. This text was generated using the website www.lipsum.com and entered into the database. For all other data, google, youtube, and other services were used. Such data as attachments - the author did it himself.
6. The project was chunked using technology "lazy" & "suspense" in App file. Also used redux-persit.


# Install.
1. Install all packages - npm install
2. Launch the application - npm start
3. In the address bar add - "/cursology". For example localhost:3000/cursology.
4. In order to start the storybook, use the command - npm run storybook

# Short Overview

1. "Home page" - In addition to the hover effects provided by the layout, in the Hero section, the icons and black banners around the picture with the girl also have a simple animation when hovering over. But, here you need to focus on the section "Categories". Here the "HomePageCategories" component gets brief information about all the courses. Using the "getRandomItemsFromArray" function, the component draws 4 randomly selected courses from all available ones. Thus, when you open the page, the set of 4 courses is always different. The component renders only those courses that match the category specified with the help.

2. Being an unauthorized user, when clicking on almost any link that leads to another page, the user is taken to the "Authorization Page". On this page, we have two authorization forms available. Switching between them is carried out by clicking on the slider checkbox.

3. When clicking on a course in the "categories" section (where the tabbar is), the authorized user will be taken to the course page, but more on that later. The "Get started" buttons and the link in the "Categories" header lead the authorized user to the page - "CoursesLibrary", we'll talk about this right now. 

    3.1 The search bar works, with a successful search, courses appear, with an unsuccessful search, the picture is a stub. The reset button resets the search results.

    3.2 The "Recommended" "Viewing" sections work the same way. 4 random courses corresponding to the meaning of the section are shown. The "Explore all" button reveals the full lists of courses corresponding to the sections.

    3.3 The tabbar switches categories, which results in courses being filtered at the very bottom of the page. Because this causes the whole page to be re-rendered, it seems that the tabbar somehow affects the sections "Recommended" and "Viewing" Because of the logic described above. But actually it is not.

    3.4 Section "Top courses". Displays courses in the Development category by default. Categories can be changed both in the tabbar at the top of the page, and by clicking on the blue text - the name of the category. Subcategories - made with blue buttons, also filter courses, but by subcategory.

4. Clicking on a course takes the user to the page for that course - "CourseByIdPage".

    4.1 The "Enroll for free" button doesn't do anything. And also as a preview of the video can be the first lesson of the course. That's the way it should be.

    4.2 In the "This course includes" section, all items except time may or may not be, this is the idea) A very indicative course in JavaScript or TypeScript. But this does not mean that the rest are bad, the author conscientiously worked through all the courses)

    4.3 From the non-obvious - there is still a button - "Like". The user can put a like, or remove it when clicked again (but not instantly, such protection). When clicked, a request is sent to the server where information about the likes of the course is stored. Thus, we see the number of likes of all users in real time, you can try from different accounts.

5. Go directly to the lessons, the user can click on the lesson itself in the drop-down list. Thus he gets to - "LessonPage". 

    5.1 The "Show lessons" button opens the list of lessons. The list section with the current lesson immediately opens. Scrolling works a little peculiar. The logic behind changing icons is as follows. Just a lesson - a gray icon, the current lesson is a yellow icon. If the video is playing - yellow icon - pause. If the video has been watched to the end - a gray icon with a check mark, or a yellow icon with a check mark if the video has been watched and the lesson is current.

    5.2 The progress marker is also fully functional. Interest is added as soon as the next video is watched to the end. Or move the current time track of the video to the end forcibly.

    5.3 The list of lessons is closed with the "Close" button or by clicking on the backdrop.

    5.4 It should also be said that the progress of each video is saved to the global storage every 3 seconds. And once every 1 minutes, data about user activity is sent to the server. Lesson progress, likes, watched to the end of the video. Provided that the user is authorized. The logic for sending user activity data is written in the component - "SaveUserClientsDataOnServer". 
    Which in turn sits in the header. At the time of sending the data, a message appears in the console "user activity data sent" - for convenience.

    5.5 Lesson attachment - if they exist, they are displayed, otherwise, the entire section will not be rendered. To download, you need to click on the yellow icon, or on the link "download all".

    5.6 The "Next Lesson" button switches to the next lesson. If the current lesson is the last one, the button switches to the previous one.

6. Thank you for viewing this file, I sincerely hope you enjoy the project. Have a nice day)     
