import RestClient from "./restClient.ts";

interface UserType {
  id: string,
  name: string,
  email: string
}

export default class User {
  
  restClient: RestClient;
  uri: string;

  constructor(restClient: RestClient){
    this.restClient = restClient;
    this.uri = '/users';
  }

  async getUsers(){
    try {
      const result = await this.restClient.get(this.uri);
      console.log('Users', result.data);
    } catch (err: any){
      throw new Error(err.message)
    }
  }
  
   async getUserById(id: string){
    try {
      const result = await this.restClient.get(`${this.uri}/${id}`);
      console.log('User', result);  
    } catch (err: any){
      throw new Error(err.message)
    }
  }
  
  async createUser(){
    const user = {
      name: 'Nathan Jones',
      email: 'testmail@mail.com'
    }
    let result;
    try {
      result = await this.restClient.post(this.uri, user);
      console.log('Created user',result);
    } catch (err: any){
      throw new Error(err.message)
    }
    return result;
  } 
  
  async deleteUserById(id: string){
    try {
      const result = await this.restClient.delete(`${this.uri}/${id}`);
      console.log(result);
    } catch (err: any){
      throw new Error(err.message)
    }
  }
}