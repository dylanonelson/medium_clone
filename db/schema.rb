# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150520180750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",         null: false
    t.integer  "commenter_id", null: false
    t.string   "fragment_id",  null: false
    t.integer  "story_id",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "comments", ["commenter_id"], name: "index_comments_on_commenter_id", using: :btree
  add_index "comments", ["fragment_id"], name: "index_comments_on_fragment_id", using: :btree
  add_index "comments", ["story_id"], name: "index_comments_on_story_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "followable_id",   null: false
    t.string   "followable_type", null: false
  end

  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "session_token"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "sessions", ["session_token"], name: "index_sessions_on_session_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "stories", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "author_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "banner_file_name"
    t.string   "banner_content_type"
    t.integer  "banner_file_size"
    t.datetime "banner_updated_at"
    t.boolean  "published",           default: false, null: false
    t.datetime "published_at"
  end

  add_index "stories", ["published_at"], name: "index_stories_on_published_at", using: :btree
  add_index "stories", ["title"], name: "index_stories_on_title", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "story_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["story_id"], name: "index_taggings_on_story_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "label"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["label"], name: "index_tags_on_label", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
