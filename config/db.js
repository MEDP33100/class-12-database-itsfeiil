const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'your_mongodb_atlas_connection_string_here';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const databaseConnection = {
  client: client,
  run: async function () {
    try {
      const database = client.db('blog');
      const posts = database.collection('posts');
      const query = { title: 'First Blog Post' };
      const post = await posts.findOne(query);
      console.log(post);
    } finally {
      await client.close();
    }
  },
};

module.exports = databaseConnection;
