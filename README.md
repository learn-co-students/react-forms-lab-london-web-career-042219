
* When instructed to save a value in the state, it doesn't matter what key you use, as long as it's in there!

## `TwitterMessage`

## `LoginForm`

1. Open the `components/LoginForm.js` file.

2. This component takes one prop: `handleSubmit` which is a function — this function
is called when the form is being submitted. By default, this function 
currently just includes `console.log`. That will allow you to see if the form is
functioning correctly when working in your browser.

6. Add the necessary event handler to the `<form>` element in order to call the `onSubmit` callback prop.

7. The `onSubmit` callback prop should only be called if _both_ fields are
filled in (with any value).

## Resources

* [React Forms](https://facebook.github.io/react/docs/forms.html)
