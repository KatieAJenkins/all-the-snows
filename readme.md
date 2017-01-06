#Snow Day Form Validations with AngularJS

## Objectives

By the end of this code-along you will:

- Validate user input on a form
- Style form elements based on their validation state
- Display messages to the user

##Angular form properties, classes and descriptions
| Property  |  Class | Description  |
|---|---|---|
| $valid  |  ng-valid | Boolean that indicates whether an item is currently valid based on the rules you placed.  |   
| $invalid  |  ng-invalid |  Boolean that indicates whether an item is currently invalid based on the rules you placed. |   
|  $pristine |  ng-pristine |  Boolean that's true if the form/input has not been used yet. |   
|  $dirty |  ng-dirty |   Boolean that's true if the form/input has been used. |   
|  $touched |  ng-touched |  Boolean that's true if the input has been blurred |

## Setting up forms for validation

You will need to follow these steps in order for your form to make the best use of Angular validations:

1. Add the `novalidate` option to the form like `<form novalidate>`
1. Give the form a `name` attribute like `<form name="myForm" novalidate>`
1. Put an `ng-model` on each of the inputs
1. Put a `name` attribute on each of the inputs like `<input name="firstName">`

##Error object
Display the following in your view to see what is included in the error object:
```
formName.inputName.$error // an object of errors if invalid
```
## Styling the forms and displaying error messages:


Add class:

```html
<label ng-class="{ 'has-error' : formName.inputName.$invalid }"></label>
```

Show *general* error message:

```html
<p ng-show="formName.inputName.$invalid">Input is invalid</p>
```

Show *specific* error message:

```html
<p ng-show="formName.inputName.$error.minlength">Input needs to be at least 5 characters</p>
```
