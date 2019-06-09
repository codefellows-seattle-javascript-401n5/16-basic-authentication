##Lab 16 - Basic - Authentication

##Configuration



## Testing and Verification
Using `HTTPIE`

- **POST** - /api/signup
- SEND: http POST :3000/signup username=richard password=richard
- EXPECT: A generated token.

- **GET** - /api/signin
- SEND: http :3000/signin --auth richard:richard
- EXPECT: A message that says "hi."


