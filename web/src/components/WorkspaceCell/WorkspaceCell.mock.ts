// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  workspace: {
    __typename: 'Workspace' as const,
    id: 42,
  },
})
