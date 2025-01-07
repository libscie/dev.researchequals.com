// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  openAlexWorks: [
    {
      __typename: 'OpenAlexWorks' as const,
      id: 42,
    },
    {
      __typename: 'OpenAlexWorks' as const,
      id: 43,
    },
    {
      __typename: 'OpenAlexWorks' as const,
      id: 44,
    },
  ],
})
