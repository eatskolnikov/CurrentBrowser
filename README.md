# Current Browser

Multiplatform way of getting the current browser.

## Example

Normally you would have something like this for Chrome

```js
chrome.runtime.onInstalled.addListener(function(){
//something here
}); 
```

And this for Firefox

```js
browser.runtime.onInstalled.addListener(function(){
//something here
}); 
```

You can replace them with

```js
CurrentBrowser().runtime.onInstalled.addListener(function(){
//something here
}); 
```

And now you can work for both browsers with a single codebase.