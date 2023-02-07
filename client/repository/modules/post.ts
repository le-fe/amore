import HttpFactory from "../factory";

class PostModule extends HttpFactory {
  private RESOURCE = "/post";

  async checkAvailable(username: string) {
    return await this.call("GET", `${this.RESOURCE}/available/${username}`);
  }

  async getTopAuthors() {
    return await this.call("GET", `${this.RESOURCE}/top-authors`);
  }

  async getTotal() {
    return await this.call("GET", `${this.RESOURCE}/total`);
  }
}

export default PostModule;
