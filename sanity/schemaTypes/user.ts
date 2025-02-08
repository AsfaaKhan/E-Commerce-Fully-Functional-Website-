import { defineField, defineType } from "sanity";

export const user = defineType({
    name: "user",
    type: "document",
    title: "User",
    fields: [
        defineField({
          name: 'clerkId',
          title: 'Clerk ID',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'name',
          title: 'Full Name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'imageUrl',
          title: 'Profile Image',
          type: 'url',
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          options: {
            list: [
              { title: 'User', value: 'user' },
              { title: 'Admin', value: 'admin' },
            ],
          },
        }),
        defineField({
          name: 'createdAt',
          title: 'Created At',
          type: 'datetime',
          initialValue: new Date().toISOString(),
        }),
      ],
    });