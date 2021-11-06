import { SuperHerosModel } from '../models/superHeros.mode';
import { superHerosRepository } from './../../infrastructure/Repositories/superHeros.repository';

export const SuperHerosService = {
  async create (superHerosModel:SuperHerosModel) {
    return superHerosRepository.create(superHerosModel);
  },

  async findAll (){
    return await superHerosRepository.findAll();
  },

  async find (id:number){
    return await superHerosRepository.find(id);
  },

  async update (id:number,superHerosModel:SuperHerosModel ){
    return await superHerosRepository.update(id,superHerosModel);
  },

  async remove (id:number){
    return await superHerosRepository.remove(id);
  }
};