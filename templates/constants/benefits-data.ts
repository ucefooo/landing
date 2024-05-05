const imagePath = (img: string) => `/photo${img}`;

export const benefitsCardData = [
    {
        title: 'token',
        subtitle: 'The Gateway token to the world of AI',
        image: imagePath('/benefits-token.webp'),
        content: `Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.`,
        isComingSoon: true,
    },
    {
        title: 'revenue',
        subtitle: 'Driving income and growth through decentralization',
        image: imagePath('/benefits-revenue.webp'),
        content: `CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`,
        isComingSoon: true,
    },
    {
        title: 'launchpad',
        subtitle: 'Driving the future of AI Innovation',
        image: imagePath('/benefits-launchpad.webp'),
        content: `The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
        isComingSoon: true,
    },
];

