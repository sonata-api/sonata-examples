# js-backoffice-waltz

This example goes a little deeper into Sonata API and Waltz UI. It setups a backoffice for a ficticious "pet adoption" application as well as the client view.

Once you serve both web/ and api/ the signin page should be available in `http://localhost:8080/user/signin`. You may sign in with `letmein` username and password. Client view should be available in `http://localhost:8080/animals`.

First thing you should do before inserting anything is to insert a new user and set its password, then sign out and then sign in again with it, otherwise you should experience an `OWNERSHIP_ERROR` Access Control error (because the preset user doesn't have an unique ID to allow ownership verification).

You could edit the `animal` collection description to see how the API descriptions plays with the UI. Note that this same project could be implemented with end-to-end static typing using TypeScript.
