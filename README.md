# HNG13 Stage 0 - Dynamic Profile Endpoint 

A simple RESTful API that returns my profile information and a dynamic cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

## Endpoint

**GET** `/me`

**Base URL:** https://stage0-production.up.railway.app/me

### Sample Response

```json
{
  "status": "success",
  "user": {
    "email": "abdulbarrshonibare@gmail.com",
    "name": "Abdulbarr Shonibare",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

