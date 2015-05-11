# Schema Information

## follows
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
follower_id       | integer   | not null, foreign key (references users)
followable_id     | integer   | not null, foreign key (references users and tags)
followable_type   | string    | not null, foreign key (references user_id or tag_id)

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
body        | string    |
published   | boolean   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
story_id     | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
