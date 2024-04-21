import 'dotenv/config';
import { ApiRouterNotes } from './routers/notes';

class CorenoteApi {
  notes = new ApiRouterNotes();
  constructor() {}
}

export const coreNoteApi = new CorenoteApi();
