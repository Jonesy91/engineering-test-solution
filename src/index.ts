import RestClient from './restClient.js';
import Booking from './bookings.service.ts';
import Parc from './parcs.service.ts';
import User from './user.service.ts';

/* 
  The main function is the starting point for the application.
  The function instiates the requried classes and runs through 
  the various methods which make handle the API calls.
*/
async function main(){
  const restClient = new RestClient('http://localhost:3001/api/1');
  const user = new User(restClient);
  const booking = new Booking(restClient);
  const parc = new Parc(restClient);

  console.log('---- Testing users endpoint ----')
  try {
    await user.getUsers();
    const newUser = await user.createUser();
    await user.getUserById(newUser.id);
    user.deleteUserById(newUser.id);
  } catch (err){
    console.log(err);
  }
  
  console.log('---- Testing bookings endpoint ----')
  try{
    await booking.getBookings();
    const newBooking = await booking.createBooking();
    await booking.getBookingById(newBooking.id);
    await booking.deleteBookingById(newBooking.id);
  } catch (err){
    console.log(err);
  }
  
  console.log('---- Testing parcs endpoint ----')
  try {
    await parc.getParcs();
    const newParc = await parc.createParc();
    await parc.getParcById(newParc.id);
    await parc.deleteParcById(newParc.id);
  } catch(err) {
    console.log(err);
  } 
}
main();
