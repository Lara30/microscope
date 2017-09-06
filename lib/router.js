Router.configure({
    layoutTemplate: 'layout',
    //pour retarder l'affichage d'un template jusqu'à ce que la route soit prête et affiche un template de chargement
    //à la place
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    //on demande d'attendre la souscription
    waitOn: function() { return
        Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
//nous avons dit au routeur d'utiliser le layout que nous venons de créer comme celui par défaut
// et nous avons défini une nouvelle route appelée postList que l'on appelle à la racine /
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne (this.params._id); }
});
//cela indique à Iron Router d'afficher la page "non trouvée" à chaque fois que la fonction data renvoie un objet
//non désiré ou vide
Router.route('/submit', {name: 'postSubmit'});
//nous avons besoin de vérifier si l'utilisateur est authentifié et sinon afficher le template AccessDenied au lieu du
//postSubmit attendu, puis nous stoppons le routeur ici
var requireLogin = function () {
    if (!Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
}
Router.onBeforeAction('dataNotFound', {only:'postPage'});
Router.onBeforeAction(requireLogin, {only:'postSubmit'});