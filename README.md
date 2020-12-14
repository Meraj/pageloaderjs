# pageloaderjs
this is a very simple js library that load new page of website without refreshing it
**_NOTE:_**  this library wouldn't reduce load time because HTTP requests still send to the server to get content of the page

first of all load pageloader.js in your .html file

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <a href="#" class="nav-btn">Click Me</a>
      <main id="AppBody"></main>
        <script type="text/javascript" src="/path/to/pageloader.js"></script>
    </body>
</html>
````
after that initialize pageloader function : 
````html
<script type="text/javascript">
      pageloader(NavigationBTNClassName, // Navigation Buttons className
  AppBodyId,// The Container of app contents that will be updated
  onStartFunction,// function that load when navigation buttons clicked (for example you can append a loading spinner)
  onSuccessFunction,// function that load when page updated successfully
  onErrorFunction // function that load when there is an error while updating the page
  )
    });
</script>  
````

#Example

````html
<script>
    pageloader('nav-btn',// Navigation className
        'AppBody',// the container that going to update
  function (){ // onStart Function load when navigation buttons clicked
        alert('start Loading page')
    },function (){ // onSuccess function load when page loaded successfully
        alert('page loaded successfully')
    },function (){ // onError function load when there is an error while updating the page
        alert('load error')
    });
</script>
````


