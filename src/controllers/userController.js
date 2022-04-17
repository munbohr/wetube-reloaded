import User from "../models/User";

export const getJoin = (req, res) => { res.render("join", { pageTitle: "Join" }); }
export const postJoin = async (req, res) => {
    const { name, email, username, password, location, } = req.body;
    const usernameExisits = await User.exists({username});
    const pageTitle = "Join";
    if(usernameExisits) {
        return  res.render("join", {pageTitle, errorMessage: "This Username already exists"})
    }
    const emailExists = await User.exists({email});
    if(emailExists) {
        return res.render("join", {pageTitle, errorMessage: "This Email address already used"})
    }
    await User.create({
        name, email, username, password, location,
    })
    return res.redirect("/login",);
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => { res.send("Log Out") }
export const see = (req, res) => { res.send("See User") }