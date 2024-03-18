import RestClient from "./restClient.ts";

interface ParcType {
  id: string,
  name: string,
  descripion: string
}

export default class Parc {
  
  restClient: RestClient;
  uri: string;

  constructor(restClient: RestClient){
    this.restClient = restClient;
    this.uri = '/parcs';
  }

  async getParcs(){
    try {
      const result = await this.restClient.get(this.uri);
      console.log('Parcs', result.data);
    } catch (err: any){
      throw new Error(err.message);
    }
  }
  
  async getParcById(id: string){
    try {
      const result = await this.restClient.get(`${this.uri}/${id}`);
      console.log('Parc', result);
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
  
  async createParc(): Promise<ParcType>{
    const user = {
      name: 'Test Parc',
      description: 'This is a test parc'
    }
    let result;
    try {result = await this.restClient.post(this.uri, user);
      console.log('Created parc', result);
    } catch (err: any){
      throw new Error(err.message)
    }
    return result;
  }
  
  async deleteParcById(id: string){
    try {
      const result = await this.restClient.delete(`${this.uri}/${id}`);
      console.log(`Deleted parc ${id}`);
    } catch (err: any){
      throw new Error(err.message)
    } 
  }
}