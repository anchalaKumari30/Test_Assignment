List of testcases added in framework:

Positive testcases:

1. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Expected: Url changes to https://practicetestautomation.com/logged-in-successfully/
2. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Click Log out
   Expected: User is redirected back to the login page ("https://practicetestautomation.com/practice-test-login/")
   Login fields are visible.

3. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Expected: Page shows success message: "Logged In Successfully"
   Logout button is visible

4. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Expected: Page shows options - 'HOME', 'PRACTICE','COURSES', 'BLOG', 'CONTACT'

5. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Expected: Page has copyright and policy link on the footer which are clickable.

6. Navigate to login url : https://practicetestautomation.com/
   Enter username : student and Enter password : Password123
   Click Submit
   Navigate to courses screen
   Expected: Check for session persists, when user comes back on main screen

Negative testcase:

1. Navigate to login url : https://practicetestautomation.com/
   Enter username : incorrectUser and Enter password : Password123
   Click Submit
   Expected: Error message appears: "Your username is invalid!"

2. Navigate to login url : https://practicetestautomation.com/
   Enter username : incorrectUser and Enter password : incorrectPassword
   Click Submit
   Expected: Error message appears: "Your password is invalid!"
   username and password field gets empty

3. Navigate to login url : https://practicetestautomation.com/
   Leave username and password fields blank.
   Click Submit
   Expected: Error message appears: 'Your username is invalid!'

4. Navigate to login url : https://practicetestautomation.com/
   Enter valid username : student and empty password
   Click Submit
   Expected: Error message appears: 'Your password is invalid!
   Password fields gets empty
   '
