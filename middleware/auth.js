// middleware/auth.js
function checkAdminRole(req, res, next) {
    const admin = req.query.admin;


    if (admin === "true") {
        next();
    } else {
        res.status(403).send("Access Denied.")
    }
}

module.exports = checkAdminRole; 