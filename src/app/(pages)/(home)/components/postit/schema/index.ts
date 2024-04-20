import { z } from 'zod';

export const PostItFormSchema = z.object({
  title: z.string(),
  isFavorite: z.boolean()
});

export type PostItForm = z.infer<typeof PostItFormSchema>;
