if (Posts.find().count() === 0) {
    Posts.insert ({
        title: 'Intro Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });
    Posts.insert ({
        title: 'Meteor',
        url: 'http://meteor.com'
    });
    Posts.insert ({
        title: 'The Meteor Book',
        url: 'http://themobook.com'
    });
}