import HttpFactory from "../factory";

class BoardModule extends HttpFactory {
  private RESOURCE = "/board";

  async list(queries?: object) {
    return await this.call("GET", `${this.RESOURCE}/`);
  }

  async retrieve(id: string) {
    return await this.call("GET", `${this.RESOURCE}/${id}/`);
  }

  async create(body: any) {
    return await this.call("POST", `${this.RESOURCE}/`, body);
  }
}

export default BoardModule;
