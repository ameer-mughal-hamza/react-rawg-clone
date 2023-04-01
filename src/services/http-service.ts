import axiosClient from "./api-client";

export interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = axiosClient
      .get<T[]>("users", {
        signal: controller.signal,
      });

    return { request, cancel: () => controller.abort() }
  }

  addUser<T>(entity: T) {
    return axiosClient.post<T>("users", entity);
  }

  updateUser<T extends Entity>(entity: T) {
    return axiosClient
      .patch(`users/${entity.id}`, entity);

  }

  delete(id: number) {
    return axiosClient.delete(`users/${id}`);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;