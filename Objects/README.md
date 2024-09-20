# Objects

-> Groups multiple values together which makes the code easy to maintain and organised.
-> Method is a function inside an object.

## Built-In Objects

-> Objects which are built-in to the programming languages like JSON & local storage.

### JSON

-> JavaScript Object Notation, it's a syntax.
-> Normal JS objects aren't compatible with other programming languages that is why use JSON Objects despite it having less features.
-> Used when sending data between multiple computers, to store data.
-> It doesn't support functions.

{"name" : "Boss",
"age" : "32"}

### Local Storage

-> Used to store data permanently.

#### Storing Data
-> localStorage.setItem('message' : 'hello');

#### Retrieving Data
-> localStorage.getItem('message');

## Null

-> We use null when we intentionally want sth to be empty.

func(); -> 'default'
func(undefined); -> 'undefined'
func(null); -> null

## Auto Boxing

-> JS wraps string or other default data types into special objects which has its own methods.

-> console.log('hello'.length);
   console.log('hello'.toUpperCase());

-> doesn't work for null and undefined.

# References

-> When we create an object, what we are basically doing is we are pointing to a location in the Computer Memory where the values are stored which is basically called as reference.

-> Example: const object1 = {
                  message : 'hello',
                  };

            const object2 = object1;

            -> basically both object1 and object2 points to the same reference in the memory.

## Shortcuts

### Destructuring

-> It helps to take the property from the object and store it into the variable having the same name as the property.

-> Example:     const teamStats = {
                      wins : 4;
                      ties : 2;
                      losses : 0;
                      }

                const wins = teamstats.wins;
                const{wins} = teamstats; // both means the same thing.

  ### Shorthand property

  -> const teamstats = {
            wins : wins
            wins // both means the same thing and is called shorthand property.

  ### Shorthand Method

  -> const object5 = {
           method: function function55(){
             console.log('shorthand method');
             };
            method(){
              console.log('shorthand method');
              };
              // same thing called Shorthand Methods.
            };

## Exercises


![Objects(8a)](https://github.com/user-attachments/assets/8aa957f6-a70e-459d-938a-886c1c8ae075)
![Objects(8b)](https://github.com/user-attachments/assets/6ffe8181-5f68-4020-a181-aa4c5b7808db)
![Objects(8c)](https://github.com/user-attachments/assets/25893b4b-a2e3-44dc-baa4-96e7819f9851)

                  

