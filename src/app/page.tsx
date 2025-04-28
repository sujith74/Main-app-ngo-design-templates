// pages/index.js
'use client'
import React, {useEffect} from 'react';
import { Card, CardActionArea, CardMedia, Typography, Container, Grid, Box } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

// Demo data - you would replace these image URLs with your actual preview images
const demoOptions = [
  {
    id: 1,
    title: 'Organization Page-1',
    category: 'HOME STYLE',
    imageUrl: './assests/home.png',
    link: 'https://ngo-organisation-design-m26y.vercel.app/'
  },
  {
    id: 2,
    title: 'Organization Page-2',
    category: 'HOME STYLE',
    imageUrl: './assests/home2.png',
    link: 'https://design-ui-organization.vercel.app/'
  },
  {
    id: 3,
    title: 'Organization Page-3',
    category: 'Home STYLE',
    imageUrl: './assests/home3.png',
    link: 'https://ngo-design-template-1-nx9j.vercel.app/'
  },
  {
    id: 4,
    title: 'Organization Page-4',
    category: 'Home STYLE',
    imageUrl: './assests/home4.png',
    link: 'https://design-template-blush.vercel.app/'
  },
  // {
  //   id: 5,
  //   title: 'Campaign Design Template',
  //   category: 'CAMPAIGN',
  //   imageUrl: './assests/campaign.png',
  //   link: 'https://campaign-template-2.vercel.app/'
  // },
  // {
  //   id: 6,
  //   title: 'About Us',
  //   category: 'ABOUT US',
  //   imageUrl: './assests/about.png',
  //   link: 'https://about-us-two-indol.vercel.app/'
  // },
  // {
  //   id: 7,
  //   title: 'Program Page',
  //   category: 'program',
  //   imageUrl: './assests/program.png',
  //   link: 'https://program-page-pearl.vercel.app/'
  // }
];
function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('✅ ServiceWorker registered:', registration);
        })
        .catch((error) => {
          console.error('❌ ServiceWorker registration failed:', error);
        });
    }
  }, []);

  return null;
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Trust - Nonprofit Charity Template</title>
        <meta name="description" content="Choose from our various demo pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<ServiceWorkerRegister/>


      <main className="bg-gray-50 min-h-screen">
        <Container maxWidth="lg" className="py-16">
          <Box className="text-center mb-12">
            <Typography 
              variant="h4" 
              component="h2" 
              className="font-medium uppercase tracking-wide text-gray-800"
            >
              CHOOSE YOUR DEMO
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {demoOptions.map((demo) => (
              <Grid item xs={12} sm={6} md={4} key={demo.id}>
                <Link href={demo.link} passHref>
                  <Card 
                    className="transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
                    sx={{ maxWidth: '100%', height: '100%' }}
                  >
                    <CardActionArea sx={{ height: '100%' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={demo.imageUrl}
                        alt={demo.title}
                      />
                      <Box 
                        className="absolute bottom-0 left-0 w-full p-4 text-white"
                        sx={{ 
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                          width: '100%'
                        }}
                      >
                        <Typography className="text-xs font-medium text-gray-300">
                          {demo.category}
                        </Typography>
                        <Typography variant="h6" component="h3" className="font-bold">
                          {demo.title}
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}