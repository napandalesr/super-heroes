import { SuperHerosDto } from '../Http/dto/createsuperHeros.dto';
import httpClient from '../Http/httpClient';

export const superHerosRepository = {
  create: async(data:SuperHerosDto)=> {
    return await httpClient.post<SuperHerosDto>("data",data);
  },

  findAll: async()=> {
    return await httpClient.get<SuperHerosDto[]>("data");
  },

  find: async(id:number)=> {
    return await httpClient.get<SuperHerosDto>(`data/${id}`);
  },

  update: async(id:number,data:SuperHerosDto)=> {
    return await httpClient.patch<SuperHerosDto>(`data/${id}`,data);
  },

  remove: async(id:number)=> {
    return await httpClient.delete<SuperHerosDto>(`data/${id}`);
  }
};