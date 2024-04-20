import { postIt } from '@/utils/interfaces/postit';
import 'dotenv/config';

export class ApiRouterNotes {
  private endpoint: string = `${process.env.BASE_URL}notes`;
  private headers: Headers = new Headers();

  constructor() {
    this.headers.append('content-Type', 'application/json');
    this.headers.append('access-key', String(process.env.SECRET_KEY));
  }

  async getAll(): Promise<any> {
    console.log(this.endpoint);
    return await fetch(this.endpoint, {
      headers: this.headers,
      method: 'GET'
    }).then((data) => data.json());
  }
  async save(args: Omit<postIt, 'id'>) {
    const create = {
      ...args
    };

    return await fetch(this.endpoint, {
      method: 'POST',
      body: JSON.stringify(create)
    });
  }

  async edit(id: number, args: Partial<postIt>) {
    const update = {
      ...args
    };
    return await fetch(`${this.endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(update)
    });
  }

  async delete(id: number) {
    return await fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE'
    });
  }
}
