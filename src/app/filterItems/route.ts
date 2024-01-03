export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({
    categoryItems: [
      {
        title: 'None',
        value: 0,
      },
      {
        title: 'Clothes',
        value: 1,
      },
      {
        title: 'Shoes',
        value: 2,
      },
      {
        title: 'Sunglasses',
        value: 3,
      },
      {
        title: 'Blouse',
        value: 4,
      },
    ],
  })
}
