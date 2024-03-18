import RestClient from "./restClient.ts";

interface BookingType {
  user: string,
  parc: string,
  comments: string,
  bookingDate: Date,
  id: string
}

/* 
  The Booking class provides methods to handle the API calls the bookings endpoint. 
  Each method will call the appropriate API endpoint and print the results to the console.
*/
export default class Booking {
  restClient: RestClient;
  uri: string;

  constructor(restClient: RestClient){
    this.restClient = restClient;
    this.uri = '/bookings';
  }

  async getBookings(){
    try {
      const result = await this.restClient.get(this.uri);
      console.log('Bookings', result.data);
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
  
  async getBookingById(id: string){
    let result;
    try {
      result = await this.restClient.get(`${this.uri}/${id}`);
      console.log('Booking', result);
    } catch (err: any){
      throw new Error(err.message)
    }
  }
  
  async createBooking(): Promise<BookingType>{
    const user = {
      user: 'd7db1324-dab5-4a88-890f-70036cafe4f7',
      parc: '15154',
      comments: 'test booking',
      bookingdate: new Date(Date.now())
    }
    let result;
    try {
      result = await this.restClient.post(this.uri, user);
      console.log('Created booking ', result);
      
    } catch (err: any) {
      throw new Error(err.message)
    } 
    return result; 
  }
  
  async deleteBookingById(id: string){
    try{
      await this.restClient.delete(`${this.uri}/${id}`);
      console.log(`Booking ${id} has been deleted`);
    } catch (err: any){
      throw new Error(err.message)
    }
  }

}

