import axios from "axios";
/* 
  The RestClient class provides re-usable methods to make web requests using the Axios node module. 
  To use the class it should instantiated using 'new RestClient(url)' passing in a base url for the API, e.g. 'http://localhost@:3001/api/1'.
  Each method takes in a URI for the endpoint the request is being made to. 
  If the response is not 2XX an error is thrown.
*/
export default class RestClient {
  client: any;
  constructor(url: string){
    this.client = axios.create({ 
      baseURL: url,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  async get(uri: string){
    const result = await this.client.get(uri).catch((err: any) => {
      throw err.response.data;
    })
    return result.data;
  }

  async post(uri: string, body: object){
    const result = await this.client.post(uri, body).catch((err: any) => {
      throw err.response.data;
    });
    return result.data;
  }

  async delete(uri: string){
    const result = await this.client.delete(uri).catch((err: any) => {
      throw err.response.data;
    })
    return result.data;
  }
}