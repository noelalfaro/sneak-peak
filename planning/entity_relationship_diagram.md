# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

##  List of Tables

Users Table:

| Column Name  | Type    | Description                       |
|--------------|---------|-----------------------------------|
| user_id      | integer | primary key                       |
| username     | text    | unique username of the user       |
| password     | text    | encrypted password                 |
| role         | text    | Newbie or Sneakerhead              |
| profile_pic  | text    | link to the profile picture (if any) |

Shoes Table:

| Column Name          | Type    | Description                        |
|----------------------|---------|------------------------------------|
| shoe_id              | integer | primary key                        |
| name                 | text    | name of the shoe model              |
| brand                | text    | brand name of the shoe              |
| color                | text    | color description of the shoe      |
| description          | text    | detailed description of the shoe   |
| material             | text    | materials used in the shoe         |
| technology           | text    | technologies implemented in the shoe |
| sizing_recommendations | text    | recommendations on shoe size selection |
| image                | text    | link to the shoe's image            |


Upvotes Table:

| Column Name | Type    | Description                        |
|-------------|---------|------------------------------------|
| upvote_id   | integer | primary key                        |
| shoe_id     | integer | foreign key referencing Shoes      |
| user_id     | integer | foreign key referencing Users      |


User_Shoes (Join Table):

| Column Name    | Type    | Description                    |
|----------------|---------|--------------------------------|
| user_shoe_id   | integer | primary key                    |
| user_id        | integer | foreign key referencing Users  |
| shoe_id        | integer | foreign key referencing Shoes  |
| highlight_status | boolean | indicates if shoe is highlighted |



## Entity Relationship Diagram
![digram_final](https://github.com/noelalfaro/web103_finalproject/assets/70645288/ddd8bee1-3357-4500-9b8e-6318fc8885ce)

