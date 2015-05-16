elephant = User.create!(username: "elephant", password: "elephant", email: "elephant@app.com")
elephant.followers.create!(username: "monkey", password: "monkey", email: "monkey@app.com")
elephant.followers.create!(username: "dolphin", password: "dolphin", email: "dolphin@app.com")
elephant.followeds.create!(username: "turtle", password: "turtle", email: "turtle@app.com")
