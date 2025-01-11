// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  workspaces: [
    {
      __typename: 'Workspace' as const,
      id: 42,
    },
    {
      __typename: 'Workspace' as const,
      id: 43,
    },
    {
      __typename: 'Workspace' as const,
      id: 44,
    },
  ],
})
