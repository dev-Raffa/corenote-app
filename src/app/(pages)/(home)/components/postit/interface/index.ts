import { note } from '@/utils/interfaces/note';

export interface IStatePostIt {
  isEditing: boolean;
  buttonClicked: 'edit' | 'change_color' | '';
  noteChanges: note | Omit<note, 'id'>;
}
