import { defineType } from "sanity";

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Category Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
});
  