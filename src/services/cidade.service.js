import http from "../http-common";

class CidadeDataService {
  getAll() {
    return http.get("/cidades");
  }

  get(id) {
    return http.get(`/cidades/${id}`);
  }

  create(data) {
    return http.post("/cidades", data);
  }

  update(id, data) {
    return http.put(`/cidades/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cidades/${id}`);
  }

  deleteAll() {
    return http.delete(`/cidades`);
  }

  findByTitle(title) {
    return http.get(`/cidades?title=${title}`);
  }
}

export default new CidadeDataService();
