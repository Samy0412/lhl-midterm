// helper functions for item page
// const cookieSession = require("cookie-session");

const fetchAllItems = (db, cookies) => {
  return db.query(`SELECT * FROM items;`)
    .catch(error => { console.log("FETCH ALL ITEMS Fail", error); });
};

const fetchAllActiveItems = (db, cookies) => {
  return db.query(`SELECT * FROM items WHERE is_active = TRUE;`)
    .catch(error => { console.log("FETCH ALL ACTIVE Fail", error); });
};

const fetchAllUserItems = (db, cookies) => {
  const query = {
    text: `SELECT * FROM items WHERE seller_id = $1;`,
    values: [cookies.user_id]
  };
  return db.query(query)
    .catch(error => { console.log("FETCH ALL ACTIVE Fail", error); });
};

const fetchUserFavItems = (db, cookies) => {
  const query = {
    text: `SELECT * FROM favourites WHERE user_id = $1;`,
    values: [cookies.user_id]
  };
  return db.query(query)
    .catch(error => { console.log("FETCH ALL ACTIVE Fail", error); });
};

const createItem = (db, cookies) => {
  // create elements
  let $container = $("<article>");
  let $header = $("<div>");
  let $header_title = $("<h1>");
  let $header_pic_holder = $("<div>");
  let $header_pic = $("<img>");
  let $info = $("<div>");
  let $info_table = $("<table>");
  let $info_table_row = $("<tr>");
  let $info_table_data = $("<td>");
  let $options = $("<div>");
  let $form_buy = $("<form>");
  let $form_msg = $("<form");
  let $button_buy = $("<button>");
  let $button_msg = $("<button>");
  // add classes and attributes
  $container.attr("id", "the-item");
  $header.addClass("item-header");
  $header_title.text(INFORMATION[title]);
  $header_pic_holder.addClass("item-pic");
  $header_pic.attr("src", INFORMATION[url]);
  // $tweet_profileIMG.attr({ "src": tweet.user.avatars, "width": "50", "height": "50" });
  $info.addClass("item-info");
  $options.addClass("item-options");
  $form_buy.attr("id", "item-buy", "action", "/buy", "method", "POST");
  $button_buy.attr("type", "submit");
  $button_buy.text("Buy");
  $form_msg.attr("id", "msg-seller", "action", "/messages", "method", "GET");
  $button_msg.attr("type", "submit");
  $button_msg.text("Message Seller");
  //build the elements
  $container
    .append($header
      .append($header_title)
      .append($header_pic_holder
        .append($header_pic)))
    .append($info
      .append($info_table)
      .append($info_table_row)
      .append($info_table_data))
    .append($options
      .append($button_buy)
      .append($button_msg));
  return $container;
};

const renderItem = (item) => {
  console.log("item:", item.length, "\n", item[0]);
  if (item.length > 1) {
    for (const thing of item) {
      $("#container").append(createItem(thing));
    }
  } else {
    $("#container").append(createItem(item));
  }
};








// app.get("/urls/:shortURL", (req, res) => {
//   const shortURLSforTesting = Object.keys(urlDatabase);
//   let templateVars = {};
//   if (!shortURLSforTesting.includes(req.params.shortURL)) { // shortURL doesnt exist
//     res.send("<html><body><b>400 ERROR</b><br>Long URL for " + req.params.shortURL + " doesn't exist.<br>Please try again.</body></html>\n");
//   } else {
//     if (req.session.userID === null) { // not signed in
//       templateVars = {
//         userID: false,
//         username: req.session.username,
//         email: req.session.email
//       };
//       res.render("urls_show", templateVars);
//     } else if (urlDatabase[req.params.shortURL]["userID"] !== req.session.userID) { // wrong user
//       templateVars = {
//         userID: false,
//         shortURL: req.params.shortURL,
//         longURL: urlDatabase[req.params.shortURL],
//         username: req.session.username,
//         email: req.session.email
//       };
//       res.render("urls_show", templateVars);
//     }
//   }
//   templateVars = {
//     urls: urlDatabase,
//     shortURL: req.params.shortURL,
//     longURL: urlDatabase[req.params.shortURL]["longURL"],
//     userID: req.session.userID,
//     username: req.session.username,
//     email: req.session.email
//   };
//   res.render("urls_show", templateVars);
// });






module.exports = {
  fetchAllItems,
  fetchAllActiveItems,
  fetchAllUserItems,
  fetchUserFavItems,
  createItem,
  renderItem
};

// exports.fetchAllItems = fetchAllItems;
// exports.fetchAllActiveItems = fetchAllActiveItems;
// exports.fetchAllUserItems = fetchAllUserItems;
// exports.fetchUserFavItems = fetchUserFavItems;

// const user_id = req.session.user_id;
// const username = req.session.username;
// const cookies = { username: req.session.username, user_id: req.session.user_id };

// const user_id = req.session.user_id;
// const username = req.session.username;
// const query = {
//   text: `SELECT * FROM items WHERE is_active = TRUE;`,
//   values: []
// };
