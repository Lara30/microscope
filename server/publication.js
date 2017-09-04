Meteor.publish ('posts', function() {
    return Posts.find ();
});
//le paquet autopublish était activé par défaut mais pas conseillé car partagé à chaque client connecté donc il faut le
//désactiver : meteor remove autopublish
//ainsi tous les posts ont disparus
