# Testing #
---


## Table of Contents ##
---

* 1. [Validation](#validation)
* 2. [Colour Contrast Checking](#colour)
* 3. [Manual testing](#manual)
        * [Viewing and Navigation](#viewing)
        * [Registration](#registration)
        * [Product sorting and searching](#searching)
        * [Product reviews](#reviews)
        * [Blog comments](#blog)
        * [Contact](#contact)

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
* Testing:
* Result:

b. As a shopper I want to be able to check individual product details such as price, size, category and description.

* Expected: site expected to display correct product detail template when the user clicks on a specific product card.
* Testing:
* Result:

c. As a shopper I want to be able to easily go through my bag content and total cost of my order.

* Expected: site expected to allow non-registered users to add items to their bag, display the right total/individual costs and shipping costs.
* Testing:
* Result:


d. As a shopper I want to be able to read product reviews.

* Expected: site expected to display reviews affiliated to the product that the user is viewing.
* Testing:
* Result:

e. As a shopper I want to be able to read blog posts and comments.

* Expected: site expected to display all blog pages and affiliated comments when the user navigates to the blog section.
* Testing:
* Result:

f. As a shopper I want to be able to get suggested products.

* Expected: site expected to display a selection of products based on the category of the product currently viewed by the user.
* Testing:
* Result:

**2. Registration and Accounts**

a. As a site user I want to be able to register for an account.

* Expected: site expected to allow user to register for an account when valid email and password are entered in the form by the user.
* Testing:
* Result:

b. As a site user I want to be able to login or logout of my account.

* Expected: site expected to display functional login and logout pages when the user navigate to them.
* Testing:
* Result:

c. As a site user I want to be able to recover my password if necessary.

* Expected: site expected to send a 'recover password' email with link to change password page when the user clicks the 'Forgot password' link on login page and enters their email address.
* Testing:
* Result:

d. As a site user I want to be able to have a confirmation email after my registration.

* Expected: site expected to send a confirmation email after the user verifies their email for registration.
* Testing:
* Result:

e. As a site user I want to be able to have a customizable profile.

* Expected: site expected to display an editable profile detail form when user is on their profile page.
* Testing:
* Result:

f. As a site user I want to be able to create a product review.

* Expected: site expected to add a new product review when the review form is submitted by the user.
* Testing:
* Result:

g. As a site user I want to be able to edit my product review.

* Expected: site expected to display the edit form after the user clicks the edit button and save all changes made to the product review when the 'submit' button is clicked.
* Testing:
* Result:

i. As a site user I want to be able to delete my product review.

* Expected: site expected to permanently delete a product review from the review section when the 'delete review' button is clicked by the user.
* Testing:
* Result:

j. As a site user I want to be able to create a blog comment.

* Expected: site expected to add a new blog comment when the comment form is submitted by the user.
* Testing:
* Result:

k. As a site user I want to be able to edit my blog comment.

* Expected: site expected to display the edit form after the user clicks the edit button and save all changes made to the blog comment when the 'submit' button is clicked.
* Testing:
* Result:

l. As a site user I want to be able to delete my blog comment.

* Expected: site expected to permanently delete a blog comment from the store's blogpost when the 'delete comment' button is clicked by the user.
* Testing:
* Result:

m. As a site user I want to be able to contact customer's support.

* Expected: site to diplay a functional contact page and send email confirmation when the user sends a query through the contact form.
* Testing:
* Result:

n. As a site user I want to be able to check my order history.

* Expected: site expected to display order history details when the user is on their profile.
* Testing:
* Result:

o. As a site user I want to be able to check my review history.

* Expected: site expected to display review history details when the user is on their profile.
* Testing:
* Result:

**3. Sorting and Searching**

a. As a shopper I want to be able to sort the list of available products .

* Expected: 
* Testing:
* Result:

b. As a shopper I want to be able to sort products by  categories, alphabetical order or price. 

* Expected: site to sort product on page when the shopper makes use of the sort selector.
* Testing:
* Result:

c. As a shopper I want to be able to search for a product by name, category or description .

* Expected: site to display the search results by name, category or description when the user uses the search bar.
* Testing:
* Result:

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