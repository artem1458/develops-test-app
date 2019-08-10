export default class BlogService {
  apiBase = 'https://simple-blog-api.crew.red';

  getData = async path => {
    const res = await fetch(`${this.apiBase}${path}`);

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    return res.json();
  };

  postData = async (path, data) => {
    const res = await fetch(`${this.apiBase}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 201) {
      throw new Error(`Could not post, received ${res.status}`);
    }

    return res.json();
  };

  getAllPosts = async () => this.getData(`/posts/`);

  getDetailsOfPost = async postId =>
    this.getData(`/posts/${postId}?_embed=comments`);

  postComment = async data => this.postData('/comments', data);
}
