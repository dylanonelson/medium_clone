# Schema Information

## users
column name     | data type         | details
----------------|-------------------|-----------------------
id              | integer           | not null, primary key
username        | string            | not null, unique
avatar          | file (Paperclip)  |
password_digest | string            | not null
provider        | string            |
uid             | string            |

## sessions
column name     | data type 
----------------|-----------
user_id         | integer   
session_token   | string    

## follows
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
follower_id       | integer   | not null, foreign key (references users)
followable_id     | integer   | not null, foreign key (references users and tags)
followable_type   | string    | not null, foreign key (references user_id or tag_id)

## stories
column name     | data type         | details
----------------|-------------------|-----------------------
id              | integer           | not null, primary key
author_id       | integer           | not null, foreign key (references users)
title           | string            | not null
body            | string            |
published       | boolean           | default: false, not null
banner          | file (Paperclip)  |
published_at    | datetime          |
last_edited_at  | datetime          | not null

## comments
column name     | data type | details
----------------|-----------|----------
body            | text      | not null
commenter_id    | integer   | not null
fragment_id     | string    | not null
story_id        | integer   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id    | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)


## pg_search_documents (PgSearch)
column name     | data type 
----------------|-----------
content         | text      
searchable_id   | integer   
searchable_type | string    