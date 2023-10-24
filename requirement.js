/*

Requirements

Book
 - ISBN             - String
 - Title            - String
 - Author           - [number]
 - Language         - String
 - Publication      - number
 - NumOfPages       - number
 - Categories       - [String]

Authors
 - id               - number
 - name             - string
 - books            -[String]

Publications
 - id               - number
 - name             - string
 - books            -[String]

 -----APIs------

 Books
 - GET
  --TO GET ALL BOOKS
  -TO GET SPECIFIC BOOKS
   - to get a list of books based on category
    - to get a list of books based on author
 -POST
 - to add new details

 -PUT
 - to update book details
  -to update/add new authors

 -DELETE
 - delete a book
 - author from a book

 AUTHORS

 - GET
  -all authors
  -specific authors
  list of all authors based on a book

 -POST
  - add new author


 -PUT
  -update author details

 -DELETE
 - delete an author

 PUBLICATION

 - GET
    -ALL
    - SPECIFIC
    -LIST BASED ON A BOOK
    
 -POST
    -ADD NEW PUB
    
 -PUT
    -UPDATE DETAILS
    -UPDATE/ADD NEW BOOK
 DELETE
    -DELETE A BOOK FROM PUB
    -DELETE A PUB


/*