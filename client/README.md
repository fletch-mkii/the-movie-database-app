# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After installing the relevant packages by running `yarn install`, you should be able 
to boot up the application by using the following command:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This application currently assumes the backend is running on `localhost:4000`, and can only be
modified by changing the value of the `backendURL` variable located in `src/api/index.js` on
line 7.  If your environment disallows port 4000 from being used then you should be able to
modify it in there to connect properly.

It's important to ensure that the backend is running on the correct port, but otherwise nothing
else should need to be done to get the client in working order.

### After the application is running
Once running you should be free to explore as you see fit.  The site is mostly responsive down to about 400px width, where it becomes notably less clean, though there are no design/UX changes to account for differences between large/mid size screens other than just having a layout the suits both.

There are two URLs, and any unmatched URL should redirect a user to the home screen at `/`.  Clicking a movie card on the home screen will bring a user to the movie details page, which has some brief details about the film at `/movie/:id`.  There's no handling for server 400's, so if a user appends non-ID characters to the end of the URL that result in the server returning a 400 response then it will display a blank page with a placeholder image and no content.  Other unmatched URL cases should be handled by the aforementioned home screen redirection.