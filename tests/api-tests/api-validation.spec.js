const { test, expect } = require('@playwright/test');

test.describe('OrangeHRM Login Functionality', () => {
test('API_TC_001 - Get Post by ID', async ({ request }) => {
    const response = await request.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);
    
    //Verify the response body id to be 1
    expect(body.id).toBe(1);
    //verify the response body userId to be a number 
    expect(body.userId).toEqual(expect.any(Number));
    //verify the response body title to be a string
    expect(body.title).toEqual(expect.any(String));
    
});

test('API_TC_002 - Create New Post', async ({ request }) => {

    const payload = {
        title: 'Playwright API Testing',
        body: 'Sample Post Content',
        userId: 1
    };

    const response = await request.post('/posts', {
        data: payload
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);
    
    //verify the response body title, body and userId to match the payload
    expect(body.title).toBe(payload.title);
    //verify the response body body to match the payload
    expect(body.body).toBe(payload.body);
    //verify the response body userId to match the payload
    expect(body.userId).toBe(payload.userId);
    //verify the response body id to be defined
    expect(body.id).toBeDefined();
});

test('API_TC_003 - Invalid Endpoint', async ({ request }) => {

    const response = await request.get('/invalid-endpoint');

    console.log(response.status());
    
    //verify the response status code to be 404
    expect(response.status()).toBe(404);
});
});