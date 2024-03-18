var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RestClient from './restClient.js';
let restClient;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.get('/users');
            console.log('Users', result.data);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.get(`/users/${id}`);
            console.log('User', result);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            name: 'Nathan Jones',
            email: 'testmail@mail.com'
        };
        let result;
        try {
            result = yield restClient.post(`/users`, user);
            console.log('Created user', result);
        }
        catch (err) {
            console.log(err.message);
        }
        return result;
    });
}
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.delete(`/users/${id}`);
            console.log(result);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function getBookings() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.get('/bookings');
            console.log('Bookings', result.data);
        }
        catch (err) {
            console.log(`${err.message}`);
        }
    });
}
function getBookingById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        try {
            result = yield restClient.get(`/bookings/${id}`);
            console.log('Booking', result);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function createBooking() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            user: 'd7db1324-dab5-4a88-890f-70036cafe4f7',
            parc: '15154',
            comments: 'test booking',
            bookingdate: new Date(Date.now())
        };
        let result;
        try {
            result = yield restClient.post(`/bookings`, user);
            console.log('Created booking ', result);
        }
        catch (err) {
            console.log(err.message);
        }
        return result;
    });
}
function deleteBookingById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield restClient.delete(`/bookings/${id}`);
            console.log(`Booking ${id} has been deleted`);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function getParcs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.get('/parcs');
            console.log('Parcs', result.data);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function getParcById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.get(`/parcs/${id}`);
            console.log('Parc', result);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function createParc() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            name: 'Test Parc',
            description: 'This is a test parc'
        };
        let result;
        try {
            result = yield restClient.post(`/parcs`, user);
            console.log('Created parc', result);
        }
        catch (err) {
            console.log(err.message);
        }
        return result;
    });
}
function deleteParcById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield restClient.delete(`/parcs/${id}`);
            console.log(`Deleted parc ${id}`);
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        restClient = new RestClient('http://localhost:3001/api/1');
        console.log('---- Testing users endpoint ----');
        yield getUsers();
        const user = yield createUser();
        yield getUserById(user.id);
        deleteUserById(user.id);
        console.log('---- Testing bookings endpoint ----');
        yield getBookings();
        const booking = yield createBooking();
        yield getBookingById(booking.id);
        yield deleteBookingById(booking.id);
        console.log('---- Testing parcs endpoint ----');
        yield getParcs();
        const parc = yield createParc();
        yield getParcById(parc.id);
        yield deleteParcById(parc.id);
    });
}
main();
