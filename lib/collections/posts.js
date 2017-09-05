Posts = new Meteor.Collection ('posts');
//posts.allow permet de dire à Meteor les circonstances dans lesquelles les clients sont autorisés à faire
// des choses à la collection Post = ici dans la mesure où ils ont un userId
Posts.allow({
    insert: function(userId, doc) {
        //autoriser les posts seulement si l'utilisateur est authentifié
        return !! userId;
    }
});
