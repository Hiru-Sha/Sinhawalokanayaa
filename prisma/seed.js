const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  // Seed NominationCategories
  const category1 = await prisma.nominationCategory.upsert({
    where: { name: 'Best Innovation' },
    update: {},
    create: {
      name: 'Best Innovation',
      description: 'Award for the most innovative idea',
      mediaUrl: 'https://example.com/media/innovation.jpg',
      status: 'active',
    },
  });

  const category2 = await prisma.nominationCategory.upsert({
    where: { name: 'Community Service' },
    update: {},
    create: {
      name: 'Community Service',
      description: 'Award for outstanding community contributions',
      mediaUrl: 'https://example.com/media/community.jpg',
      status: 'active',
    },
  });

  // Seed Nominations
  await prisma.nomination.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      fullName: 'Alice Johnson',
      age: 30,
      email: 'alice@example.com',
      phoneNumber: '1234567890',
      achievements: 'Developed an app for clean water access',
      documentUrl: 'https://example.com/docs/alice-cv.pdf',
      mediaUrl: 'https://example.com/media/alice.jpg',
      type: 'Individual',
      status: 'active',
      categoryId: category1.id,
    },
  });

  await prisma.nomination.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      fullName: 'Bob Smith',
      age: 45,
      email: 'bob@example.com',
      phoneNumber: '0987654321',
      achievements: 'Led a local community recycling initiative',
      documentUrl: 'https://example.com/docs/bob-cv.pdf',
      mediaUrl: 'https://example.com/media/bob.jpg',
      type: 'Individual',
      status: 'active',
      categoryId: category2.id,
    },
  });

  // Seed GalleryItems
  await prisma.galleryItem.upsert({
    where: { title: 'Innovation Event 2024' },
    update: {},
    create: {
      title: 'Innovation Event 2024',
      description: 'Photos from the annual innovation awards',
      mediaType: 'image',
      mediaUrl: 'https://example.com/gallery/innovation-event.jpg',
      status: 'active',
    },
  });

  await prisma.galleryItem.upsert({
    where: { title: 'Community Service Highlights' },
    update: {},
    create: {
      title: 'Community Service Highlights',
      description: 'Highlights from community service projects',
      mediaType: 'video',
      mediaUrl: 'https://example.com/gallery/community-service.mp4',
      status: 'active',
    },
  });

  console.log('Seed data created.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
