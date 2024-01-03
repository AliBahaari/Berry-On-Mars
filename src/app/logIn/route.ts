export async function POST(request: Request) {
  const { username, password } = await request.json()
  if (username === 'Admin' && password === '1234')
    return Response.json({ status: 200, text: 'Authenticated' })
  return Response.json({ status: 400, text: 'Not Authenticated' })
}
