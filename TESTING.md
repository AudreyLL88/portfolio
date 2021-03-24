# Testing #
---


## Table of Contents ##
---

* 1. [Validation](#validation)
* 2. [Colour Contrast Checking](#colour)
* 3. [Manual testing](#manual)
        * [Viewing and Navigation](#viewing)
        * [Registration and Accounts](#registration)
        * [Product sorting and searching](#searching)
        * [Purchase and Checkout](#purchase)
        * [Admin and Store Management](#admin)
        * [Stripe](#stripe)
        *

* 4.[Back End Admin](#backend)
* 5.[Issues](#issues)


<a name="validation"></a>
## Validation ## 
---

**HTML**

I used the [**W3C Markup Validator Service**]() to validate all the HTML of my templates.
It raised the following issues:

**CSS**

I used the [**W3C CSS Validator Service**]() to validate my css files and it passed all tests.

**Javascript**

I used [**JSHint**]() to validate my .js files.
It raised the following errors:

**Python**

I used the Gitpod built-in linter and [**PEP8**] to validate my Python files.
It raised the following issues:

**Google Lighthouse**

<a name="colour"></a>
## Colour Contrast Checking ## 
---

I struggled a fair bit to find the right color scheme as I've tend to choose colors slightly too light in my other projects. To ensure that this would not happen again, I used [**WebAIM**] to check the color contrasts and it passed all tests.

<a name="manual"></a>
## Manual Testing ## 
---


**1. Viewing and Navigation**

a. As a shopper I want to be able to browse and view the product list.

* Expected: site expected to display functional product templates and navigation bars when the user is navigating the website.
* Testing: Navigated through the navigation bar and clicked on all navigation links to verify that corresponding product cards with correct informations are displayed. Navigated to 'All products ' to check that all the products added to the database were displayed.
* Result: The site acted as expected, displayed all the product cards accordingly and code 200 in the terminal.

b. As a shopper I want to be able to check individual product details such as price, size, category and description.

* Expected: site expected to display correct product detail template when the user clicks on a specific product card.
* Testing: Clicked on a product page and  was directed to the product page details, verified that all product data was correctly displayed as well as the GSAP animation and that dropdowns and selectors were functional.
* Result: The site acted as expected, displayed all product data correctly, the GSAP animation works and all dropdown/selectors are functional (size field is displayed only on clothing items). Showed code 200 in the terminal.

c. As a shopper I want to be able to easily go through my bag content and total cost of my order.

* Expected: site expected to allow non-registered users to add items to their bag, display the right total/individual costs and shipping costs.
* Testing: Added a product to the bag and checked that it was correctly displayed in the bag toast with no bugs then clicked on the 'Secure Chekout' button to navigate to the bag page. Verified if all product data shows and that the shipping cost and product cost add up correctly.
* Result: The site acted as expected and displayed correct informations in the bag toast as well as the bag template. Showed Code 200 in the terminal.


d. As a shopper I want to be able to read product reviews.

* Expected: site expected to display reviews affiliated to the product that the user is viewing.
* Testing: Navigated to the product detail template for different products and made sure that the reviewing section was displaying affiliated reviews / ratings and that the on scroll animation works as well.
* Result: Site acted as expected and displayed the affiliated reviews to the products. Shows code 200 in the terminal.

e. As a shopper I want to be able to read blog posts and comments.

* Expected: site expected to display all blog pages and affiliated comments when the user navigates to the blog section.
Testing: Navigated to the blog detail template for different blog posts anck checked that all details are displayed accordingly as well as the GSAP animation, made sure that the comment section was displaying affiliated comments and that the on scroll animation works as well.
* Result: Site acted as expected and displayed blog posts correctly and the affiliated comments as well. Shows code 200 in the terminal.


**2. Registration and Accounts**

a. As a site user I want to be able to register for an account.

* Expected: site expected to allow user to register for an account when valid email and password are entered in the form by the user.
* Testing: Navigated to the Register template by clicking on the User icon in the navigation bar. Checked that the registration form displays Log In link and then tested email and password confirmation fields to see if defensive tooltips worked and tried to submit an empty form to test defensive design. Clicked on 'Submit' button and was directed to the verification email template then checked the terminal for the verification link (sent in an email when the website is deployed on Heroku) and confirmed the email address.
* Result: Site acted as expected, allowed all registration steps without trouble and creates a user profile both in the database and on the website. Shows code 200 in the terminal.

b. As a site user I want to be able to login or logout of my account.

* Expected: site expected to display functional login and logout pages when the user navigate to them.
* Testing: Used the new user profile created for testing to navigate to the Log In page and tested the tooltips by trying to submit an empty field as well as submitting a wrong username/email/password. Entered correct log in details and clicked submit then was redirected to homepage. Navigated to the User icon in the navigation bar and selected Log Out in the dropdown menu. Clicked on 'Log Out' button in confirmation template.
* Result: Site acted as expected in both scenario and allowed the user to log in and log out without trouble. Shows 200 code in the terminal.

c. As a site user I want to be able to recover my password if necessary.

* Expected: site expected to send a 'recover password' email with link to change password page when the user clicks the 'Forgot password' link on login page and enters their email address.
* Testing: Cliked on the 'Forgot password' link and entered the test user email address in the password reset template. Checked the terminal for the verification link, navigated to the change password template and entered a new password in the affiliated field and confirmation field.
* Result: Site acted as expected and the user password was changed safely. Shows 200 code in the terminal.

e. As a site user I want to be able to have a customizable profile.

* Expected: site expected to display an editable profile detail form when user is on their profile page.
* Testing: Navigated to the My Profile template in the dropdown menu of the User section in the navigation bar. Verified that the username was displayed as well as the editable user detail form and that changes were saved when the after the edit button was clicked.
* Result: Site acted as expected and displayed the custom profile template as well as a functional user details form. Shows code 200 in the terminal.

f. As a site user I want to be able to create a product review.

* Expected: site expected to add a new product review when the review form is submitted by the user.
* Testing: Navigated as a registered user to a product detail page and clicked on the "leave a review" button to access the review form. Filled all the review form fields and clicked on the 'Submit' button.
* Result: Site acted as expected and displayed the new review details and rating in the review section of the product detail page. Shows code 200 in the terminal.

g. As a site user I want to be able to edit my product review.

* Expected: site expected to display the edit form after the user clicks the edit button and save all changes made to the product review when the 'submit' button is clicked.
* Testing: Navigated as a registered user to a product review written by me, clicked on the 'edit' icon button. Checked that the edit form was pre-filled with the previous review details and changed a few things in all fields to test that all changes would be saved after cliking the submit button.
* Result: Site acted as expected and saved/displayed all new informations in the updated product review. Shows code 200 in the terminal.

i. As a site user I want to be able to delete my product review.

* Expected: site expected to permanently delete a product review from the review section when the 'delete review' button is clicked by the user.
* Testing: Navigated as a registered user to a product review written by me, clicked on the 'delete' icon button. Clicked on the 'delete button' on the confirmation modal.
* Result: Site acted as expected and deleted the review from the database and the product detail review section. Shows code 200 in the terminal.

j. As a site user I want to be able to create a blog comment.

* Expected: site expected to add a new blog comment when the comment form is submitted by the user.
* Testing: Navigated as a registered user to a blog post page and clicked on the "leave a comment" button to access the comment form. Filled all the comment form fields and clicked on the 'Submit' button.
* Result: Site acted as expected and displayed the new comment in the review section of the Blog post page. Shows code 200 in the terminal.

k. As a site user I want to be able to edit my blog comment.

* Expected: site expected to display the edit form after the user clicks the edit button and save all changes made to the blog comment when the 'submit' button is clicked.
* Testing: Navigated as a registered user to a blog comment written by me, clicked on the 'edit' icon button. Checked that the edit form was pre-filled with the previous comment details and changed a few things in all fields to test that all changes would be saved after cliking the submit button.
* Result: Site acted as expected and saved/displayed all new informations in the updated pblog comment. Shows code 200 in the terminal.

l. As a site user I want to be able to delete my blog comment.

* Expected: site expected to permanently delete a blog comment from the store's blogpost when the 'delete comment' button is clicked by the user.
* Testing: Navigated as a registered user to a blog comment written by me, clicked on the 'delete' icon button. Clicked on the 'delete button' on the confirmation modal.
* Result: Site acted as expected and deleted the comment from the database and the blog post comment section. Shows code 200 in the terminal.

m. As a shopper I want to be able to contact customer's support.

* Expected: site to diplay a functional contact page and send email confirmation when the user sends a query through the contact form.
* Testing: Navigated to the Contact page through the navigation bar. First tried to submit an empty form to see if the defensive tooltips were working then filled all required fields and clicked the submit button.
* Result: Site acted as expected and sent a confirmation email to the user as well as the admin. Shows code 200 in terminal.

n. As a site user I want to be able to check my order history.

* Expected: site expected to display order history details when the user is on their profile.
* Testing: Navigated as a registered user to the My Profile section in the navigation bar and scrolled down after the form to check if all informations of previous orders were displayed in the Order History section and clicking the order numbers.
* Result: Site acted as expected and displayed all order history informations and functional links directing to the previous confirmation screens of each orders. Shows code 200 in terminal.

o. As a site user I want to be able to check my review history.

* Expected: site expected to display review history details when the user is on their profile.
* Testing: Navigated as a registered user to the My Profile section in the navigation bar and scrolled down after the form to check if all informations of previous written reviews were displayed in the Review History section.
* Result: Site acted as expected and displayed all review history informations and functional delete and edit buttons. Shows code 200 in terminal.

**3. Sorting and Searching**

a. As a shopper I want to be able to sort the list of available products .

* Expected: 
* Testing:
* Result:

b. As a shopper I want to be able to sort products by categories, alphabetical order or price. 

* Expected: site to sort product on page when the shopper makes use of the sort selector.
* Testing: Navigated to All products page in the navigation bar and sorted products by category, Alphabetical order, reverse Alphabetical order and price using the selector on the left side of the screen.
* Result: Site acted as expected and sorted all products according to the selection made. Shows code 200 in the console.

c. As a shopper I want to be able to search for a product by name, category or description .

* Expected: site to display the search results by name, category or description when the user uses the search bar.
* Testing: Used the search bar at the top of the page and conducted various queries by name, words present in descriptions and category to ensure that according products were displayed. 
* Result: Site acted as expected and displayed the correct products according to the search effected.

**4. Purchasing and Checkout**

a. As a shopper I want to be able to select the size and quantity of a product before putting it in my bag. .

* Expected: site expected to allow the user to select a size if any and a quantity by clicking on the according fields on the product detail page.
* Testing:
* Result:

b. As a shopper I want to be able to view items in my shopping bag. .

* Expected: site expected to display all bag content on toast when the user add a product to the bag and when the user click on the bag icon to view the bag page.
* Testing:
* Result:

c. As a shopper I want to be able to modify the quantity of items in the bag before checkout. 

* Expected: site expected to modify/change the product quantity when the user clicks on the quantity selector.
* Testing:
* Result:

d. As a shopper I want to be able to buy products by card safely.

* Expected: site expected to use the Stripe API to deal with payment when the user enters their credit card informations.
* Testing:
* Result:

e. As a shopper I want to be able to view an order confirmation after the purchase.

* Expected: site expected to display a confirmation page when the shopper's payment is successful
* Testing:
* Result:

f. As a shopper I want to be able to receive a confirmation email after checkout .

* Expected: site expected to send an automated confirmation email with all order details to the customer after the shopper has paid.
* Testing:
* Result:

**5. Admin and Store Management**

a. As an admin I want to be able to add a product to the store.

* Expected: site expected to add a new product when the blog form is submitted by the admin.
* Testing:
* Result:

b. As an admin I want to be able to edit a product from store .

* Expected: site expected to display the edit form after the admin clicks the edit button and save all changes made to the product when the 'submit' button is clicked.
* Testing:
* Result:

c. As an admin I want to be able to to delete a product from store .

* Expected: site expected to permanently delete a product from the store when the 'delete product' button is clicked by the admin.
* Testing:
* Result:

d. As an admin I want to be able to set the available stock of a product .

* Expected: 
* Testing:
* Result:

e. As an admin I want to be able to make a product unavailable until further notice .

* Expected: site expected to display the product status after the admin set the available stock for a product.
* Testing:
* Result:

f. As an admin I want to be able to create a blog post for the blog .

* Expected: site expected to add a new blog post when the blog form is submitted by the admin.
* Testing:
* Result:

g. As an admin I want to be able to edit a blog post.

* Expected: site expected to display the edit form after the admin clicks the edit button and save all changes made to the blog post when the 'submit' button is clicked.
* Testing:
* Result:

i. As an admin I want to be able to delete a blog post .

* Expected: site expected to permanently delete a blog post from the store's blog when the 'delete post' button is clicked by the admin.
* Testing:
* Result:

j. As an admin I want to be able to be notified when a customer send a query through the contact form.

* Expected: site expected to send an email to the admin with all contact form informations when contact form is used by a customer.
* Testing:
* Result:

<a name="admin"></a>
## Back end Admin ## 
---

<a name="issues"></a>
## Issues ## 
---