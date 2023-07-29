# Project Name
The Wild Oasis

## Description
The Wild Oasis is a hotel website that manages bookings, cabins, and a beautiful dashboard displays charts based on current data

## Live Demo
click the link to [see the demo](https://the-wild-oasis-hotel.netlify.app)

### Main Functionalities
* Authentication
* Add and edit cabin
* Upload your own cabin
* filter bookings and cabins
* pagination
* Create user
* edit avatar and name
* dark mode
* beautiful dashboard with pie chart
* edit hotel settings

### Packages
* **supabase** : 
  the main library to manage all project data. I used it as a backend and one of the most important of using this library is **Authentication** which helps me to manage login and logout.
* **react query** : 
  I use react query to manage all remote states (like API requests) and handle the errors. the benefits of using react query for API requests are in the following list.
    * Data is stored in a cache
    * Automatic loading and error states
    * Automatic re-fetching to keep state synched
    * Pre-fetching
    * Easy remote state mutation (updating)
    * Offline support
* **date-fns** :
  date-fns is a medium library that provides many date formats. I used the library to format the classic style date to a nice style date.
* **react-router** :
  I used the library to make a SPA (Single-page application).
* **react-hot-toast** :
  this library displays a nice notification In case of successful, failed, or error operations. so, I used it
* **react-hook-form** :
  react-hook-form Handling bigger forms can be a lot of work, such as manual state creation and error handling. the library can simplify all this
* **react-icons** :
  react-icons provides many nice icons that work well with react, so I used it to display the project icons.
* **styled-components** :
  A very popular way of writing component-scoped CSS, right inside JavaScript. so, I used it for styling the entire project
* **recharts** :
  this library provides types of charts that display data like Pie charts.
* **react error boundary** :
* error boundaries only catch errors while React is rendering. So bugs that occur in some event handlers or in effect or in some asynchronous code will not be caught by the error boundary.

#### Overview
the project (The Wild Oasis) is a hotel website where you can make or edit your cabins, see your bookings, and log in or log out.



