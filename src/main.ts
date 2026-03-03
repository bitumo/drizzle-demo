import { db } from './db/db';
import { usersTable } from './db/schema';

async function testInsert() {
  const result = await db.insert(usersTable).values({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    status: 'active',
  });
  console.log(result);
}

async function main() {
  testInsert();
}

main();
