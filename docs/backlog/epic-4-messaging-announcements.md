# Epic 4: Messaging & Announcements

Stories:

- Coach posts announcement; parent sends direct message; basic team chat.
  Acceptance:
- Thread list, message history, unread states; audit log entries; retention
  policy defined.

Tasks:

- Prisma: MessageThread, Message, AuditLog.
- Routes/UI: `/threads`, `/threads/:id/messages`.
- RBAC + retention policy.
- Unread state tracking per thread/user + tests.
- Retention cleanup job + tests.
