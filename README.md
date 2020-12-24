# R Gear: An e-commerce site for Rango and Remington Employee Gear

This repo holds the code for the client that utilizes the R Gear API. It allows employees of Rango and Remington to purchase branded gear to wear on the job or at home.

## Important Links

- [API Repo](https://github.com/Waisath-CJ/r-gear-api)
- [Deployed Client](https://waisath-cj.github.io/r-gear-client)
- [Deployed API](https://fierce-waters-36807.herokuapp.com/)

## Planning Story

In planning for this project, I decided to remake my senior project that I did in college using `React` for the client and `Node/Express/Mongoose` for the server API. I decided to begin with implementing the functionality of the API first so I could use `Postman` to make sure that the routes worked properly. Once the API was working how I wanted it to, I moved on to designing the client. This planning process was a little complicated as I had requirements that I needed to meet that the original project idea didn't meet; so I had to tweak some things to make it work.

However, there are still things that need to be updated in order for this project to be functional for Rango and Remington to use for their employee merch site.

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to see all products.
- As a signed in user, I would like to see a single product.
- As a signed in user, I would like to add a product.
- As a signed in user, I would like to update my products.
- As a signed in user, I would like to delete my products.

### Technologies Used

- React
- JSX
- React-Bootstrap
- SCSS

### Unsolved Problems

- Implement the `cart` functionality
- Implement `Stripe`
- Change the `requireOwnership` to reflect more of `admin` privileges instead of owning it
- Implement `checkout` functionality with `email` functionality as well

## Images

---
#### App Screenshot:

![R Gear Landing Page](https://i.imgur.com/c88qr0y.png)

#### Wireframe:

![Landing Page Wireframe](https://i.imgur.com/Zh7WSVQ.png)
![Sign Up Wireframe](https://i.imgur.com/PEqpAIs.png)
![Login Wireframe](https://i.imgur.com/KdpD7Bo.png)
![Shop Wireframe](https://i.imgur.com/lMLyTZp.png)
![Change Password Wireframe](https://i.imgur.com/61pNzIU.png)
![Item Detail Wireframe](https://i.imgur.com/EafEUcF.png)
![Cart Wireframe](https://i.imgur.com/fdlefGm.png)