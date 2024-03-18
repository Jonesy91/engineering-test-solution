import RestClient from "../restClient.ts";
import User from "../user.service.ts";

jest.mock('../restClient.ts');

/* 
  Below are unit tests which test whether the appropriate rest client method is called.
  There is one test for each method, get, post, delete. Each method is mocked using Jest
  to prevent the unit tests from calling the API to test the methods without needing 
  the API to be available.
*/


test('Test restClient.get is called by getUserById', async () => {
  const restClient = new RestClient('');
  const user = new User(restClient);
  
  const mockGet = jest.fn();
  RestClient.prototype.get = mockGet;
  
  const result = await user.getUserById('1');
  expect(restClient.get).toHaveBeenCalledTimes(1);
}); 

test('Test restClient.post is called by createUser', async () => {
  const restClient = new RestClient('');
  const user = new User(restClient);
  
  const mockPost = jest.fn();
  RestClient.prototype.post = mockPost;
  
  const result = await user.createUser();
  expect(restClient.post).toHaveBeenCalledTimes(1);
});

test('Test restClient.delete is called by deleteUserById', async () => {
  const restClient = new RestClient('');
  const user = new User(restClient);
  
  const mockDelete = jest.fn();
  RestClient.prototype.delete = mockDelete;
  
  const result = await user.deleteUserById('1');
  expect(restClient.delete).toHaveBeenCalledTimes(1);
});

