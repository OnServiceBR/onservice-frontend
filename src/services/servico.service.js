import http from "../http-common";

class ServicoDataService {
  getBeleza() {
    return http.get("/servicos/beleza");
  }

  getManutencao() {
    return http.get("/servicos/manutencao");
  }

  getSaude() {
    return http.get("/servicos/saude");
  }

  getEnsino() {
    return http.get("/servicos/ensino");
  }

  getTecnologia() {
    return http.get("/servicos/tecnologia");
  }

  getEventos() {
    return http.get("/servicos/eventos");
  }

  get(id) {
    return http.get(`/servicos/${id}`);
  }

  create(data) {
    return http.post("/servicos", data);
  }

  update(id, data) {
    return http.put(`/servicos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/servicos/${id}`);
  }

  deleteAll() {
    return http.delete(`/servicos`);
  }

  findByTitle(title) {
    return http.get(`/servicos?title=${title}`);
  }
}

export default new ServicoDataService();
