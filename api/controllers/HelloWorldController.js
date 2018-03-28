let todos = [
    { "ID": "1" , "Description": "Take out garbage"},
    { "ID": "2" , "Description": "Laundry"},
    { "ID": "3", "Description": "Code"}
];
module.exports = {

    helloworld: (req,res) => {
        res.send({ID: 1, Description: 2});
    },

    sayhello: (req,res) => {
        sails.log(req.body);
        let body = req.body;
        let id = body.ID;
        let description = body.Description;
        todos.push({ ID: id, Description: description})
        res.send(todos);
    }
}
