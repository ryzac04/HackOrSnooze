"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $loginLinks.show();
}

// After login, show story submission form when submit link is clicked. 

function showSubmitForm(evt) {
  console.debug("showSubmitForm", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$loginSubmit.on("click", showSubmitForm);

// Show the user's favorited stories in a list when favorites link is clicked.

function showFavorites(evt) { 
  console.debug("showFavorites", evt);
  hidePageComponents();
  putFavoritesListOnPage();
};

$body.on("click", "#login-favorites", showFavorites)

// Show the user's stories when my stories link is clicked.

function showMyStories(evt) { 
  console.debug("showMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $myStories.show();
};
$body.on("click", "#login-my-stories", showMyStories);


