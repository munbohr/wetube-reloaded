import User from "../models/User";

export const getJoin = (req, res) => { res.render("join", { pageTitle: "Join" }); }
export const postJoin = async (req, res) => {
    const { name, email, username, password,comfirmPassword, location, } = req.body;
    const pageTitle = "Join";
    if (password !== comfirmPassword) {
        return  res.status(400).render("join", {pageTitle, errorMessage: `Password confirmation does not match.`})
    }
    const exists = await User.exists({$or: [{username}, {email}]});
    if(exists) {
        return  res.status(400).render("join", {pageTitle, errorMessage: `This username/email already taken.`})
    }
    try {
        await User.create({
            name, email, username, password, location,
        });
        return res.redirect("/login",);
    } catch(error) {
        return res.status(404).render("join", { pageTitle: " Upload Video", errorMessage: error._message });
    }
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});
export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const exists = await User.exists({username})
    if(!exists) {
        return res.status(400).render("login", {
            pageTitle: "Login", 
            errorMessage:"An account with this username doesn't exisits"
        });
    }
    res.end();
    //res.render("login", {pageTitle: "Login"});
};
export const logout = (req, res) => { res.send("Log Out") }
export const see = (req, res) => { res.send("See User") }