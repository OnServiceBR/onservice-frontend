import http from "../http-common";

class PrestadorDataService {
  getAll() {
    return http.get("/prestadores");
  }

  get(id) {
    return http.get(`/prestadores/${id}`);
  }

  create(data) {
    return http.post("/prestadores", data);
  }

  imgCreate(data) {
    return http.post("/upload", data);
  }
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  update(id, data) {
    return http.put(`/prestadores/${id}`, data);
  }

  delete(id) {
    return http.delete(`/prestadores/${id}`);
  }

  deleteAll() {
    return http.delete(`/prestadores`);
  }

  findByTitle(title) {
    return http.get(`/prestadores?title=${title}`);
  }
}

export default new PrestadorDataService();
