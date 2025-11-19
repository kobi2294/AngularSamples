# Angular 21 - Signal Forms

## Agenda
* Creating a simple form
* Validation with signal forms
* Displaying error messages and validation status
* Creating custom validation
* Creating conditional validation
* Creating composed validation - on multiple fields
* Schema - required, min, max - automatic on fields
* Hidden fields using the `hidden` function

``` html
@if(!myField.state().hidden()) { show the field}
```

```typescript
hidden(form, ctx => ctx.valueOf(form.field) === 'some value')

```

* Replacement for Control Value Accessor
* Form Arrays and validation using 

* Using the scehma function to modulize parts of the schema

```typescript
const userSchema = schema<T>(p => {
    required(p.password), 
    email(p.email)
})
```
and apply it in the form schema using

```typescript
readonly f = form(model, p => {
    apply(p, userSchema)
})
```

* The `submit` function
```typescript
submit(form, async () => {
    // Promise<void | undefined> if all goof
    // Promise<array of errors> if there are problems
})
```

you can then `form.reset()` to reset all dirty and touched statuses (but not the value)
an example of returning errors:
```typescript 
return [{kind: 'name sucks', message: 'the name is really bad', field: form.username}]
```



* Field Metadata using the `metadata` and `aggregateMetadata` functions

