db.articles.insert([{
    ... name: 'learn-react',
    ... upvotes: 0,
    ... comments: [],
    ... }, {
    ... name: 'learn-node',
    ... upvotes: 0,
    ... comments: [],
    ... }, {
    ... name: 'my-thoughts-on-resumes',
    ... upvotes: 0,
    ... comments: [],
    ... }])

    db.articles.find({})

    db.articles.find({ name: 'learn-react' }).pretty()

    ///////////////////////////////////////////////

    