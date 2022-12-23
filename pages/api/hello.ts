/* eslint-disable import/no-anonymous-default-export */

export const config = {
  runtime: 'experimental-edge',
};

export default async function () {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
