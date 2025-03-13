# Database Schema

## **Users Table**
| Column  | Type    | Description |
|---------|--------|-------------|
| id      | UUID   | Primary Key |
| name    | String | User Name |
| email   | String | Unique Email |
| role    | String | (Admin/User) |

## **Events Table**
| Column   | Type    | Description |
|----------|--------|-------------|
| id       | UUID   | Primary Key |
| title    | String | Event Title |
| date     | Date   | Event Date |
| location | String | Event Location |

## **Financials Table**
| Column    | Type  | Description |
|-----------|------|-------------|
| id        | UUID | Primary Key |
| amount    | Float| Transaction Amount |
| category  | String | Membership Fee/Donation |