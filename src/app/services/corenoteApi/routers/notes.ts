import 'dotenv/config';
import { note } from '@/utils/interfaces/note';

export class ApiRouterNotes {
  private endpoint: string = `${process.env.NEXT_PUBLIC_BASEURL}notes`;
  private headers: Headers = new Headers();

  constructor() {
    this.headers.append('content-Type', 'application/json');
    this.headers.append(
      'access-key',
      String(process.env.NEXT_PUBLIC_SECRETKEY)
    );
  }

  async getAll(): Promise<note[]> {
    return await fetch(this.endpoint, {
      headers: this.headers,
      method: 'GET'
    }).then((data) => {
      return data.json();
    });
  }

  async save(args: Omit<note, 'id'>): Promise<note[]> {
    const create = {
      create: { ...args }
    };

    return await fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(create)
    }).then((data) => data.json());
  }

  async edit(id: number, args: Partial<note>): Promise<note> {
    const update = {
      update: { ...args }
    };
    return await fetch(`${this.endpoint}/${id}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(update)
    }).then((data) => data.json());
  }

  async delete(id: number): Promise<note[]> {
    return await fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE',
      headers: this.headers
    }).then((data) => data.json());
  }
}
