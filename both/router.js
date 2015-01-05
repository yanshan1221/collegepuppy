Router.configure({
    layoutTemplate: "appLayout"
});
Router.route("/", {
    name : "home",
    template : "check"
});

Router.route("/signup", {
    name : "register",
    template : "register"
});

Router.route("/signin", {
    name : "login",
    template : "login"
});

Router.route("/dashboard", {
    name : "dashboard",
    template : "dashboard"
});

Router.route("/test", {
    name : "test",
    template : "itemlist"
});