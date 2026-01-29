# Chat SaaS API Documentation

Base URL: `http://localhost:3000` (development)

This API provides access to the Chat SaaS platform resources. All endpoints expect and return JSON.

## Table of Contents

- [Admin](#admin)
- [Organization](#organization)
- [Application](#application)
- [Folder](#folder)
- [Document](#document)
- [Model](#model)
- [Application Docs](#application-docs)
- [Document Embedding](#document-embedding)
- [Session](#session)
- [Message](#message)

---

## Admin

Manage platform administrators.

### `POST /admin`

Create a new admin.

**Body:**

```json
{
  "name": "Admin Name",
  "username": "admin_user",
  "password": "secure_password"
}
```

### `GET /admin`

List all admins.

### `GET /admin/:id`

Get a specific admin by ID.

### `PATCH /admin/:id`

Update an admin.

**Body:** (Partial of creation body)

```json
{
  "name": "Updated Name"
}
```

### `DELETE /admin/:id`

Remove an admin.

---

## Organization

Manage customer organizations.

### `POST /organization`

Create a new organization.

**Body:**

```json
{
  "name": "Acme Corp",
  "username": "acme_org", // Optional
  "password": "org_password", // Optional
  "contact": "someone@acme.com", // Optional
  "description": "Description", // Optional
  "isActive": true // Optional
}
```

### `GET /organization`

List all organizations.
_Note: Excludes sensitive fields like password and refreshToken._

### `GET /organization/:id`

Get organization details.

### `PATCH /organization/:id`

Update an organization.

### `DELETE /organization/:id`

Delete an organization.

---

## Application

Manage AI chat applications (chatbots).

### `POST /application`

Create a new application. Auto-generates an API key.

**Body:**

```json
{
  "name": "Support Bot",
  "description": "Customer support assistant", // Optional
  "system_prompt": "You are a helpful assistant.", // Optional
  "model_id": "uuid-of-model", // Optional
  "temperature": 0.7, // Optional
  "is_active": true, // Optional
  "organization_id": "uuid-of-organization"
}
```

### `GET /application`

List all applications.

### `GET /application/:id`

Get application details.

### `PATCH /application/:id`

Update an application.

### `DELETE /application/:id`

Delete an application.

---

## Folder

Manage folders for organizing documents within an organization.

### `POST /folder`

Create a new folder.

**Body:**

```json
{
  "name": "Financial Reports",
  "organization_id": "uuid-of-organization"
}
```

### `GET /folder`

List all folders.

### `GET /folder/:id`

Get folder details.

### `PATCH /folder/:id`

Update a folder.

### `DELETE /folder/:id`

Delete a folder.

---

## Document

Manage uploaded documents for RAG.

### `POST /document`

Register a new document metadata entry.

**Body:**

```json
{
  "filename": "report_q1.pdf",
  "file_type": "pdf", // Optional
  "folder_id": "uuid-of-folder", // Optional
  "organization_id": "uuid-of-org", // Optional
  "storage_key": "path/to/r2/bucket/file.pdf",
  "processing_status": "pending", // Optional: pending, processing, completed, failed, canceled
  "token_count": 1000 // Optional
}
```

### `GET /document`

List all documents.

### `GET /document/:id`

Get document details.

### `PATCH /document/:id`

Update document details.

### `DELETE /document/:id`

Delete a document.

---

## Model

Manage AI models available for applications.

### `POST /model`

Add a new AI model configuration.

**Body:**

```json
{
  "name": "GPT-4 Omni",
  "key_name": "gpt-4o"
}
```

### `GET /model`

List available models.

### `GET /model/:id`

Get model details.

### `PATCH /model/:id`

Update a model.

### `DELETE /model/:id`

Remove a model.

---

## Application Docs

Link folders to applications (Many-to-Many).

### `POST /application-doc`

Link a folder to an application.

**Body:**

```json
{
  "application_id": "uuid-of-application",
  "folder_id": "uuid-of-folder"
}
```

### `GET /application-doc`

List all link records.

### `GET /application-doc/:id`

Get a specific link record.

### `PATCH /application-doc/:id`

Update a link record.

### `DELETE /application-doc/:id`

Remove a link.

---

## Document Embedding

Manage vector embeddings for documents.

### `POST /document-embedding`

Store an embedding chunk.

**Body:**

```json
{
  "document_id": "uuid-of-document",
  "content": "Text content of the chunk...",
  "embedding": [0.123, -0.456, ...], // Array of numbers
  "chunk_index": 0,
  "metadata": "{\"json\": \"string\"}" // Optional stringified JSON
}
```

### `GET /document-embedding`

List all embeddings.

### `GET /document-embedding/:id`

Get specific embedding.

### `PATCH /document-embedding/:id`

Update an embedding.

### `DELETE /document-embedding/:id`

Delete an embedding.

---

## Session

Manage chat sessions.

### `POST /session`

Start a new chat session.

**Body:**

```json
{
  "external_user_id": "user-123", // Optional
  "platform": "telegram", // Optional
  "application_id": "uuid-of-app", // Optional
  "total_tokens": 0 // Optional
}
```

### `GET /session`

List all sessions.

### `GET /session/:id`

Get session details.

### `PATCH /session/:id`

Update session (e.g., token usage).

### `DELETE /session/:id`

Delete a session.

---

## Message

Manage chat messages within settings.

### `POST /message`

Add a message to a session.

**Body:**

```json
{
  "role": 1, // 0 for user, 1 for assistant (or as defined in your enum/logic)
  "content": "Hello world",
  "session_id": "uuid-of-session" // Optional, but usually required to link
}
```

### `GET /message`

List all messages.

### `GET /message/:id`

Get message details.

### `PATCH /message/:id`

Update a message.

### `DELETE /message/:id`

Delete a message.
