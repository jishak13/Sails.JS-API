let todos = [
    { "ID": "1" , "Description": "Take out garbage"},
    { "ID": "2" , "Description": "Laundry"}
];
module.exports = {

    helloworld: (req,res) => {
        res.set({
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers':'Content-Type'
        });
        res.send(todos);
    },

    sayhello: (req,res) => {
        res.set({
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers':'Content-Type'
        });
     
        // req.setHeader('Access-Control-Allow-Origin',"*");
        // req.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        // req.setHeader('Access-Control-Allow-Headers','Content-Type');
        sails.log(req.body);
        let body = req.body;
        let id = body.ID;
        let description = body.Description;
        todos.push({ ID: id, Description: description})
        res.send(todos);
    }
}