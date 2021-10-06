# BetterBase
A web page that can take JSON files (mainly from [MetaBase](https://metabase.com)), and render them in a table, where you can filter, sort, and do many other things without needing to fetch from the server again, or to write queries.

# Built With
- JavaScript
- React
- Redux/RTK
- VSCode
- [Ant Design](https://ant.design/)


# Why not use MetaBase's own features?
MetaBase is great! it does help you go through data on a database and query what you need, but if you need to search through that query, you need to add even more queries, which makes it fetch the data again, it takes longer than it should, so just taking that data (by downloading a JSON file) and using it here will make it much simpler!

# Who Is this for?
This would generally help those that are using data that they know isn't updating, and would want to filter/sort to get the information they need

# How to use this?
While this project focuses mainly on MetaBase, you can also use files generated elsewhere if they follow the right format!

- Get your JSON file
  - Download a JSON file from a MetaBase question
  - Get a JSON file elsewhere that is an array of objects, that uses the same keys on all objects.
    - Good ✅
      ```json
      [ 
        {
          "name": "Dude",
          "age": 28,
          "hobbies": null // since Guy have a "hobbies" key, Dude should also have one, if here's no data to add, we use null 
        },
        {
          "name": "Guy",
          "age": 25, 
          "hobbies": "NPC" 
        }
      ]
      ```
      
      ```json
      [ 
        {
          "name": "Dude",
          "age": 28
        },
        {
          "name": "Guy",
          "age": 25
        }
      ]
      ```
    - Bad ❌
    
      ```json
      [ 
        {
          "name": "Dude",
          "age": 28
        },
        {
          "name": "Guy",
          "age": 28,
          "hobbies": "NPC" // there's a key that doesn't exist in the other object, it may work but you won't get all results.
        }
      ]
      ```
    
      ```json
      [ 
        {
          "name": "Dude",
          "age": 28
        },
        [ // All elements of the main array should be objects.
          {
          "name": "Guy",
          "age": 28,
          }
        ]
      ]
      ```

## Authors

👤 **SpaYco**

- Github: [@SpaYco](https://github.com/SpaYco)
- Twitter: [@iSpaYco](https://twitter.com/iSpaYco)
- Linkedin: [Aziz Mejri](https://www.linkedin.com/in/spayco/)
- Hackernoon: [@SpaYco](https://hackernoon.com/@SpaYco)

# 🤝 Contributing
Contributions, issues and feature requests are welcome!

# Show your support
Give a ⭐️ if you like this project!

📝 License

This project is [GPL](./LICENSE) licensed.

Enjoy!
