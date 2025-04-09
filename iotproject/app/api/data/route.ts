// import { NextResponse } from 'next/server';
import { prisma } from './../../../prisma';

// app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // const data = await prisma.sensor.findMany({
    //     select: {
    //       id: true,
    //       type: true,
    //       location: true,
    //       unit: true,
    //       temperatureReadings: {
    //         select: {
    //           id: true,
    //           value: true,
    //           timestamp: true,
    //         },
    //       },
    //       humidityReadings: {
    //         select: {
    //           id: true,
    //           value: true,
    //           timestamp: true,
    //         },
    //       },
    //       windSpeedReadings: {
    //         select: {
    //           id: true,
    //           value: true,
    //           timestamp: true,
    //         },
    //       },
    //     },
    //   });
      
    const mockData = [
      { name: 'Sensor 1', value: 45 },
      { name: 'Sensor 2', value: 60 }    ,
      { name: 'Sensor 3', value: 30 },
      { name: 'Sensor 4', value: 90 },
      { name: 'Sensor 5', value: 50 },
    ];
    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error('Mock Data Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
