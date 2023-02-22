#### SOCIAL_SPHERE

> Author: Mae Anave Caña    
> Since: 2023-02-20    
> Updated: 2023-02-21    
> Version: 1.0    



##### Description: 
A dynamic social media platform designed to bring people from all walks of life together. With SocialSphere, users can connect with friends and family, join groups based on shared interests, and discover new content through an intuitive newsfeed algorithm. From posting photos and videos to engaging in real-time conversations, SocialSphere offers a wide range of features to keep users entertained and connected. With robust privacy settings and a commitment to user safety, SocialSphere is a safe and welcoming space for all. 



## Technologies

Listed below are the technologies used to make this app possible

| Name | Link | Description |
| ------ | ------ | ------ |
| ReactJS | [https://reactjs.org/](https://reactjs.org/) | Front-end Framework |
| Sanity | [https://www.sanity.io/](https://www.sanity.io/) | Backend Composable Content Cloud |
| Tailwind | [https://tailwindcss.com/](https://tailwindcss.com/) | CSS Framework |



## Packages/Dependencies
- @sanity/cli
- tailwindcss
- @sanity/client
- @sanity/image-url



## Install Packages/Dependencies
Install packages using the following command:
- Install packages in Frontend:
    - Go to `social_sphere_frontend/core` folder: `cd social_sphere_frontend/core`
- Install packages in Backend:
    - Go to `social_sphere_backend` folder: `cd social_sphere_backend`
- Install all global packages:
    - Go to root directory folder: `cd /`
- Then install packages in yarn and in npm:
    - Yarn Install: `yarn install`
    - NPM Install: `npm install`


## Backend - Sanity Setup
- Create an account in sanity.io [https://www.sanity.io/](https://www.sanity.io/)
- Then create the studio by in the `social_sphere_backend` folder:
    - `cd social_sphere_backend`
    - `npm create sanity@latest -- --coupon javascriptmastery2022`
- To run sanity:
    - Go to the folder you created from running `create sanity`:
        - `cd social_sphere_backend/core/` 
    - `npm run dev`
    - Go to `http://localhost:3333/`



## Frontend - Run the Client
Start the client server by going to `social_sphere_frontend/core` folder and running `development` environment
- Installation of tailwind with create-react-app is [here](https://tailwindcss.com/docs/guides/create-react-app).
- `cd social_sphere_frontend/core/`
- Yarn Run: `yarn run start`
- Go to `http://localhost:3000/`



## License: 
This code is licensed under the MIT License.
